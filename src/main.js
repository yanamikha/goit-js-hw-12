import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

hideLoadMoreButton();
let form = document.querySelector('form');
let options = {
  theme: 'dark',
  position: 'topRight',
  maxWidth: 432,
  backgroundColor: '#EF4040',
  icon: 'fa-solid fa-triangle-exclamation'
};

form.addEventListener('submit', event => {
  event.preventDefault();
  let inputEl = form.querySelector('input');
  let query = inputEl.value.trim();
  options.message = 'Enter search param';
  if (!query) {
    iziToast.show(options);
    return;
  }
  inputEl.value = '';
  clearGallery();

  getImagesByQuery(query)
    .then(images => {
      showLoader();
      createGallery(images);
      if (images.length > 0) {
        showLoadMoreButton();
      } else {
        hideLoadMoreButton();
      }
      hideLoader();
    })
    .catch(error => {
      options.message = error;
      iziToast.show(options);
    });
});

let loadMoreBtn = document.querySelector('#load-more-btn');
loadMoreBtn.addEventListener('click', async () => {});
