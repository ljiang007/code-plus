//配置路由
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import code from "@/views/code/index.vue";
import preview from "@/views/preview/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: code,
  },
  {
    path: "/preview",
    component: preview,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
