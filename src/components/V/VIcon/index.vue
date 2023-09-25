<script setup lang="ts">
defineOptions({ name: 'VIcon' });

import { Icon } from '@iconify/vue';

import type { DzViewIconComponentProps } from '@/types/dz-view';
// prettier-ignore
interface Props {
  v?: '4-0' | '4-25' | '4-50' | '4-75' | '4-90' | '4-95' | '4-100' | '6-0' | '6-25' | '6-50' | '6-75' | '6-90' | '6-95' | '6-100' | '8-0' | '8-25' | '8-50' | '8-75' | '8-90' | '8-95' | '8-100' | '10-0' | '10-25' | '10-50' | '10-75' | '10-90' | '10-95' | '10-100' | '12-0' | '12-25' | '12-50' | '12-75' | '12-90' | '12-95' | '12-100' | '16-0' | '16-25' | '16-50' | '16-75' | '16-90' | '16-95' | '16-100' | '20-0' | '20-25' | '20-50' | '20-75' | '20-90' | '20-95' | '20-100' | '24-0' | '24-25' | '24-50' | '24-75' | '24-90' | '24-95' | '24-100' | '32-0' | '32-25' | '32-50' | '32-75' | '32-90' | '32-95' | '32-100';
}
withDefaults(defineProps<DzViewIconComponentProps & Props>(), {});
</script>

<template>
  <div
    class="dz-view dz-view-icon v202301"
    :class="[
      s,
      w,
      t,
      trans,
      trans ? 'dz-view-transition' : '',
      pointer && 'dz-view-pointer',
      v && `v-icon-${v}`,
      'bg-contain',
    ]"
    :style="{ backgroundImage: src && `url(${src})` }"
  >
    <Icon v-if="icon" class="w-full h-full" :icon="icon" />
  </div>
</template>

<style scoped lang="scss">
@import url(../../assets/styles/dz-view.scss);
</style>

<style scoped lang="scss">
@import url(../../assets/styles/dz-view-icon.scss);
</style>
