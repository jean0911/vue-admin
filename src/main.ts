/*
 * @Author: 黄剑
 * @Date: 2022-06-22 09:07:07
 * @LastEditTime: 2022-06-28 18:51:23
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: \vue-admin\src\main.ts
 */
import { createApp } from "vue";

import App from "./App.vue";
import router, { setupRouter } from "./router";
import { setupPlugins } from "./plugins/index";

console.log(typeof import.meta.env.VITE_SOME_KEY);

async function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  setupPlugins(app);
  await router.isReady();
  app.mount("#app");
}

bootstrap();
