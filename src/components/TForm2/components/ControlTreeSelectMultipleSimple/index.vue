<script setup lang="ts">
// !!! PlugincontrolProps
type PluginControlProps = {
  code: string;
  controlOption?: any;
  customOption?: any;
  propsRow: any;

  version: string | number;
};
// !!!

const props = defineProps<PluginControlProps>();

const controlState = reactive<any>({
  code: null,

  value: null,
  label: null,
});

watch(
  () => props.version,
  () => {
    refresh();
  }
);

const entity: any = inject('entity');

const refresh = () => {
  // 1. 缓存数据
  controlState.code = props.code;
  // 2. 获取数据
  controlState.value = entity[controlState.code];
  // 3. 转化成显示的数据
  controlState.label = controlState.value;
};

onMounted(() => {
  refresh();
});

const emit = defineEmits<{
  (e: 'updateValue', value: any): void;
  (e: 'changeValue', value: any): void;
}>();

const updateValue = value => {
  emit('updateValue', value);
};

const options1 = [
  {
    label: 'parent 1',
    id: 'parent 1',
    children: [
      {
        label: 'parent 1-0',
        id: 'parent 1-0',
        children: [
          {
            label: 'my leaf',
            id: 'leaf1',
          },
          {
            label: 'your leaf',
            id: 'leaf2',
          },
        ],
      },
      {
        label: 'parent 1-1',
        id: 'parent 1-1',
      },
    ],
  },
];
</script>

<template>
  <dz-view one :wrapper-class="['px-2']">
    {{ controlState.value }}

    <a-tree-select
      :value="controlState.value"
      @update:value="updateValue"
      show-search
      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
      :field-names="{ label: 'label', value: 'id', children: 'children' }"
      allow-clear
      treeCheckable
      multiple
      tree-default-expand-all
      :tree-data="options1"
    >
      <template #title="{ id, label }">
        <b v-if="id === 'parent 1-1'" style="color: #08c">sss</b>
        <template v-else>{{ label }}</template>
      </template>
    </a-tree-select>
  </dz-view>
</template>
