/*
 * @Author: 黄剑
 * @Date: 2022-06-30 16:25:01
 * @LastEditTime: 2022-06-30 17:05:13
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: /vue-admin/src/apis/userApi.ts
 */
import { http } from "@/plugins/axios/index";

interface User {
  name: string;
  age: number;
  avatar: string;
}

function info() {
  return http.request<User>({
    url: "user",
  });
}

export { info };
