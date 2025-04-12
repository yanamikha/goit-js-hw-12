import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fontsource/montserrat/600.css';

let galleryEl = document.querySelector('ul.gallery');
let loadMoreBtn = document.querySelector('#load-more-btn');
let loaderEl = document.querySelector('#loader');
let loaderTextEl = document.querySelector('#loaderText');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250
});

export function createGallery(images) {
  if (images.length === 0) {
    let options = {
      theme: 'dark',
      position: 'topRight',
      maxWidth: 432,
      backgroundColor: '#EF4040',
      icon: 'fa-solid fa-triangle-exclamation',
      message:
        'Sorry, there are no images matching your search query. Please try again!'
    };
    iziToast.show(options);
    return;
  }

  let gallery = images.map(function (props) {
    let {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads
    } = props;
    return `<li class="gallery-item">
      <a href="${largeImageURL}" class="gallery-link">
        <img
            class="gallery-image"
            src="${webformatURL}" 
            alt="${tags}"
        />
        <div class="image-description">
          <div><h2>Likes</h2><p>${likes}</p></div>
          <div><h2>Views</h2><p>${views}</p></div>
          <div><h2>Comments</h2><p>${comments}</p></div>
          <div><h2>Downloads</h2><p>${downloads}</p></div>
        </div>
      </a>
      </li>
    `;
  });

  galleryEl.innerHTML = gallery.join('');
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderTextEl.innerHTML = 'Loading images, please wait...';
  loaderEl.classList.add('loader');
}

export function hideLoader() {
  loaderTextEl.innerHTML = null;
  loaderEl.classList.remove('loader');
}

export function showLoadMoreButton() {
  loadMoreBtn.style.display = 'block';
}

export function hideLoadMoreButton() {
  loadMoreBtn.style.display = 'none';
}
