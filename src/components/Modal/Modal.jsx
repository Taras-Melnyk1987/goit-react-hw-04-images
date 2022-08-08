import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, ModalBlock } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ src, title, onClose }) => {

  /*const onEscClick = e => {
    if (e.code === 'Escape') {
      onClose();
    }

    console.log(e.code);
  };*/

  const onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const onEscClick = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscClick);

    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [onClose]);

  return createPortal(
    <Overlay onClick={onOverlayClick}>
      <ModalBlock>
        <img src={src} alt={title} />
      </ModalBlock>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
