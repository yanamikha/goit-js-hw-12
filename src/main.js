import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  showLoader,
  hideLoader,
  clearGallery,
  showLoadMoreButton,
  hideLoadMoreButton
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

hideLoadMoreButton();
hideLoader();
let form = document.querySelector('form');
let options = {
  theme: 'dark',
  position: 'topRight',
  maxWidth: 432,
  backgroundColor: '#EF4040',
  icon: 'fa-solid fa-triangle-exclamation'
};
let query = '';
let page = 1;
let per_page = 15;
let getImages = () =>
  getImagesByQuery(query, page, per_page).then(data => {
    var images = data.data.hits;
    if (images.length === 0) {
      iziToast.show({ message: 'No image available.' });
      return;
    }
    createGallery(images);
    let card = document.querySelector('.gallery-item');
    if (card) {
      window.scrollBy({
        top: window.innerHeight + card.getBoundingClientRect().height,
        behavior: 'smooth'
      });
    }
    if (page * per_page >= data.totalHits) {
      hideLoadMoreButton();
      iziToast.show({
        message: `We're sorry, but you've reached the end of search results.`
      });
    } else {
      showLoadMoreButton();
    }
  });
form.addEventListener('submit', event => {
  event.preventDefault();
  clearGallery();
  let inputEl = form.querySelector('input');
  query = inputEl.value.trim();
  options.message = 'Enter search param';
  if (!query) {
    iziToast.show(options);
    return;
  }
  inputEl.value = '';
  page = 1;
  getImages(query, page);
});

let loadMoreBtn = document.querySelector('#load-more-btn');
loadMoreBtn.addEventListener('click', async () => {
  page++;
  showLoader();
  hideLoadMoreButton();
  try {
    getImages(query, page);
  } catch (error) {
    let options = {
      theme: 'dark',
      position: 'topRight',
      maxWidth: 432,
      backgroundColor: '#EF4040',
      icon: 'fa-solid fa-triangle-exclamation',
      message: error
    };
    iziToast.show(options);
  } finally {
    hideLoader();
  }
});
