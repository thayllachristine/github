import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default API;