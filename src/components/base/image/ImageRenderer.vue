<template>
  <div>
    <el-image :style="data.props.style" :src="data.props.attr.src" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const { data } = defineProps<{
  data: any;
}>();
</script>
