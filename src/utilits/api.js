import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'https://techno-train.herokuapp.com/',
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
    const refresh = Cookies.get('Refresh');
    const auth = token ? `Bearer ${token}` : '';
    config.headers.common['Authorization'] = auth;
    config.headers.common['Refresh'] = refresh;
    return config;
  },
  error => Promise.reject(error)
);

export default api;
