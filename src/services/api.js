import axios from 'axios';

const Api = axios.create({
  //baseURL: 'http://localhost:3333'
  baseURL: 'http://18.230.118.216'
});

export default Api;
