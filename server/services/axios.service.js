import axios from 'axios';

export default {
  get: (url, params = '') => {
    return axios.get(`${url}${params}`);
  },
  post: (url, body, token) => {
    if (token != '') {
      return axios.post(url, body, { headers: { 'x-secret-token': token } });
    } else {
      return axios.post(url, body);
    }
  },
  put: (url, body, token = '') => {
    if (token != '') {
      return axios.post(url, body, { headers: { 'x-secret-token': token } });
    } else {
      return axios.post(url, body);
    }
  },
  delete: (url, params) => {
    return axios.delete(`${url}${params}`);
  },
};
