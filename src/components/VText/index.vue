<script setup lang="ts">
defineOptions({ name: 'VText' });

import type { DzViewTextComponentProps } from '@/types/dz-view';
withDefaults(defineProps<DzViewTextComponentProps>(), {});
</script>

<template>
  <div
    class="dz-view dz-view-text v202301"
    :class="[
      s,
      w,
      t,
      trans,
      trans ? 'dz-view-transition' : '',
      absolute && `dz-view-absolute-${absolute}`,
      pointer && 'dz-view-pointer',
    ]"
  >
    <slot>{{ text }}</slot>
  </div>
</template>

<style scoped lang="scss">
@import url(../../assets/styles/dz-view.scss);
</style>
