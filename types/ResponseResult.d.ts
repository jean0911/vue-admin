/*
 * @Author: 黄剑
 * @Date: 2022-06-30 17:03:48
 * @LastEditTime: 2022-06-30 17:08:11
 * @LastEditors: 黄剑
 * @Description:
 * @FilePath: /vue-admin/types/ResponseResult.d.ts
 */
interface ResponseResult<T> {
  code: number;
  message: string;
  result: T;
}
