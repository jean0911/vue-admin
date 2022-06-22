/*
 * @Author: 黄剑
 * @Date: 2022-06-22 09:07:07
 * @LastEditTime: 2022-06-22 12:33:10
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: \vue-admin\src\main.ts
 */
import { createApp } from "vue";

import App from "./App.vue";
import router, { setupRouter } from "./router";

async function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  await router.isReady();
  app.mount("#app");
}

bootstrap();
