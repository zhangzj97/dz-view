<script setup lang="ts">
const { bind, Control } = useBind({ payload: { test: true } });
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
      <dz-control s="w-1/4 h-fit" v-bind="bind('String', Control.Base.String())" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Password', Control.Base.Password())" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Textarea', Control.Base.Textarea())" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Text', Control.Base.Text())" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Number', Control.Base.Number())" />
    </v>
  </v>
</template>
