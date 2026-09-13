import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let API_KEY = '49718296-934511357bd75d639d0773032';
let BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page, per_page) {
  return await axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        page: page,
        per_page: per_page,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
      }
    })
    .catch(error => {
      throw error;
    });
}
