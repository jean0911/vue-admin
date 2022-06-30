/*
 * @Author: 黄剑
 * @Date: 2022-06-30 16:22:47
 * @LastEditTime: 2022-06-30 16:34:57
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: /vue-admin/src/plugins/axios/index.ts
 */
import Axios from "./Axios";

const http = new Axios({
  baseURL: "http://127.0.0.1:4523/m1/381452-0-default",
  timeout: 10000,
  headers: {},
});

export { http };
