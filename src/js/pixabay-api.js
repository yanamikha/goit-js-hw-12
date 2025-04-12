import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let API_KEY = '49718296-934511357bd75d639d0773032';
let BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
  return await axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        page: page,
        per_page: 15,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
      }
    })
    .then(response => response.data.hits)
    .catch(error => {
      let options = {
        theme: 'dark',
        position: 'topRight',
        maxWidth: 432,
        backgroundColor: '#EF4040',
        icon: 'fa-solid fa-triangle-exclamation',
        message: 'Error on data loading'
      };
      iziToast.show(options);
    });
}
