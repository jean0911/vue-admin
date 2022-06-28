/*
 * @Author: 黄剑
 * @Date: 2022-06-28 19:02:09
 * @LastEditTime: 2022-06-28 19:17:14
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: \vue-admin\vite\util.ts
 */
import _ from "lodash";

export function parseEnv(env: Record<string, any>) {
  const envs = _.cloneDeep(env);
  Object.entries(env).forEach(([key, value]) => {
    if (value === "true" || value === "false") {
      envs[key] = value === "true" ? true : false;
    } else if (/^\d+$/.test(value)) {
      envs[key] = Number(value);
    } else if (value === "null") {
      envs[key] === null;
    } else if (value === "undefined") {
      envs[key] === undefined;
    }
  });
  return envs;
}
