<script setup lang="ts">
import { Input } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/input/style/css';

const schema = reactive({
  // 整体配置
  config: {},

  // 字段
  // prettier-ignore
  field: {
    id    : { code: 'id',      title: 'Id'   },
    name  : { code: 'name',    title: '姓名' },
    title : { code: 'title',   title: '标题' },
    time  : { code: 'time',    title: '时间' },
  },

  props: {},

  // 状态
  state: {
    id: { require: true, disabled: true, visible: true },
    name: { require: true, disabled: true, visible: true },
    title: { require: true, disabled: true, visible: true },
    time: { require: true, disabled: true, visible: true },
  },

  // 校验规则
  valiator: {
    id: {},
    name: {},
    title: {},
    time: {},
  },

  // 布局与样式
  style: {
    id: { s: 'w-full h-fit' },
    name: { s: 'w-full h-fit' },
    title: { s: 'w-full h-fit' },
    time: { s: 'w-full h-fit' },
  },

  // 事件
  event: {
    id: {},
    name: {},
    title: {},
    time: {},
  },

  // ref
  dom: {
    id: {},
    name: {},
    title: {},
    time: {},
  },
});

const setRefMap =
  (el, { code }) =>
  el => {
    if (el) {
      schema.dom[code] = el;
    }
  };

const testDom = () => {
  console.log(schema.dom.id);
};
</script>

<template>
  <v s="w-grow h-grow" col text="Card01">
    <v s="w-grow h-fit"> <dz-btn title="dom" @click="testDom" /></v>
    <!-- dz-form -->
    <v s="w-grow h-grow" grid text="form">
      <dz-form-item
        v-for="(item, index) of schema.field"
        :ref="setRefMap(el, item)"
        :key="index"
        :code="item.code"
        :title="item.title"
        :s="schema.style[item.code].s"
      >
        <Input />
      </dz-form-item>
    </v>
  </v>
</template>
