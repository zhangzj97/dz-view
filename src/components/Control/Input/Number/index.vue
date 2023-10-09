<script setup lang="ts">
import TriggerText from '../../TriggerText.vue';
import CacheText from '../../CacheText.vue';
defineOptions({ name: 'ControlNumber' });

import type { ControlProps, ControlEmits } from '@/types/dz-view';
const props = withDefaults(defineProps<ControlProps<{}>>(), {});
const emits = defineEmits<ControlEmits>();

const { is } = useValidate();
const { el, methods, events, handleValue } = useControlBase({ props, emits });
const { cache, handleCache } = useControlCache({ props, emits });
const { service, handleService } = useControlService({ props, emits });

defineExpose({ ...methods });

onBeforeMount(async () => {
  await handleValue.set(props.payload.defaultValue || null);
});

watch(
  () => props.value,
  v => handleCache.set(v)
);

const computedTriggerText = computed(() => props.value.join(','));
const computedCacheText = computed(() => cache.value.join(','));
const computedCacheFirst = computed(() => {
  const v = cache.value[0];
  return !is.Null(v) ? Number(cache.value?.[0]) : v;
});

const step01 = async () => {
  const v = props.value[0];
  await handleValue.set(!is.Null(v) ? String(Number(v) - 1) : String(-1));
  methods.validate({ error: true });
};

const step02 = async () => {
  const v = props.value[0];
  await handleValue.set(!is.Null(v) ? String(Number(v) + 1) : String(+1));
  methods.validate({ error: true });
};
</script>

<template>
  <dz-popover :payload="{ embed: payload.embed, position: 'bl' }">
    <TriggerText
      :payload="payload"
      :text="computedTriggerText"
      :value="value"
      :warning="null"
      @reset="methods.clearNull"
      @undo="methods.undo"
    />

    <template #body>
      <v s="w-grow h-fit" col>
        <v s="w-grow h-fit">
          <CacheText :payload="payload" :value="computedCacheText" />
        </v>

        <v s="w-grow h-fit" class="group/panel">
          <dz-btn class="scale-90" icon="mdi:minus-circle-outline" @click="step01" />

          <input
            ref="el"
            :class="[
              'w-20 h-8',
              'dz-plugin-control-input',
              payload.error && 'dz-plugin-control-input--error',
              payload.disabled && 'dz-plugin-control-input--disabled',
              'focus:outline-none',
              'pr-3',
            ]"
            type="number"
            :disabled="payload.disabled"
            :readonly="payload.readonly"
            :value="computedCacheFirst"
            :placeholder="payload.placeholder"
            @input="events.input"
            @focus="events.focus"
            @blur="events.blur"
          />

          <dz-btn class="scale-90" icon="mdi:plus-circle-outline" @click="step02" />

          <v s="w-fit h-fit" class="absolute top-0 right-0">
            <dz-popover
              v-if="
                (!value && payload.defaultValue) || (value && payload.defaultValue && value !== payload.defaultValue)
              "
              :payload="{ tooltip: '撤销 字段修改' }"
            >
              <dz-btn :class="['scale-90 opacity-50']" icon="mdi:undo-variant" @click="methods.undo" />
            </dz-popover>
            <dz-popover v-else :payload="{ tooltip: '清空 字段内容' }">
              <dz-btn
                v-if="value"
                :class="['scale-90 opacity-0', 'group-hover/panel:opacity-50']"
                icon="mdi:close-circle-outline"
                @click="methods.clearNull"
              />
            </dz-popover>
          </v>
        </v>
      </v>
    </template>
  </dz-popover>
</template>
