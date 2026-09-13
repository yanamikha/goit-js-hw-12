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

const form = document.querySelector('form');
const loadMoreBtn = document.querySelector('#load-more-btn');

const options = {
  theme: 'dark',
  position: 'topRight',
  maxWidth: 432,
  backgroundColor: '#EF4040',
  icon: 'fa-solid fa-triangle-exclamation'
};

let query = '';
let page = 1;
const perPage = 15;

hideLoadMoreButton();
hideLoader();

async function getImages(isLoadMore = false) {
  const data = await getImagesByQuery(query, page, perPage);
  const images = data.hits;

  if (images.length === 0) {
    hideLoadMoreButton();

    iziToast.show({
      ...options,
      message: 'No image available.'
    });

    return;
  }

  createGallery(images);

  // Скролл только после Load More
  if (isLoadMore) {
    const card = document.querySelector('.gallery-item');

    if (card) {
      const cardHeight = card.getBoundingClientRect().height;

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth'
      });
    }
  }

  if (page * perPage >= data.totalHits) {
    hideLoadMoreButton();

    iziToast.show({
      ...options,
      message: "We're sorry, but you've reached the end of search results."
    });
  } else {
    showLoadMoreButton();
  }
}

form.addEventListener('submit', async event => {
  event.preventDefault();

  const inputEl = form.querySelector('input');
  query = inputEl.value.trim();

  if (!query) {
    iziToast.show({
      ...options,
      message: 'Enter search param'
    });

    return;
  }

  page = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    await getImages();
  } catch (error) {
    hideLoadMoreButton();

    iziToast.show({
      ...options,
      message: 'Something went wrong. Please try again!'
    });

    console.error(error);
  } finally {
    hideLoader();
  }

  inputEl.value = '';
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    await getImages(true);
  } catch (error) {
    page -= 1;

    iziToast.show({
      ...options,
      message: 'Something went wrong. Please try again!'
    });

    console.error(error);
  } finally {
    hideLoader();
  }
});
