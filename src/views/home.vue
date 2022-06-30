<!--
 * @Author: 黄剑
 * @Date: 2022-06-22 12:45:34
 * @LastEditTime: 2022-06-30 17:13:45
 * @LastEditors: 黄剑
 * @Description: 
 * @FilePath: /vue-admin/src/views/home.vue
-->
<script setup lang="ts">
import { info } from "@/apis/userApi";

let res = await info();
console.log(res);
</script>

<template>
  <h1 class="bg-red-500">Home.vue</h1>
</template>

<style scoped></style>
