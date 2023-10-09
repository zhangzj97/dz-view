<script setup lang="ts">
const { bind, Control } = useBind();
</script>

<template>
  <v s="w-grow h-grow" col>
    <v s="w-grow h-fit" grid w="px-4">
      <dz-btn
        :title="'String'"
        @click="
          bind('String').setValue([String(123)]);
          bind('String').setPayload({ defaultValue: ['1232'] });
        "
      />
      <dz-btn
        :title="'Number'"
        @click="
          bind('Number').setValue([String(123)]);
          bind('Number').setPayload({ defaultValue: ['1232'] });
        "
      />
      <dz-btn
        :title="'Textarea'"
        @click="
          bind('Textarea').setValue([String(123)]);
          bind('Textarea').setPayload({ defaultValue: ['1232'] });
        "
      />
    </v>
    <v s="w-grow h-fit" grid w="px-4">
      <dz-control s="w-1/2 h-fit" v-bind="bind('Time', Control.Base.Time({ test: true }))" />
      <dz-control s="w-1/2 h-fit" v-bind="bind('TimeRange', Control.Base.TimeRange({ test: true }))" />
      <dz-control s="w-1/2 h-fit" v-bind="bind('Date', Control.Base.Date({ test: true }))" />
      <dz-control s="w-1/2 h-fit" v-bind="bind('DateRange', Control.Base.DateRange({ test: true }))" />
    </v>
  </v>
</template>
