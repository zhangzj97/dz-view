<script setup lang="ts">
import { useForm } from '@/hooks/useForm';

const schema = reactive({
  defaultValue: {},
  config: {},
  data: {
    demo01: { component: 'Input1' },
    demo02: { component: 'Input1' },
    demo03: { component: 'Input1' },
    demo04: { component: 'Input1' },
    demo0411: { component: 'Input1' },
  },

  rule: {},

  layout: {
    demo03: {},
  },

  callback: {},
});

const { formState, setValue, getEntity, setEntity, formDom } = useForm({
  moduleName: 'Demo/Form',
  schema,
});

const validate = () => {
  formDom.value.validate();
};
</script>

<template>
  <dz-view
    col
    size="h-grow"
    position="1"
    wrapper-class="p-4 m-4 border rounded-md shadow"
  >
    <dz-view col size="w-96" bg="bg-green-400">
      <t-form2
        ref="formDom"
        module-name="Demo/Form"
        :formState="formState"
      ></t-form2>
    </dz-view>
  </dz-view>
</template>
