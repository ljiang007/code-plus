<template>
  <div class="sidebar">
    <h4 class="_fc-l-title">通用组件</h4>
    <ComponentsList :list="basics" :cloneComponent="cloneComponent" />
    <h4 class="_fc-l-title">布局组件</h4>
    <ComponentsList :list="layout" :cloneComponent="cloneComponent" />
    <!-- <h4 class="_fc-l-title">自定义组件</h4>
    <ComponentsList :list="custom" :cloneComponent="cloneComponent" /> -->
  </div>
</template>

<script setup lang="ts">
import ComponentsList from "@/components/public/ComponentsList.vue";
import { componentMaps } from "@/utils/componentFactory";

const basics = componentMaps.basics;
const layout = componentMaps.layout;
const custom = componentMaps.custom;

const cloneComponent = (component) => {
  return {
    ...component,
    id: Date.now(), // 生成唯一ID
    _isClone: true, // 添加标识，表示这是从侧边栏克隆出来的
  };
};
</script>

<style scoped>
.sidebar {
  border: 1px solid #d9d9d9;
  margin: 12px;
}
h4 {
  margin: 0;
  padding: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
