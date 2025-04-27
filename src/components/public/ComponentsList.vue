<template>
  <div class="component-list">
    <draggable
      :list="list"
      :clone="cloneComponent"
      :group="{ name: 'components', pull: 'clone', put: false }"
      :sort="false"
      item-key="type"
      class="draggable"
    >
      <template #item="{ element }">
        <div class="draggable-item">
          <span>{{ element.label }}</span>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import draggable from "vuedraggable";

const props = defineProps({
  cloneComponent: {
    type: Function,
    required: true,
  },
  list: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.component-list {
  padding: 0 7px;
}

.draggable-item {
  height: 30px;
  line-height: 28px;
  background: #f5f5f5;
  margin-bottom: 5px;
  padding: 0 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
  cursor: move;
}
</style>
