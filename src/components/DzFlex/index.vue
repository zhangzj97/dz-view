<script setup lang="ts" name="DzFlex">
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
    ...['bg-green-900', 'bg-green-800', 'bg-green-700', 'bg-green-600', 'bg-green-500', 'bg-green-600', 'bg-green-700', 'bg-green-800', 'bg-green-900'],
    ...['bg-pink-900', 'bg-pink-800', 'bg-pink-700', 'bg-pink-600', 'bg-pink-500', 'bg-pink-600', 'bg-pink-700', 'bg-pink-800', 'bg-pink-900'],
    ...['bg-amber-900', 'bg-amber-800', 'bg-amber-700', 'bg-amber-600', 'bg-amber-500', 'bg-amber-600', 'bg-amber-700', 'bg-amber-800', 'bg-amber-900'],
  ];
  cssState.bgClass = bg[~~(Math.random() * 45)];
});
</script>

<template>
  <div v-if="testTitle" class="dz-flex-container" :style="{ width: w ?? '', height: h ?? '' }" :class="['h-grow']">
    <slot>
      <div class="absolute flex items-center justify-center w-full h-full overflow-hidden bg-stripes-white" :class="[cssState.bgClass]">
        <div class="text-2xl italic font-bold text-white">{{ testTitle }}</div>
      </div>
    </slot>
  </div>

  <div v-else class="dz-flex-container" :style="{ width: w ?? '', height: h ?? '' }">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.dz-flex-container {
  @apply relative flex;
  @apply transition-all transform;
  @apply flex-col bg-transparent;
}

.dz-flex-container::-webkit-scrollbar {
  height: 0;
  width: 0;
}

.dz-flex-container.flex-row {
  flex-direction: row;
}

.dz-flex-container.sticky {
  position: sticky;
}

.dz-flex-container.absolute {
  position: absolute;
}

.dz-flex-container.flex-grow-0 {
  flex-grow: 0;
}
</style>
