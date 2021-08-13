import axios from 'axios';

const api = axios.create({
  baseURL: 'https://techno-train.herokuapp.com/',
  withCredentials: true,
  credentials: 'include',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'dfd': '111'
  }
});

export default api;
