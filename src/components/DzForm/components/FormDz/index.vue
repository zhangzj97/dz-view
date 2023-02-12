<script setup lang="ts">
import PaneLabelRow from './components/PaneLabelRow/index.vue';
import PaneLabelCol from './components/PaneLabelCol/index.vue';

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
        <dz-view :row="item.formItemOption.layout === 'row'" :col="item.formItemOption.layout === 'col'" :one="item.formItemOption.layout === 'one'" :size="item.formItemOption.size">
          <dz-view one v-if="item.formItemOption.layout === 'row'" :size="item.labelOption.size" :position="item.labelOption.position" class="shrink-0" wrapper-class="pr-2">
            <PaneLabelRow
              :class="[
                //
              ]"
              :k="item.key"
              :label="item.label"
              :tooltip="item.tooltip"
              :text="item.text"
              :propsRow="dataModel"
              :conventionOption="item.conventionOption"
              :customOption="item.customOption"
            />
          </dz-view>
          <dz-view one v-else-if="item.formItemOption.layout === 'col'" :size="item.labelOption.size" :position="item.labelOption.position">
            <PaneLabelCol
              :class="[
                //
              ]"
              :k="item.key"
              :label="item.label"
              :tooltip="item.tooltip"
              :text="item.text"
              :propsRow="dataModel"
              :conventionOption="item.conventionOption"
              :customOption="item.customOption"
            />
          </dz-view>
          <dz-view one v-else-if="item.formItemOption.layout === 'one'" :size="item.labelOption.size" :position="item.labelOption.position"></dz-view>

          <dz-view one :size="item.controlOption.size" :position="item.controlOption.position">
            <Component
              :class="[
                //
              ]"
              :is="item.component()"
              :k="item.key"
              :label="item.label"
              :tooltip="item.tooltip"
              :text="item.text"
              :propsRow="dataModel"
              :conventionOption="item.conventionOption"
              :customOption="item.customOption"
            />
          </dz-view>
        </dz-view>
      </template>
    </dz-view>
    <!-- dz-form -->
  </dz-view>
</template>
