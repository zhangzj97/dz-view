<script setup lang="ts" name="FlexContainer">
defineProps<{
  testTitle?: string;
  w?: string;
  h?: string;
}>();

const cssState = reactive<{
  bgClass: string;
}>({ bgClass: '' });

onMounted(() => {
  const bg = [
    ...['bg-red-900', 'bg-red-800', 'bg-red-700', 'bg-red-600', 'bg-red-500', 'bg-red-600', 'bg-red-700', 'bg-red-800', 'bg-red-900'],
    ...['bg-blue-900', 'bg-blue-800', 'bg-blue-700', 'bg-blue-600', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-800', 'bg-blue-900'],
  ];
  cssState.bgClass = bg[~~(Math.random() * 18)];
});
</script>

<template>
  <div v-if="testTitle" class="flex-container" :style="{ width: w ?? '', height: h ?? '' }">
    <slot>
      <div class="absolute flex items-center justify-center w-full h-full bg-stripes-white" :class="[cssState.bgClass]">
        <div class="text-2xl italic font-bold text-white">{{ testTitle }}</div>
      </div>
    </slot>
  </div>

  <div v-else class="flex-container" :style="{ width: w ?? '', height: h ?? '' }">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.flex-container {
  @apply relative flex flex-col transition-all transform;
}
.flex-container::-webkit-scrollbar {
  height: 0;
  width: 0;
}
.flex-container.flex-row {
  flex-direction: row;
}
.flex-container.sticky {
  position: sticky;
}
.flex-container.absolute {
  position: absolute;
}
.flex-container.flex-grow-0 {
  flex-grow: 0;
}
</style>
