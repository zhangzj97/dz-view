<script setup lang="ts">
import { schemaForm } from './schemas';

const data = reactive({});

const schemaDemo01 = reactive([
  //
  { key: 'Demo11', component: 'Text', text: '这是一个很短的Text' },
  { key: 'Demo01', component: 'Text', text: '这是一个很长的Text' },
  { key: 'Demo02', component: 'Input' },
  { key: 'Demo03', component: 'Textarea' },
  { key: 'Demo04', component: 'Password' },
  { key: 'Demo05', component: 'Divider', text: '这是一个很短的Text', formItemOption: { layout: 'one' } },
  { key: 'Demo06', component: 'Divider', text: '这是一个很长的Text', formItemOption: { layout: 'one' } },
  { key: 'Demo08', component: 'Alert', text: '这是一个很长的Text', formItemOption: { layout: 'one' } },
  { key: 'Demo09', component: 'Alert', text: '这是一个很短的Text', formItemOption: { layout: 'one' }, props: { type: 'default' } },
  { key: 'Demo10', component: 'Alert', text: '这是一个很短的Text', formItemOption: { layout: 'one' }, props: { type: 'success' } },
  { key: 'Demo11', component: 'Alert', text: '这是一个很短的Text', formItemOption: { layout: 'one' }, props: { type: 'info' } },
  { key: 'Demo12', component: 'Alert', text: '这是一个很短的Text', formItemOption: { layout: 'one' }, props: { type: 'warning' } },
  { key: 'Demo13', component: 'Alert', text: '这是一个很短的Text', formItemOption: { layout: 'one' }, props: { type: 'error' } },
  { key: 'Demo09', component: 'Input' },
]);
</script>

<template>
  <dz-view col size="h-grow" overflow>
    <dz-view one size="h-16" position="2"> </dz-view>

    <dz-view one size="h-grow" position="2">
      <dz-view one size="h-grow w-96" wrapperClass="border-2" overflow>
        <dz-form :schema="schemaDemo01" :dataModel="data" :moduleName="'Demo/Form'" />
      </dz-view>
    </dz-view>
  </dz-view>
</template>
