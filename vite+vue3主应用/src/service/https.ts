/*
 * @Author: wangxh wangxh
 * @Date: 2022-12-08 14:08:53
 * @LastEditors: wangxh wangxh
 * @LastEditTime: 2022-12-09 14:12:47
 * @FilePath: \vite+vue3主应用\src\service\https.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//http.ts
import axios, { AxiosRequestConfig } from 'axios';
// import NProgress from 'nprogress';
declare const severUrl: string;
import qs from 'qs'; //引入axios数据处理

// 设置请求头和请求路径
// axios.defaults.baseURL = severUrl;
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    return config;
  },
  error => {
    return error;
  }
);
// 响应拦截
axios.interceptors.response.use(res => {
  if (res.data.code === 111) {
    sessionStorage.setItem('token', '');
    // token过期操作
  }
  return res;
});
interface IResType<T> {
  result: Boolean | Number
  code?: number;
  data?: T;
  msg?: string;
  err?: string;
}
interface IHttp {
  get<T>(url: string, params?: unknown): Promise<IResType<T>>;
  post<T>(url: string, params?: unknown): Promise<IResType<T>>;
  upload<T>(url: string, params: unknown): Promise<IResType<T>>;
  download(url: string): void;
}
const http: IHttp = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      // NProgress.start();
      axios
        .get(url, { params })
        .then(res => {
          // NProgress.done();
          resolve(res.data);
        })
        .catch(err => {
          // NProgress.done();
          reject(err.data);
        });
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      // NProgress.start();
      axios
        .post(url, params)
        .then(res => {
          // NProgress.done();
          resolve(res.data);
        })
        .catch(err => {
          // NProgress.done();
          reject(err.data);
        });
    });
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      // NProgress.start();
      axios
        .post(url, file, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then(res => {
          // NProgress.done();
          resolve(res.data);
        })
        .catch(err => {
          // NProgress.done();
          reject(err.data);
        });
    });
  },
  download(url) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;
    iframe.onload = function () {
      document.body.removeChild(iframe);
    };
    document.body.appendChild(iframe);
  }
};
export default http;
