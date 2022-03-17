import { get as _get, post as _post, delete as _delete } from 'axios';

export default {
  get: (url, params = '') => {
    return await _get(`${url}${params}`);
  },
  post: (url, body, token) => {
    if (token != '') {
      return await _post(url, body, { headers: { 'x-secret-token': token } });
    } else {
      return await _post(url, body);
    }
  },
  put: (url, body, token = '') => {
    if (token != '') {
      return await _post(url, body, { headers: { 'x-secret-token': token } });
    } else {
      return await _post(url, body);
    }
  },
  delete: (url, params) => {
    return await _delete(`${url}${params}`);
  },
};
