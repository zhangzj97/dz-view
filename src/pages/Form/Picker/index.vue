<script setup lang="ts">
const { bind, Control } = useBind();
</script>

<template>
  <v s="w-grow h-grow" col>
    <v s="w-grow h-fit" grid w="px-4">
      <dz-btn
        :title="'1'"
        @click="
          bind('Picker2').setValue(['1']);
          bind('Picker2').setPayload({ defaultValue: ['1', '2', '3'] });
        "
      />
      <dz-btn :title="'2'" @click="bind('String').setValue(String(Date.now()))" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Picker1', Control.Base.Picker({ test: true }))" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Picker2', Control.Base.PickerList({ test: true }))" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Picker3', Control.Base.PickerPanel({ test: true }))" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Picker4', Control.Base.PickerListPanel({ test: true }))" />
    </v>
  </v>
</template>
