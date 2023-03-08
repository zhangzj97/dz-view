<script setup lang="ts">
defineProps<{
  code: string;
  component: any;
}>();

const emit = defineEmits<{
  (e: 'updateValue', value: any): void;
}>();

const updateValue = (value: any) => {
  emit('updateValue', value);
};

const dom = ref();

const validate = () => {
  return dom.value.validate();
};

defineExpose({ validate });
</script>

<template>
  <dz-view col size="h-fit w-grow">
    <dz-view row size="h-fit" bg="bg-red-100">
      <!-- <PaneLabelCol /> -->
    </dz-view>
    <dz-view row size="h-fit">
      <dz-view one size="w-24" class="shrink-0" bg="bg-blue-100">
        <!-- <PaneLabelRow /> -->

        {{ code }}
      </dz-view>
      <dz-view one size="w-grow" bg="bg-pink-100">
        <Component
          ref="dom"
          :is="component()"
          :code="code"
          @updateValue="updateValue"
        />
      </dz-view>
    </dz-view>
  </dz-view>
</template>
