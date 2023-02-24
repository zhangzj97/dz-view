<script setup lang="ts" name="ContainerDrag">
interface LayoutStyle {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  width?: string;
  height?: string;
}

// ! 拖拽功能 Drag
// TODO 拖拽功能 Drag
// const dragState = reactive({});

// ! 显隐功能 Visible
// TODO 显隐功能
const visibleState: { visible: boolean } = reactive({ visible: false });
const changeVisible = (visible: boolean) => {
  visibleState.visible = visible;
};

// ! 缩展功能
// ! 吸附功能 Stiky
// TODO 吸附功能
// const stikyState = reactive({});

// ! 吸附隐藏功能 stikyDrawer
// TODO 吸附隐藏功能
// const stikyDrawerState = reactive({});

// ! 层级功能 ZIndex
// TODO 层级功能
// const zIndexState = reactive({});

// ! 布局功能 Layout
type FlexLayoutType = 'flex' | 'flex-grow' | 'flex-grow' | '';

const layoutState: { style: LayoutStyle; flexLayoutType: FlexLayoutType } =
  reactive({
    style: { top: '16px', left: '16px', width: '400px', height: '200px' },
    flexLayoutType: 'flex-grow',
  });

// ! 3D功能 3D
// TODO 3D功能
// const threeLayoutState = reactive({});

// ! 全屏功能 FullScreen
// TODO 全屏功能
// const fullScreenState = reactive({});

// ! 键盘唤醒功能 Key
// TODO 键盘唤醒功能
// const keyState = reactive({});

document.onkeydown = (ev: KeyboardEvent): void => {
  const { code } = ev;
  if (code === 'KeyS') {
    changeVisible(!visibleState.visible);
  }
};

// ! 初始化
onMounted(() => {
  console.log('onMounted');
});
</script>

<template>
  <div
    v-if="visibleState.visible"
    class="fixed flex flex-col border rounded shadow"
    :style="{ ...layoutState.style }"
  >
    <!-- Header -->
    <div class="flex h-12 bg-blue-300">
      <div @click="changeVisible(false)">Hide</div>
      <div @click="changeVisible(true)">Show</div>
    </div>
    <!-- Body -->
    <div class="flex flex-1 bg-blue-400">
      <slot name="default"></slot>
    </div>
    <!-- Footer -->
    <div class="flex h-12 bg-blue-500"></div>
  </div>
</template>
