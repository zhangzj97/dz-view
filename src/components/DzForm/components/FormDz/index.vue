<script setup lang="ts">
import PaneLabel from './components/PaneLabel/index.vue';

defineProps<{
  schema?: any[] | any;
  baseList?: any[];
  dataModel?: any;
  option?: any;
  moduleName?: string;
  className?: string;
}>();
</script>

<template>
  <dz-view one size="h-grow">
    <!-- dz-form -->
    <dz-view grid size="h-fit">
      <template v-for="(item, index) of schema" :key="index">
        <dz-view :row="item.layoutOption.labelAndFormItemLayout === 'row'" :col="item.layoutOption.labelAndFormItemLayout === 'col'" :size="item.layoutOption.labelAndFormItemSize">
          <dz-view one :size="item.layoutOption.labelSize">
            <PaneLabel :title="item.title" :tooltip="item.tooltip" :labelPosition="item.layoutOption.labelPosition" />
          </dz-view>
          <dz-view one :size="item.layoutOption.formItemSize">
            <Component :is="item.component()" :formItemOption="item.formItemOption" :customOption="item.customOption" />
          </dz-view>
        </dz-view>
      </template>
    </dz-view>
    <!-- dz-form -->
  </dz-view>
</template>
