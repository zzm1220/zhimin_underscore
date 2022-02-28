/*
 * @Author: zhimin
 * @Date: 2022-02-11 09:36:49
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-11 15:47:01
 * @FilePath: \zhimin_underscore\es6\promise\index.js
 */
(function () {
  const getJson = function (url) {
    const promise = new Promise(function (resolve, reject) {
      const handler = function () {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
      const client = new XMLHttpRequest();
      client.open('GET', url);
      client.onreadystatechange = handler;
      client.responseType = 'json';
      client.setRequestHeader('Accept', 'application/json');
      client.send(null);
    });
    return promise;
  };
  const preloadImage = function (url) {
    return new Promise(function (resolve, reject) {
      const image = new Image();
      image.onload = resolve;
      image.onerror = reject;
      image.src = url;
    })
  }
})();