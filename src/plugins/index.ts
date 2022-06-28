/*
 * @Author: 黄剑
 * @Date: 2022-06-28 14:58:05
 * @LastEditTime: 2022-06-28 15:01:07
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: \vue-admin\src\plugins\index.ts
 */
import type { App } from "vue";
import setupTailwindcss from "./tailwindcss/index";

export function setupPlugins(app: App) {
  setupTailwindcss();
}
