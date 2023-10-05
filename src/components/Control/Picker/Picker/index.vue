<script setup lang="ts">
defineOptions({ name: 'ControlPicker' });

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
    <v s="w-fit h-fit" w="pl-2 pr-8 gap-1 overflow-auto" col>
      <v s="w-grow h-fit" w="gap-1" grid>
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
