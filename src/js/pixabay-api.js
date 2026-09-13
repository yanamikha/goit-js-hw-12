import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let API_KEY = '49718296-934511357bd75d639d0773032';
let BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page, per_page) {
  try {
    per_page = per_page >= 15 ? per_page : 15;
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        page,
        per_page,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
      }
    });

    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Ошибка',
      message: 'Не удалось загрузить изображения.'
    });

    throw error;
  }
}
