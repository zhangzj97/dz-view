<script setup lang="ts">
import TriggerText from '../../TriggerText.vue';
import CacheText from '../../CacheText.vue';
defineOptions({ name: 'ControlPicker' });

import type { ControlProps, ControlEmits } from '@/types/dz-view';
const props = withDefaults(defineProps<ControlProps<{}>>(), {});
const emits = defineEmits<ControlEmits>();

const { is } = useValidate();
const { el, methods, events, handleValue } = useControlBase({ props, emits });
const { cache, handleCache } = useControlCache({ props, emits });
const { service, handleService } = useControlService({ props, emits });

defineExpose({ ...methods });

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

onBeforeMount(async () => {
  await handleValue.set(props.payload.defaultValue || []);
  handleService.set([
    { id: '1', title: 't1', data: {} },
    { id: '2', title: 't2', data: {} },
    { id: '3', title: 't3', data: {} },
    ...mock1(),
  ]);
});

watch(
  () => props.value,
  v => handleCache.set(v)
);

const selectItem = (item: any, option: any = {}) => {
  const funct = (
    value: any,
    list: any[],
    option: { cancle?: boolean; multiple?: boolean; withoutCache?: boolean } = {}
  ) => {
    const { cancle, multiple } = option;
    const isExist = list.includes(value);
    const listWithoutValue = list.filter((item: string) => item !== value);
    let result: any[] = [];

    if (isExist && cancle) {
      result = [...listWithoutValue];
    } else {
      result = [...listWithoutValue, value];
    }

    if (!multiple && isExist && cancle) {
      result = [];
    } else if (!multiple) {
      result = [value];
    }

    return result;
  };

  const value = funct(item.id, cache.value || [], option);

  handleValue.set(value);
};

const computedTriggerText = computed(() => {
  return props.value
    .map((item: string) => {
      const item2 = service.map[item];
      return item2 ? item2.title : `${item}(!无匹配)`;
    })
    .join(',');
});

const computedCacheText = computed(() => {
  return cache.value
    .map((item: string) => {
      const item2 = service.map[item];
      return item2 ? item2.title : `${item}(!无匹配)`;
    })
    .join(',');
});

const computedCacheValue = computed(() => cache.value);
</script>

<template>
  <dz-popover :payload="{ embed: payload.embed, position: 'bl' }">
    <TriggerText
      :payload="payload"
      :text="computedTriggerText"
      :value="value"
      :warning="null"
      @reset="methods.clearArray"
      @undo="methods.undo"
    />

    <template #body>
      <v s="w-grow h-fit" col>
        <v s="w-grow h-fit">
          <CacheText :payload="payload" :value="computedCacheText" />
        </v>

        <v s="w-grow h-fit" class="group/panel">
          <v s="w-fit h-fit" w="pl-2 pr-8 gap-1 overflow-auto" col>
            <v v-if="payload.multiple" s="w-grow h-fit" w="gap-1" grid>
              <template v-for="(item, index) of service.list" :key="index">
                <dz-btn
                  :title="item.title"
                  :payload="{ size: 'small', type: computedCacheValue.includes(item.id) ? 'primary' : 'outline' }"
                  :icon="computedCacheValue.includes(item.id) ? 'mdi:checkbox-marked' : 'mdi:checkbox-blank-outline'"
                  @click="selectItem(item, { cancle: true, multiple: true })"
                />
              </template>
            </v>

            <v v-else s="w-grow h-fit" w="gap-1" grid>
              <template v-for="(item, index) of service.list" :key="index">
                <dz-btn
                  :title="item.title"
                  :payload="{ size: 'small', type: computedCacheValue.includes(item.id) ? 'primary' : 'outline' }"
                  :icon="computedCacheValue.includes(item.id) ? 'mdi:radiobox-marked' : 'mdi:radiobox-blank'"
                  @click="selectItem(item, { cancle: true, multiple: false })"
                />
              </template>
            </v>
          </v>
        </v>
      </v>
    </template>
  </dz-popover>
</template>
