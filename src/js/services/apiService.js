import settigs from '../settings/apiSettings';

const {  BASE_URL, API_KEY, IMAGES_PER_PAGE } = settigs;

const api = {
  
  fetchImages(searchQuery, page) {

    if (!searchQuery) {
      return Promise.reject(new Error('Enter correct search query!'));
      // throw new Error('Enter correct search query!');
    };
    
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=${IMAGES_PER_PAGE}&key=${API_KEY}`;

    return fetch(url).then(response => {

      if (!response.ok) {
        throw response;
      }

      return response.json()
    });
  }
}

export default api;