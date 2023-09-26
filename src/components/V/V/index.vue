<script setup lang="ts">
// eslint-disable-next-line vue/multi-word-component-names
defineOptions({ name: 'V' });

import DescText from './components/DescText.vue';

import type { DzViewViewComponentProps } from '@/types/dz-view';
interface Props {
  v?: 'mouse-gray';
}
withDefaults(defineProps<DzViewViewComponentProps & Props>(), {});
</script>

<template>
  <div
    class="dz-view v202301"
    :class="[
      s,
      w,
      t,
      trans,
      trans ? 'dz-view-transition' : '',
      col ? 'dz-view-col' : 'dz-view-row',
      grid ? 'dz-view-grid' : '',
      absolute && `dz-view-absolute-${absolute}`,
      pointer && 'dz-view-pointer',
      v && `v-view-${v}`,
    ]"
  >
    <slot>
      <DescText v-if="text" :text="text" />
    </slot>
  </div>
</template>

<style scoped lang="scss">
@import url(../../../assets/styles/dz-view.scss);
</style>
<style scoped lang="scss">
@import url(../../../assets/styles/dz-view-mouse.scss);
</style>
