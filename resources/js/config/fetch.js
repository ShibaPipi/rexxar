import { BASE_URL_PREFIX } from './env'
import { getStore } from './utils';

export default async (url = '', data = {}, type = 'GET', method = 'fetch') => {
  type = type.toUpperCase();
  url = BASE_URL_PREFIX + url;

  if ('GET' === type) {
    // 数据拼接字符串
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
        'Authorization': getStore('token')
      },
      mode: 'cors',
    };

    if ('POST' === type || 'DELETE' === type) {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
      })
    }

    try {
      const response = await fetch(url, requestConfig);
      const jsonRes = await response.json();

      if ('success' === jsonRes.status) {
        return jsonRes.data;
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
