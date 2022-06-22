/*
 * @Author: 黄剑
 * @Date: 2022-06-22 09:07:07
 * @LastEditTime: 2022-06-22 12:48:46
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: \vue-admin\src\router\index.ts
 */
import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import layoutRoutes from "./autoload";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes, ...layoutRoutes],
});

function setupRouter(app: App) {
  app.use(router);
}

export { setupRouter };
export default router;
