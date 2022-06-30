/*
 * @Author: 黄剑
 * @Date: 2022-06-30 16:23:02
 * @LastEditTime: 2022-06-30 17:13:21
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: /vue-admin/src/plugins/axios/Axios.ts
 */
import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

class Axios {
  private instance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptor();
  }
  public request<T, R = ResponseResult<T>>(config: AxiosRequestConfig) {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await this.instance.request<R>(config);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    }) as Promise<R>;
  }
  private interceptor() {
    this.interceptorRequest();
    this.interceptorResponse();
  }
  private interceptorRequest() {
    this.instance.interceptors.request.use();
  }
  private interceptorResponse() {
    this.instance.interceptors.response.use();
  }
}

export default Axios;
