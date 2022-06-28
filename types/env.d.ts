/*
 * @Author: 黄剑
 * @Date: 2022-06-22 09:07:07
 * @LastEditTime: 2022-06-28 16:12:09
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: \vue-admin\env.d.ts
 */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SOME_KEY: number;
  readonly VITE_ROUTE_AUTOLOAD: boolean;
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
