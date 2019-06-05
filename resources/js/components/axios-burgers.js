import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://iaw-burger.herokuapp.com/api'
    //baseURL: 'http://localhost/api'
});

export default instance;