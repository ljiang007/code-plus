<template>
  <el-row>
    <el-col
      v-for="child in data.children"
      :key="child.id"
      :span="child.props?.attr?.span"
      :offset="child.props?.attr?.offset"
      :push="child.props?.attr?.push"
      :pull="child.props?.attr?.pull"
      :style="child.props?.style"
    >
      <div
        class="col-box"
        @click.stop="selectComponent(child.id)"
        :class="{ solid: child.id === selectedId }"
      >
        <draggable
          v-model="child.children"
          :group="{ name: 'components', put: true }"
          :sort="true"
          class="draggable"
          @add="(evt) => handleAdd(evt, child)"
        >
          <template #item="{ element }">
            <div class="draggable-item">
              <ComponentRenderer
                :component="element"
                @select="emit('select', $event)"
                :selectedId="selectedId"
              />
            </div>
          </template>
        </draggable>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import draggable from "vuedraggable";
import { getDefaultComponentProps } from "@/utils/componentDefaults";
import ComponentRenderer from "@/components/ComponentRenderer.vue";

const emit = defineEmits<{
  (e: "select", id: any): void;
  (e: "update"): void;
}>();

const { data, selectedId } = defineProps<{
  data: any;
  selectedId: any;
}>();

const selectComponent = (id: any) => {
  emit("select", id);
};

const handleAdd = (evt: any, column: any) => {
  // 处理添加到列中的组件
  const newIndex = evt.newIndex;
  const component = column.children[newIndex];

  console.log("添加到列中:", component);

  if (component._isClone) {
    const id = component.id || Date.now();
    const type = component.type;

    // 创建组件基本结构
    const base = {
      id,
      type,
      props: {},
      children: [],
    };
    
    // 获取默认属性并合并
    const defaultProps = getDefaultComponentProps(type);
    const newComponent = {
      ...base,
      ...defaultProps,
      props: {
        ...defaultProps.props,
        ...component.props
      }
    };
    
    // Vue3写法：直接赋值即可
    column.children[newIndex] = newComponent;
    
    console.log("新组件:", newComponent);
    console.log("列数据:", column);
  }
};
</script>

<style scoped>
.col-box {
  min-height: 100px;
  outline: 1px dashed #bbb;
  padding: 2px;
  box-sizing: border-box;
  background-color: #fdfdfd;
  margin-right: 8px;
  position: relative;
}
.solid {
  outline: 1px solid #409eff;
}
.draggable {
  min-height: 100px;
}
.draggable-item {

}
</style>
