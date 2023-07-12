<script setup lang="ts">
defineOptions({ name: 'VIcon' });

import { Icon } from '@iconify/vue';

import type { DzViewIconComponentProps } from '@/types/dz-view';
withDefaults(defineProps<DzViewIconComponentProps>(), {});
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
      absolute && `dz-view-absolute-${absolute}`,
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
