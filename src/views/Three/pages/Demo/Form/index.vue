<script setup lang="ts">
import { useForm } from '@/hooks/useForm';

const schema = reactive({
  config: { readonly: false, required: true, visible: true },
  defaultValue: { demo01: '999', demo02: '' },
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

const { formState, setValue, getEntity, setEntity, resetEntity, formDom } =
  useForm({
    moduleName: 'Demo/Form',
    schema,
  });

console.log(formState);

const validate = () => {
  formDom.value.validate();
};

const t1 = async () => {
  await setEntity({
    entity: {
      demo01: '123',
    },
  });
};

const t2 = async () => {
  await setEntity({
    entity: {
      demo02: '321',
    },
  });
};

const t3 = () => {
  resetEntity();
};
</script>

<template>
  <dz-view
    col
    size="h-grow"
    position="1"
    wrapper-class="p-4 m-4 border rounded-md shadow"
  >
    <dz-view grid>
      <dz-button title="validate" @click="validate"></dz-button>
      <dz-button title="setEntity" @click="t1"></dz-button>
      <dz-button title="setEntity" @click="t2"></dz-button>
      <dz-button title="resetEntity" @click="t3"></dz-button>
    </dz-view>
    <dz-view col size="w-96" bg="bg-green-400">
      <t-form2
        ref="formDom"
        module-name="Demo/Form"
        :formState="formState"
        @setValue="setValue"
      />
    </dz-view>
    <dz-view row>
      <pre></pre>
      <pre> {{ formState.entity }}</pre>
      <pre> {{ formState.schemaData }}</pre>
      <pre> {{ formState.schemaProps }}</pre>
      <pre> {{ formState.schemaVersion }}</pre>
    </dz-view>
  </dz-view>
</template>
