import axios from 'axios';

const axiosProducts = axios.create({
  baseURL: 'https://tech-store-508fc.firebaseio.com',
});

export default axiosProducts;
