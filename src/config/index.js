const URLBackend = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://guijunflix.herokuapp.com';

export default {
  URLBackend,
};
