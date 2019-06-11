import axios from 'axios';

export default axios.create({
  // baseURL: 'http://iaw-proy2.test'
  baseURL: window.location.origin
});



// axios.defaults.baseURL = 'http://iaw-proy2.test';
