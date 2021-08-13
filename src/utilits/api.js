import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('Authentication');

const api = axios.create({
  baseURL: 'https://techno-train.herokuapp.com/',
  withCredentials: true,
  credentials: 'include',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
});

export default api;
