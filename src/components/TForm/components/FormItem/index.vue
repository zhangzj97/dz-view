<script setup lang="ts">
defineProps<{
  code: string;
  propsRow?: any;

  version: string | number;

  component: any;
}>();

const emit = defineEmits<{
  (e: 'updateValue', value: any): void;
}>();

const updateValue = value => {
  console.log(999);
  emit('updateValue', value);
};
</script>

<template>
  <dz-view col size="h-fit w-grow">
    <dz-view row size="h-fit" bg="bg-red-400">
      <!-- <PaneLabelCol /> -->
    </dz-view>
    <dz-view row size="h-fit">
      <dz-view one size="w-24" class="shrink-0" bg="bg-blue-400">
        <!-- <PaneLabelRow /> -->

        {{ code }}
      </dz-view>
      <dz-view one size="w-grow" bg="bg-pink-400">
        <Component
          :is="component"
          :code="code"
          :propsRow="propsRow"
          :version="version"
          @updateValue="updateValue"
        />
      </dz-view>
    </dz-view>
  </dz-view>
</template>
