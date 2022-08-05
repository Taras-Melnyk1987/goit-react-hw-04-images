import axios from 'axios';

const AUTH_TOKEN = '28905200-9345137f0018e9ed8026ecc0d';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export default async function fetchImagesAPI(searchQuery, page) {
  const options = new URLSearchParams({
    key: `${AUTH_TOKEN}`,
    q: `${searchQuery}`,
    page: `${page}`,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '12',
  });

  return axios.get(`?${options}`).then(response => {
    if (response.status === 200) {
      return response.data;
    }
    return Promise.reject(new Error('что-то пошло не так'));
  });
}
