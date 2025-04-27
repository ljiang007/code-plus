<template>
  <div class="code">
    <el-row type="flex">
      <el-col :span="4"> <Sidebar /> </el-col>
      <el-col :span="16">
        <Operation />
        <Canvas @select="handleSelect" :selectedId="selectedId" />
      </el-col>
      <el-col :span="4"> <Attribute /> </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "./component/Sidebar.vue";
import Canvas from "./component/Canvas.vue";
import Operation from "./component/Operation.vue";
import Attribute from "./component/Attribute.vue";
import { ref } from "vue";

const selectedId = ref<any>(null);
const handleSelect = (id: any) => {
  selectedId.value = id;
  console.log('index',id)
};
</script>

<style scoped>
.code {
  height: 100%;
}
.el-row {
  height: 100%;
}
</style>
