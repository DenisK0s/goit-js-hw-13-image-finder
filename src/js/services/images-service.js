import imgApi from './apiService';
import notification from '../utils/notification';
import constants from '../settings/constants';

class ImagesService {

  constructor() {
    this.page = 1;
    this.totalPages = 0;
    this.imagesQuery = '';
  }

  get queryName() {
    return this.imagesQuery;
  }

  set queryName(newQuery) {
    this.imagesQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  fetchImages() {

    return imgApi.fetchImages(this.queryName, this.page)
      .then(({ total, hits }) => {

        this.totalPages = Math.ceil(total / constants.IMAGES_PER_PAGE);

        if (this.page === this.totalPages) {
          notification.infoMessage('No more images for your request!');
        };

        this.incrementPage();
        return hits; 
      })
      .catch((error) => {
        notification.errorMessage(error.message);
      });
  }
  
}

export default ImagesService;