<script setup lang="ts">
const { bind, Control } = useBind();
</script>

<template>
  <v s="w-grow h-grow" col>
    <v s="w-grow h-fit" grid w="px-4">
      <!-- <dz-btn
        :title="'1'"
        @click="
          bind('String').setValue(String(123));
          bind('String').setPayload({ defaultValue: String(Date.now()) });
        "
      />
      <dz-btn :title="'2'" @click="bind('String').setValue(String(Date.now()))" /> -->
      <dz-control s="w-1/4 h-fit" v-bind="bind('String', Control.Base.String({ test: true }))" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Password', Control.Base.Password({ test: true }))" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Textarea', Control.Base.Textarea({ test: true }))" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Text', Control.Base.Text({ test: true }))" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Number', Control.Base.Number({ test: true }))" />
    </v>
  </v>
</template>
