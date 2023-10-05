<script setup lang="ts">
defineOptions({ name: 'ControlPopPicker' });

import type { ControlProps, ControlEmits } from '@/types/dz-view';
const props = withDefaults(defineProps<ControlProps<{}>>(), {});
const emits = defineEmits<ControlEmits>();

const { is, el, methods, events } = useControlBase({ props, emits });

const getValue = (): string | string[] | null | any => props.value;
const setValue = (value: unknown) => {
  let newValue = null;
  if (is.String(value) || is.Number(value)) {
    newValue = String(value);
  }
  emits('update:value', newValue);
};

const { getService, setServiceData } = useControlService({ props, emits });

const { getPicker, pick } = useControlPicker({ props, emits });

defineExpose({ ...methods, getValue, setValue, getService, pick, getPicker });

const reset = () => {
  methods.reset();
  pick.set([]);
};

const mock1 = () => {
  const length = Math.random() * 10;
  return Array.from({ length }).map(item => {
    const a = String(~~(Math.random() * 10000));
    return {
      id: a,
      title: `id-${a}`,
      data: {},
    };
  });
};

onMounted(() => {
  setValue(null);
  setServiceData([{ id: 1, title: 't1', data: {} }, ...mock1()]);
});

const pickClick = (value: string) => {
  pick.set([value]);
  setValue(value);
};

const valueText = computed(() => {
  const value = getPicker().value;
  if (is.Empty(value)) return '';
  return value
    .map((item: string) => {
      const item2 = getService().map[item];
      return item2 ? item2.title : `${value}(无匹配)`;
    })
    .join(',');
});

const valueWithoutService = computed(() => {
  return getPicker().value.find((item: string) => !getService().map[item]);
});
</script>

<template>
  <v s="w-grow h-fit" w="gap-1" col>
    <dz-popover :payload="{ position: 'bl', trigger: 'hover' }">
      <textarea
        ref="el"
        :class="[
          'w-grow h-fit',
          'transition-none',
          'dz-plugin-control-input',
          payload.error && 'dz-plugin-control-input--error',
          payload.disabled && 'dz-plugin-control-input--disabled',
          'focus:outline-none',
          'pr-8',
        ]"
        :rows="1"
        :style="{ cursor: 'pointer' }"
        :readonly="true"
        :disabled="payload.disabled"
        :value="valueText"
        :placeholder="payload.placeholder || '请选择'"
        @input="events.onInput"
        @focus="events.onFocus"
        @blur="events.onBlur"
      ></textarea>

      <template #body>
        <v s="w-fit h-fit" w="p-2 gap-1 overflow-auto" col>
          <v s="w-grow h-fit" class="overflow-auto">
            <v-text class="text-xs" text="单选" />
            <dz-btn :class="['scale-90']" icon="mdi:refresh" @click="methods.reset" />
          </v>
          <v s="w-grow h-fit" w="gap-1 min-w-[256px] max-w-[512px]" grid>
            <template v-for="(item, index) of getService().list" :key="index">
              <dz-btn
                :title="item.title"
                :payload="{ type: getPicker().value.includes(item.id) ? 'primary' : 'outline' }"
                :icon="getPicker().value.includes(item.id) ? 'mdi:radiobox-marked' : 'mdi:radiobox-blank'"
                @click="pickClick(item.id)"
              />
            </template>
          </v>
        </v>
      </template>
    </dz-popover>

    <v s="w-fit h-fit" class="absolute top-0 right-2">
      <v-space s="w-grow h-fit" />
      <dz-popover v-if="valueWithoutService" :payload="{ tooltip: `[无匹配选项] value : ${valueWithoutService}` }">
        <dz-btn :class="['text-red-500', 'opacity-50 scale-90']" icon="mdi:alert" />
      </dz-popover>

      <dz-btn
        :class="[getValue() ? 'opacity-50 scale-90' : 'opacity-0 scale-0']"
        icon="mdi:close-circle-outline"
        @click="reset"
      />
    </v>
  </v>
</template>
