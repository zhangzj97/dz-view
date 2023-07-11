<script setup lang="ts">
import { Input } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/input/style/css';

const { schema, bind, setState, data } = useForm({ module: 'Test' });

const testDom = () => {
  // console.log(schema.dom.id);
};

const test02 = () => {
  // data.value.id = new Date().getTime();
  console.log(schema);
};
</script>

<template>
  <v s="w-grow h-grow" col text="Card01">
    <v s="w-grow h-fit">
      <dz-btn title="dom" @click="testDom" />
      <dz-btn title="dom" @click="test02" />
      <dz-btn title="setState" @click="setState('id')('required', false)" />
      <dz-btn title="setState" @click="setState('id')('required', true)" />
      <dz-btn title="setState" @click="setState('id')('visible', true)" />
      <dz-btn title="setState" @click="setState('id')('visible', false)" />
      <dz-btn title="setState" @click="data.value.id = '999'" />
    </v>

    <!-- 有 schema dz-form 最简单版本 -->
    <!-- <dz-form :ref="from" :schema="schema" :data="data" /> -->

    <!-- 有 schema -->
    <!-- <dz-form-item :schema="schema" code="id" /> -->

    <!-- 无 schema -->
    <!-- simple -->
    <!-- <dz-form-item
      ref="form_id"
      value="xxxx"
      code="id"
      plugin="component.type"
      :field="{}"
      :state="{}"
      :prop="{}"
      :layout="{}"
    /> -->

    <!-- 无 schema 多个 -->
    <!-- dz-form -->
    <!-- prettier-ignore -->
    <v s="w-grow h-grow" grid text="form">
      <dz-form-item v-bind="bind('id', 'Input')" />
      <dz-form-item v-bind="bind('name','Input')"  />
    </v>

    <v s="w-grow h-grow">
      <pre>
        {{ data }}
        {{ schema }}
      </pre>
    </v>
  </v>
</template>
