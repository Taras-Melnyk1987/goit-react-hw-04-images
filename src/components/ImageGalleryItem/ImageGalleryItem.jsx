import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ alt, src, onClick }) => {
  return (
    <GalleryItem>
      <GalleryImage src={src} alt={alt} onClick={onClick} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
