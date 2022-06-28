/*
 * @Author: 黄剑
 * @Date: 2022-06-28 18:53:30
 * @LastEditTime: 2022-06-28 19:01:18
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: \vue-admin\vite\alias.ts
 */
import { fileURLToPath, URL } from "url";
import type { AliasOptions } from "vite";

const alias: AliasOptions = {
  "@": fileURLToPath(new URL("../src", import.meta.url)),
};

export default alias;
