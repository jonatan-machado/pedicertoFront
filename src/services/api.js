import axios from 'axios';

const Api = axios.create({
  // baseURL: 'https://api.multiimob.com.br',
  baseURL: 'http://localhost:3333'
});

export default Api;
