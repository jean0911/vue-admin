/*
 * @Author: 黄剑
 * @Date: 2022-06-28 19:19:16
 * @LastEditTime: 2022-06-28 19:27:07
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: \vue-admin\src\types\helper.ts
 */
import _ from "lodash";

class Helper {
  public env = {} as ImportMetaEnv;
  constructor() {
    this.env = this.getEnvs();
  }
  private getEnvs(): ImportMetaEnv {
    const envs = _.cloneDeep(import.meta.env);
    Object.entries(envs).forEach(([key, value]) => {
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
}

const helper = new Helper();
const env = helper.env;

export default helper;
export { env };
