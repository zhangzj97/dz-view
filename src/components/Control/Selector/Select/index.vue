<script setup lang="ts">
defineOptions({ name: 'ControlSelect' });

import type { ControlProps, ControlEmits } from '@/types/dz-view';
const props = withDefaults(defineProps<ControlProps<{}>>(), {});
const emits = defineEmits<ControlEmits>();

const { is, el, methods, events } = usePluginControl({ props, emits });

const getValue = (): string => (!is.Empty(props.value) ? props.value : '');
const setValue = (value: unknown) => {
  let newValue = null;
  if (is.String(value) || is.Number(value) || is.Boolean(value)) {
    newValue = String(value);
  }
  emits('update:value', newValue);
  setCheck(newValue);
};

const { serviceStore, setService, checkStore, setCheck } = useControlService({ props, emits });

const getService = () => {
  return serviceStore;
};

defineExpose({ ...methods, getValue, setValue, getService });

onMounted(() => {
  setValue(null);
  setService([
    { id: '1', title: 't1', data: { id: 1, name: 't1' } },
    { id: '2', title: 't2', data: { id: 2, name: 't2' } },
  ]);
});

const check = (value: string) => {
  const newValue = checkStore.value === value ? null : value;
  setValue(newValue);
};

const valueTitle = computed(() => {
  const value = checkStore.value;
  if (!value) return null;
  if (!getService().map[value]) return null;
  return getService().map[value].title;
});

const isExistOption = computed(() => {
  const value = checkStore.value;
  if (!value) return true;
  if (!getService().map[value]) return false;
  return true;
});
</script>

<template>
  <v s="w-grow h-fit" w="gap-1" col>
    <dz-popover :payload="{ position: 'bl', trigger: 'hover' }">
      <textarea
        ref="el"
        :class="[
          'w-grow h-8',
          'dz-plugin-control-input',
          payload.error && 'dz-plugin-control-input--error',
          payload.disabled && 'dz-plugin-control-input--disabled',
          'focus:outline-none',
          'pr-8',
        ]"
        :style="{
          cursor: 'pointer',
        }"
        type="text"
        :readonly="true"
        :disabled="payload.disabled"
        :value="valueTitle"
        :placeholder="payload.placeholder || '请选择'"
        @input="events.onInput"
        @focus="events.onFocus"
        @blur="events.onBlur"
      ></textarea>

      <template #body>
        <v s="w-grow h-fit" w="gap-1 p-2 min-w-[256px]" grid>
          <template v-for="(item, index) of serviceStore.list" :key="index">
            <dz-btn
              :title="item.title"
              :payload="{ type: getValue() === item.id ? 'primary' : 'outline' }"
              @click="check(item.id)"
            />
          </template>
        </v>
      </template>
    </dz-popover>

    <v s="w-grow h-fit">
      <v-space s="w-grow h-fit" />
      <dz-popover v-if="!isExistOption" :payload="{ tooltip: `[不存在选项] value : ${getValue()}` }">
        <dz-btn :class="['text-red-500', 'opacity-50 scale-90']" icon="mdi:alert" @click="methods.reset" />
      </dz-popover>

      <dz-btn
        :class="[getValue() ? 'opacity-50 scale-90' : 'opacity-0 scale-0']"
        icon="mdi:close-circle-outline"
        @click="methods.reset"
      />

      <dz-btn :class="['scale-90']" icon="mdi:refresh" @click="methods.reset" />
    </v>
  </v>
</template>
