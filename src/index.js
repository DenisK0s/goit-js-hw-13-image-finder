import './styles.scss';

import scrollPage from './js/utils/scroll';
import notification from './js/utils/notification';
import MarkupGenerator from './js/utils/markup';
import ImagesService from '../src/js/services/images-service';

import galleryTemplate from '../src/tamplates/gallery.hbs';
import searchFormTemplate from '../src/tamplates/searchForm.hbs';


const refs = {
  formWrapper: document.querySelector('.form-wrapper'),
  galleryBox: document.querySelector('.gallery-box'),
  loadMoreBtn: document.querySelector('.load-more-js')
};

const newForm = new MarkupGenerator (refs.formWrapper, searchFormTemplate);
newForm.createMarkup();

refs.form = document.querySelector('#search-form');

const newGallery = new MarkupGenerator(refs.galleryBox, galleryTemplate);
const imagesService = new ImagesService();

const searchImage = (event) => {

  event.preventDefault();

  imagesService.queryName = event.currentTarget.elements.query.value;
  
  newGallery.resetMarkup();
  imagesService.resetPage();
  imagesService.fetchImages().then(images => {

    if (images.length) {
      newGallery.createMarkup(images);
      //Раскоментировать если делаем пагинацию с помощью кнопки 
      refs.loadMoreBtn.disabled = false;
      refs.loadMoreBtn.classList.remove('is-hidden');
    } else {
      notification.errorMessage('Not found!');
    };
  }).catch(error => notification.errorMessage(error));
}

const onLoadMore = () => {
  imagesService.fetchImages().then(images => {
    newGallery.createMarkup(images);
    scrollPage(imagesService.page);
  });
}

// закоментировать обзёрвер для добавления элементов с помощью кнопки

// const observeGallery = (entries) => {
//   const { isIntersecting } = entries[0];
//   if (!isIntersecting) return;

//   onLoadMore();

// };

// const observeOptions = {
//   rootMargin: '50px'
// };

// const galleryObserver = new IntersectionObserver(observeGallery, observeOptions);

// galleryObserver.observe(refs.loadMoreBtn);
refs.form.addEventListener('submit', searchImage);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
