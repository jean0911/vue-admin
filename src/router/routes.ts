/*
 * @Author: 黄剑
 * @Date: 2022-06-22 09:45:52
 * @LastEditTime: 2022-06-22 12:48:08
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: \vue-admin\src\router\routes.ts
 */
import type { RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue"),
  },
] as RouteRecordRaw[];

export default routes;
