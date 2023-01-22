<script setup lang="ts">
const props = defineProps<{
  optionState: any;
}>();
</script>

<template>
  <!-- 1. 一个普通的 Banner   -->
  <dz-view layout="one" grow="0" size="w-auto h-16">
    <div
      pane
      class="transition-all"
      :class="[
        optionState.t1 === '1' && 'w-0 h-0',
        optionState.t1 === '2' && 'w-auto h-full',
        optionState.t1 === '3' && 'w-[2000px] h-full',
        optionState.t1 === '4' && 'w-[2000px] h-[300px]',
        optionState.t1 === '5' && 'w-[2000px] h-[300px] shrink-0 ',
        optionState.t1 === '6' && 'w-0 h-0',
      ]"
    >
      一个普通的 Banner
    </div>
  </dz-view>
</template>
