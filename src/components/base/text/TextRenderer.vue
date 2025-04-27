<template>
  <div>
    <div>{{ data.props.text }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const { data } = defineProps<{
  data: any;
}>();
</script>
