<script setup lang="ts">
withDefaults(defineProps<{ text: string }>(), { text: 'Text' });
</script>

<template>
  <div
    class="flex items-center justify-center flex-grow overflow-auto h-grow w-grow dz-view scrollbar-hidden"
    :class="[
      [
        'bg-stripes-cyan',
        'bg-stripes-sky',
        'bg-stripes-blue',
        'bg-stripes-purple',
        'bg-stripes-violet',
        'bg-stripes-pink',
      ][Math.floor(Math.random() * 5)],
    ]"
  >
    <div class="flex text-lg italic font-bold text-gray-600">
      {{ text }}
    </div>
  </div>
</template>
