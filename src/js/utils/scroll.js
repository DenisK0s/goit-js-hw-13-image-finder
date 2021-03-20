import constants from '../settings/constants';

const scrollUP = (page) => {
  const galleries = document.querySelectorAll('.gallery');
  const galleryIndex = page - 2;

  const activeGallery = galleries[galleryIndex];

  console.log(galleryIndex);

  const elementRect = activeGallery.getBoundingClientRect();

  const scrollPosition = elementRect.top + pageYOffset - constants.BASE_MARGIN;

  window.scrollTo({
    top: scrollPosition,
    left: 0,
    behavior: 'smooth',
  });

};

export default scrollUP;