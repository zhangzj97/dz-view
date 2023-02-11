<script setup lang="ts">
import PaneLabelRow from './components/PaneLabelRow/index.vue';

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
        <template v-if="item.formItemOption.layout === 'row'">
          <dz-view
            :row="item.formItemOption.layout === 'row'"
            :col="item.formItemOption.layout === 'col'"
            :one="item.formItemOption.layout === 'one'"
            :size="item.formItemOption.size"
            wrapper-class="border-b-[0.5px] first:border-t-[0.5px]"
          >
            <dz-view one v-if="item.formItemOption.layout === 'row'" :size="item.labelOption.size" :position="item.labelOption.position">
              <PaneLabelRow :label="item.label" :tooltip="item.tooltip" :required="item.required" />
            </dz-view>
            <dz-view one v-if="item.formItemOption.layout === 'col'" :size="item.labelOption.size" :position="item.labelOption.position">
              <PaneLabelCol :label="item.label" :tooltip="item.tooltip" :required="item.required" />
            </dz-view>
            <dz-view one :size="item.controlOption.size" :position="item.controlOption.position">
              <Component
                :class="[
                  //
                ]"
                :is="item.component()"
                :conventionOption="item.conventionOption"
                :customOption="item.customOption"
                :propsRow="dataModel"
                :key="item.key"
                :label="item.label"
              />
            </dz-view>
          </dz-view>
        </template>
      </template>
    </dz-view>
    <!-- dz-form -->
  </dz-view>
</template>
