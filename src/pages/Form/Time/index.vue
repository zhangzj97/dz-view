<script setup lang="ts">
const { bind, Control } = useBind();
</script>

<template>
  <v s="w-grow h-grow" col>
    <!-- <dz-btn
      :title="'1'"
      @click="
        bind('Time').setValue(String(Date.now()));
        bind('Time').setPayload({ defaultValue: String(Date.now()) });
      "
    />
    <dz-btn :title="'2'" @click="bind('Time').setValue(String(Date.now()))" /> -->
    <v s="w-grow h-fit" grid w="px-4">
      <dz-control s="w-1/2 h-fit" v-bind="bind('Time', Control.Base.Time({ test: true }))" />
      <dz-control s="w-1/2 h-fit" v-bind="bind('TimeRange', Control.Base.TimeRange({ test: true }))" />
      <dz-control s="w-1/2 h-fit" v-bind="bind('Date', Control.Base.Date({ test: true }))" />
      <dz-control s="w-1/2 h-fit" v-bind="bind('DateRange', Control.Base.DateRange({ test: true }))" />
    </v>
    <v-space s="w-grow h-2" class="bg-red-500" />
  </v>
</template>
