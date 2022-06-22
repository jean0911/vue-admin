/*
 * @Author: 黄剑
 * @Date: 2022-06-22 09:55:07
 * @LastEditTime: 2022-06-22 13:16:53
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: \vue-admin\src\router\autoload.ts
 */
import type { RouteRecordRaw } from "vue-router";

const layouts = import.meta.globEager("@/layouts/*.vue");
const views = import.meta.globEager("@/views/**/*.vue");

// 获取布局路由
function getRoutes() {
  const layoutsRoutes = [] as RouteRecordRaw[];
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module);
    route.children = getChildrenRoutes(route);
    layoutsRoutes.push(route);
  });
  return layoutsRoutes;
}

// 获取布局路由的子路由
function getChildrenRoutes(route: RouteRecordRaw) {
  const childrenRoutes = [] as RouteRecordRaw[];
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(route.name as string)) {
      let childrenRoute = getRouteByModule(file, module);
      childrenRoutes.push(childrenRoute);
    }
  });
  return childrenRoutes;
}

// 拼接路由
function getRouteByModule(file: string, module: { [key: string]: any }) {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, "");
  const route = {
    name: name.replace("/", "."),
    path: `/${name}`,
    component: module.default,
  } as RouteRecordRaw;
  return Object.assign(route, module.default?.route);
}

export default getRoutes();
