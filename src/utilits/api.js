import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: ' https://cors-everywhere.herokuapp.com/http://185.185.69.233',
  withCredentials: true,
  credentials: 'include',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  config => {
    const token = Cookies.get('Authentication');
    const auth = token ? `Bearer ${token}` : '';
    const refresh = Cookies.get('Refresh');

    config.headers.common['Authorization'] = auth;
    config.headers.common['Refresh'] = refresh;

    return config;
  },
  error => Promise.reject(error)
);

export default api;
