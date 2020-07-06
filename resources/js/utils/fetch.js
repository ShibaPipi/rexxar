import { BASE_URL_PREFIX } from '../config/env'
import { getStore } from './localStorage'
import router from '../router'
import store from '../store'
import { Loading } from 'element-ui'

export default async (url = '', type = 'GET', data = {}, method = 'fetch') => {
  type = type.toUpperCase();
  url = BASE_URL_PREFIX + url;

  if ('GET' === type) {
    let dataStr = '';

    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    });

    if (dataStr !== '') {
      url += '?' + dataStr.substr(0, dataStr.lastIndexOf('&'));
    }
  }

  if (window.fetch && 'fetch' === method) {
    let requestConfig = {
      credentials: 'include',
      method: type,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': getStore('token')
      },
      mode: 'cors',
    };

    if ('POST' === type || 'PUT' === type) {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
      })
    }

    try {
      let loading = Loading.service({ fullscreen: true });

      const response = await fetch(url, requestConfig);

      const jsonRes = await response.json();

      loading.close();

      const { code, status, data } = jsonRes;

      const token = response.headers.get('Authorization');

      if (null !== token) {
        store.commit('RECORD_ADMIN', token)
      }

      if ('success' === status) {
        return data;
      } else {
        switch (code) {
          case 403:
            router.push({ name: 'unauthorized' });
            break;

          case 422:
            store.commit('LOGOUT');
            router.push({ name: 'login' });
            break;

          default:
            break;
        }
      }
    } catch (error) {
      // throw new Error(error)
    }
  } else {
    return new Promise((resolve, reject) => {
      let requestObj = window.XMLHttpRequest
        ? new XMLHttpRequest() : new ActiveXObject;

      let sendData = '';

      if ('POST' === type) {
        sendData = JSON.stringify(data);
      }

      requestObj.open(type, url, true);
      requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      requestObj.send(sendData);

      requestObj.onreadystatechange = () => {
        if (4 === requestObj.readyState) {
          if (200 === requestObj.status) {
            let obj = requestObj.response;
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj);
            }
            resolve(obj)
          } else {
            reject(requestObj)
          }
        }
      }
    })
  }
}
