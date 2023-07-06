<script setup lang="ts">
import ControlInput from './components/ControlInput.vue';
import NProgress from 'nprogress';

import { useForm } from './useForm';

const { form, formItem, refFromItem } = useForm();

const formItemUpdate = ref({});

const schema = reactive({
  // 整体配置
  config: {},

  // 字段
  field: {
    id: { code: 'id' },
    name: { code: 'name' },
    title: { code: 'title' },
    time: { code: 'time' },
  },

  // 资源服务
  resource: {},

  // 状态
  state: {
    id: { require: true, disabled: true, visible: true },
  },

  // 默认值
  defaultValue: {
    id: '1',
  },

  // 校验规则
  valiator: {},

  // 布局与样式
  style: {},

  // 提示帮助
  extend: {},

  // 事件
  event: {},
});

onMounted(() => {
  setTimeout(() => {
    NProgress.done();
    console.log('NProgress.done');
  }, 3000);
});
</script>

<template>
  <v s="w-grow h-grow">
    <dz-form ref="form" s="w-96 h-fit">
      <dz-form-item :ref="refFromItem(el, 'xxx')" code="xxx" />
    </dz-form>
  </v>
</template>
