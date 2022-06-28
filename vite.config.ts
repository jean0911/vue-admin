/*
 * @Author: 黄剑
 * @Date: 2022-06-22 09:07:07
 * @LastEditTime: 2022-06-28 19:40:43
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: \vue-admin\vite.config.ts
 */
import { defineConfig, loadEnv, type ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import alias from "./vite/alias";
import { parseEnv } from "./vite/util";

export default defineConfig(({ command, mode }: ConfigEnv) => {
  const root = process.cwd();
  const env = parseEnv(loadEnv(mode, root));
  return {
    plugins: [vue()],
    resolve: {
      alias,
    },
  };
});
