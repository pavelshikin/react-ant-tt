import axios from 'axios';

const api = axios.create({
   baseURL: 'https://techno-train.herokuapp.com/',
   withCredentials: true,
   credentials: 'same-origin', 
   headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
   }
})

export default api
