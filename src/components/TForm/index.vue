<script setup lang="ts">
import FormItem from './components/FormItem/index.vue';
import ControlInput1 from './components/ControlInput1/index.vue';
import ControlInput2 from './components/ControlInput2/index.vue';
import ControlInput3 from './components/ControlInput3/index.vue';
import ControlText from './components/ControlText/index.vue';
import ControlBox from './components/ControlBox/index.vue';
import ControlBoxMultiple from './components/ControlBoxMultiple/index.vue';
import ControlTime from './components/ControlTime/index.vue';
import ControlTimeRange from './components/ControlTimeRange/index.vue';
import ControlSelectSimple from './components/ControlSelectSimple/index.vue';
import ControlSelectMultipleSimple from './components/ControlSelectMultipleSimple/index.vue';
import ControlTreeSelectSimple from './components/ControlTreeSelectSimple/index.vue';
import ControlTreeSelectMultipleSimple from './components/ControlTreeSelectMultipleSimple/index.vue';

const schema = [
  { code: 'demo0' },
  { code: 'demo1' },
  { code: 'demo2' },
  { code: 'demo3' },
  { code: 'demo4' },
  { code: 'demo5' },
  { code: 'demo6' },
  { code: 'demo7' },
  { code: 'demo8' },
  { code: 'demo9' },
  { code: 'demo10' },
  { code: 'demo11' },
];

const entity = reactive({
  demo0: '1',
  demo1: '1',
  demo2: undefined,
  demo3: null,
});

const versionState = reactive(
  Object.fromEntries(schema.map((item: any) => [item.code, Math.random()]))
);

const test01 = () => {
  setValue('demo2', String(Math.random()));
};

const test02 = () => {
  entity.demo2 = String(1);
  versionState.demo2 = Math.random();
};

const test03 = () => {
  entity.demo2 = String(Math.random());
};

const test04 = () => {
  setValue('demo1', String(Math.random()));
  setValue('demo2', String(Math.random()));
  setValue('demo3', String(Math.random()));
};

const test05 = () => {
  setValue('demo4', String(Math.random()));
};

const test06 = () => {
  setValue('demo4', String(Math.random()));
};

const test07 = () => {
  setValue('demo5', []);
};

const test08 = () => {
  console.log(entity);
};
const test09 = () => {
  setValue('demo6', (entity.demo6 += 10000));
};

const test10 = () => {
  setValue('demo8', String(Math.random()));
};

const updateValueByCode = ({ code, beforeUpdate, afterUpdate }, value) => {
  beforeUpdate({}, value);
  setValue(code, value);
  afterUpdate({}, value);
};

const setValue = (code, value) => {
  entity[code] = value;
  versionState[code] = Math.random();
};

const afterUpdateDemo0 = () => {};
const afterUpdateDemo1 = ({}, value) => {
  setValue('demo2', value + '99');
};
const afterUpdateDemo2 = ({}, value) => {
  setValue('demo3', value + '88');
};
const afterUpdateDemo3 = ({}, value) => {};
const afterUpdateDemo4 = ({}, value) => {
  console.log(value);
};

provide('entity', entity);
</script>

<template>
  <dz-view col>
    <dz-view grid>
      <dz-button title="test01" @click="test01"></dz-button>
      <dz-button title="test02" @click="test02"></dz-button>
      <dz-button title="test03" @click="test03"></dz-button>
      <dz-button title="test04" @click="test04"></dz-button>
      <dz-button title="test05" @click="test05"></dz-button>
      <dz-button title="test06" @click="test06"></dz-button>
      <dz-button title="test07" @click="test07"></dz-button>
      <dz-button title="test08" @click="test08"></dz-button>
      <dz-button title="test09" @click="test09"></dz-button>
      <dz-button title="test10" @click="test10"></dz-button>
    </dz-view>
    <FormItem
      code="demo0"
      :component="ControlText"
      :version="versionState.demo0"
      :propsRow="entity"
      @updateValue="
        updateValueByCode(
          { code: 'demo0', beforeUpdate: () => {}, afterUpdate: () => {} },
          $event
        )
      "
    />

    <FormItem
      code="demo1"
      :component="ControlInput1"
      :version="versionState.demo1"
      :propsRow="entity"
      @updateValue="
        updateValueByCode(
          {
            code: 'demo1',
            beforeUpdate: () => {},
            afterUpdate: afterUpdateDemo1,
          },
          $event
        )
      "
    />

    <FormItem
      code="demo2"
      :component="ControlInput2"
      :version="versionState.demo2"
      :propsRow="entity"
      @updateValue="
        updateValueByCode(
          {
            code: 'demo2',
            beforeUpdate: () => {},
            afterUpdate: afterUpdateDemo2,
          },
          $event
        )
      "
    />

    <FormItem
      code="demo3"
      :component="ControlInput3"
      :version="versionState.demo3"
      @updateValue="
        updateValueByCode(
          {
            code: 'demo3',
            beforeUpdate: () => {},
            afterUpdate: afterUpdateDemo3,
          },
          $event
        )
      "
    />

    <FormItem
      code="demo4"
      :component="ControlBox"
      :version="versionState.demo4"
      @updateValue="
        updateValueByCode(
          {
            code: 'demo4',
            beforeUpdate: () => {},
            afterUpdate: afterUpdateDemo4,
          },
          $event
        )
      "
    />

    <FormItem
      code="demo5"
      :component="ControlBoxMultiple"
      :version="versionState.demo5"
      @updateValue="
        updateValueByCode(
          {
            code: 'demo5',
            beforeUpdate: () => {},
            afterUpdate: afterUpdateDemo4,
          },
          $event
        )
      "
    />

    <FormItem
      code="demo6"
      :component="ControlTime"
      :version="versionState.demo6"
      @updateValue="
        updateValueByCode(
          {
            code: 'demo6',
            beforeUpdate: () => {},
            afterUpdate: afterUpdateDemo4,
          },
          $event
        )
      "
    />

    <FormItem
      code="demo7"
      :component="ControlTimeRange"
      :version="versionState.demo7"
      @updateValue="
        updateValueByCode(
          {
            code: 'demo7',
            beforeUpdate: () => {},
            afterUpdate: afterUpdateDemo4,
          },
          $event
        )
      "
    />

    <FormItem
      code="demo8"
      :component="ControlSelectSimple"
      :version="versionState.demo8"
      @updateValue="
        updateValueByCode(
          {
            code: 'demo8',
            beforeUpdate: () => {},
            afterUpdate: afterUpdateDemo4,
          },
          $event
        )
      "
    />

    <FormItem
      code="demo9"
      :component="ControlSelectMultipleSimple"
      :version="versionState.demo9"
      @updateValue="
        updateValueByCode(
          {
            code: 'demo9',
            beforeUpdate: () => {},
            afterUpdate: afterUpdateDemo4,
          },
          $event
        )
      "
    />

    <FormItem
      code="demo10"
      :component="ControlTreeSelectSimple"
      :version="versionState.demo10"
      @updateValue="
        updateValueByCode(
          {
            code: 'demo10',
            beforeUpdate: () => {},
            afterUpdate: afterUpdateDemo4,
          },
          $event
        )
      "
    />

    <FormItem
      code="demo11"
      :component="ControlTreeSelectMultipleSimple"
      :version="versionState.demo11"
      @updateValue="
        updateValueByCode(
          {
            code: 'demo11',
            beforeUpdate: () => {},
            afterUpdate: afterUpdateDemo4,
          },
          $event
        )
      "
    />
  </dz-view>
</template>
