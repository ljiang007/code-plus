<template>
  <!-- 递归组件渲染 -->
  <div
    :class="['component-box', component.id === selectedId ? 'solid' : 'dashed']"
    @click.stop="selectComponent(component.id)"
  >
    <component
      class="component-renderer"
      :is="componentRendererMap[component.type]"
      :data="component"
      :selectedId="selectedId"
      @select="emit('select', $event)"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import { componentRendererMap } from "@/utils/componentFactory";

const { component, selectedId } = defineProps<{
  component: any;
  selectedId: any;
}>();

const emit = defineEmits<{
  (e: "select", id: any): void;
}>();

const selectComponent = (id: any) => {
  emit("select", id);
};
</script>

<style scoped>
.component-renderer {
  /* outline: 1px dashed #ddd; */
  padding: 2px;
}
</style>

<style scoped>
.component-box {
  margin: 2px;
  padding: 2px;
  position: relative;
  /* display: inline-block;
  width: auto;
  max-width: 100%; */
}
.solid {
  outline: 1px solid #409eff;
}
.dashed {
  outline: 1px dashed #ccc;
}
</style>
