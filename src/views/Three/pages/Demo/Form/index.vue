<script setup lang="ts">
import { useForm } from './useForm';

const schema = reactive({
  list: [
    { code: 'demo01', rule: [{ pattern: /@/, message: '@@' }] },
    { code: 'demo02' },
    { code: 'demo03' },
    { code: 'demo04' },
    { code: 'demo05' },
  ],
});

const { entityState, setValue, getEntity, setEntity, formDom } = useForm({
  schema: schema.list,
});

const validate = () => {
  formDom.value.validate();
};

const getModel = async () => {
  console.log(await getEntity());
};

const setModel = async () => {
  setValue('demo01', String('@999'));
  setValue('demo02', String(Math.random()));
};

const setModel2 = async () => {
  setValue('demo01', String('999'));
  setValue('demo02', String(Math.random()));
};

const setModel3 = async () => {
  setEntity({
    entity: {
      demo01: String('999'),
      demo02: String(Math.random()),
    },
  });
};
</script>

<template>
  <dz-view
    col
    size="h-grow"
    position="1"
    wrapper-class="p-4 m-4 border rounded-md shadow"
  >
    <dz-button title="validate" @click="validate"></dz-button>
    <dz-button title="getEntity" @click="getModel"></dz-button>
    <dz-button title="setModel" @click="setModel"></dz-button>
    <dz-button title="setModel2" @click="setModel2"></dz-button>
    <dz-button title="setModel3" @click="setModel3"></dz-button>
    <dz-view col size="w-96" bg="bg-green-400">
      <t-form2
        ref="formDom"
        module-name="Demo/Form"
        :schema="schema.list"
        :entityState="entityState"
        @setValue="setValue"
      ></t-form2>
    </dz-view>
  </dz-view>
</template>
