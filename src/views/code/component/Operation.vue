<template>
  <div class="operation">
    <el-button type="primary" link @click="preview">预览</el-button>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
const preview = () => {
  router.push("/preview");
};
</script>

<style scoped>
.operation {
  padding: 20px;
  height: 20px;
}
</style>
