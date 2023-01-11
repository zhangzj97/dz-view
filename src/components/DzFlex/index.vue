<script setup lang="ts" name="DzFlex">
defineProps<{
  size?: string;
  grow?: boolean;
  row?: boolean;
  col?: boolean;
  bg?: boolean;
  scroll?: boolean;
  overflowAuto?: boolean;
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
  <div
    :class="[
      'flex',
      'flex-col',
      grow && 'flex-grow',
      'relative',
      'bg-stripes-white',
      bg && cssState.bgClass,
      size?.match(/w-[^\s]*/)?.[0] || 'w-full',
      size?.match(/h-[^\s]*/)?.[0] || 'h-full',
      overflowAuto && 'overflow-auto',
      // row && overflowAuto ? 'w-0' : ' ',
    ]"
  >
    <div
      :class="[
        'flex',
        row ? 'flex-row' : 'flex-col',

        col && overflowAuto ? 'w-0' : 'w-full',
        row && overflowAuto ? 'h-0' : 'h-full',

        // !overflowAuto && row && 'h-full',
        // !overflowAuto && !row && 'w-full',

        // !row && overflowAuto ? 'h-0' : 'h-full',
        // row && overflowAuto ? 'w-0' : 'w-full',
        overflowAuto ? 'flex-grow' : '',
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>
