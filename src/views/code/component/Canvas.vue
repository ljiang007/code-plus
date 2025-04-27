<template>
  <div class="canvas">
    <div class="canvas-content">
      <draggable
        v-model="components"
        :group="{ name: 'components', put: true }"
        item-key="type"
        class="canvas-container"
      >
        <template #item="{ element }">
          <div>
            <ComponentRenderer
              :component="element"
              @select="selectComponent"
              :selectedId="props.selectedId"
            />
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import { ref, defineEmits, defineProps } from "vue";
import ComponentRenderer from "@/components/ComponentRenderer.vue";

interface CanvasComponent {
  type: string;
  label: string;
}

const props = defineProps<{
  selectedId: any;
}>();

const emit = defineEmits<{
  (e: "select", id: any): void;
}>();

const components = ref<CanvasComponent[]>([]);

const selectComponent = (id: any) => {
  emit("select", id);
};
</script>

<style scoped lang="scss">
.canvas {
  background: #f5f5f5;
  padding: 20px;
  height: calc(100% - 60px);
  box-sizing: border-box;
}

.canvas-content {
  background: #fff;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.canvas-container {
  min-height: 100%;
  padding: 2px;
}

.canvas-item {
  padding: 10px;
  margin: 5px 0;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
