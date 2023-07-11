<script setup lang="ts">
const { schema, data, getValue, bind, setState, setValue, validate, itemVm } =
  useForm({
    module: 'Test',
  });
</script>

<template>
  <v s="w-grow h-grow" w="gap-1">
    <dz-card s="w-grow h-grow" class="card-lg" title="Form">
      <v s="w-grow h-grow" grid>
        <dz-form-item s="w-full h-fit" v-bind="bind('id')('Input')" />
        <dz-form-item s="w-full h-fit" v-bind="bind('name')('Input')" />
      </v>
    </dz-card>

    <v s="w-[50vw] h-grow" w="gap-1" col>
      <dz-card s="w-grow h-grow" class="card-lg" title="Test">
        <v s="w-grow h-grow" w="gap-1" grid>
          <dz-btn
            title="id-required-true"
            @click="setState('id')({ required: true })"
          />
          <dz-btn
            title="id-required-false"
            @click="setState('id')({ required: false })"
          />
          <dz-btn
            title="id-visible-true"
            @click="setState('id')({ visible: true })"
          />
          <dz-btn
            title="id-visible-false"
            @click="setState('id')({ visible: false })"
          />
          <dz-btn title="id-value-1" @click="setValue('id')('1')" />
          <dz-btn title="id-value-[empty]" @click="setValue('id')('')" />
          <dz-btn
            title="id-append-1"
            @click="setValue('id')(getValue('id') + '1')"
          />
          <dz-btn title="id-focus" @click="itemVm('id').focus()" />
          <dz-btn title="id-blur" @click="itemVm('id').blur()" />
        </v>
      </dz-card>
      <dz-card s="w-grow h-grow" class="card-lg" :footer="false" title="Data">
        <v s="w-grow h-grow" text="1">
          {{ data }}
          {{ schema }}
        </v>
      </dz-card>
    </v>
  </v>
</template>
