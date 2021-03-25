import axios from 'axios';

const Api = axios.create({
  //baseURL: 'http://localhost:3333'
  baseURL: 'http://ec2-18-231-178-123.sa-east-1.compute.amazonaws.com'
});

export default Api;
