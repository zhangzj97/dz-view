<script setup lang="ts">
defineOptions({ name: 'VSpace' });

import type { DzViewSpaceComponentProps } from '@/types/dz-view';
withDefaults(defineProps<DzViewSpaceComponentProps>(), {});
</script>

<template>
  <div
    class="dz-view dz-view-space v202301"
    :class="[
      s,
      w,
      t,
      trans,
      trans ? 'dz-view-transition' : '',
      absolute && `dz-view-absolute-${absolute}`,
    ]"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@import url(../../assets/styles/dz-view.scss);
</style>
