<script setup lang="ts">
import TriggerText from '../../TriggerText.vue';
import CacheText from '../../CacheText.vue';
defineOptions({ name: 'ControlString' });

import type { ControlProps, ControlEmits } from '@/types/dz-view';
const props = withDefaults(defineProps<ControlProps<{}>>(), {});
const emits = defineEmits<ControlEmits>();

const { is } = useValidate();
const { el, methods, events } = useControlBase({ props, emits });
const { cache, handleCache } = useControlCache({ props, emits });
const { service, handleService } = useControlService({ props, emits });

defineExpose({ ...methods });

onMounted(() => {
  emits('update:value', props.payload.defaultValue ?? null);
});

watch(
  () => props.value,
  v => handleCache.set([v])
);

const computedTriggerText = computed(() => {
  const v = props.value;
  return v ? props.value : '';
});

const computedCacheText = computed(() => {
  const v = cache.value[0];
  return v ? props.value : '';
});
</script>

<template>
  <dz-popover :payload="{ embed: payload.embed, position: 'bl' }">
    <TriggerText
      v-if="false"
      :payload="payload"
      :text="computedTriggerText"
      :value="value"
      :warning="null"
      @reset="methods.reset"
      @undo="methods.undo"
    />

    <template #body>
      <v s="w-grow h-fit" w="py-2 gap-1" col>
        <v v-if="false" s="w-grow h-fit">
          <CacheText :payload="payload" :value="computedCacheText" />
        </v>

        <v s="w-grow h-fit" class="group/panel">
          <input
            ref="el"
            :class="[
              'w-full h-8',
              'dz-plugin-control-input',
              payload.error && 'dz-plugin-control-input--error',
              payload.disabled && 'dz-plugin-control-input--disabled',
              'focus:outline-none',
              'pr-8',
            ]"
            :type="payload.inputType"
            :disabled="payload.disabled"
            :readonly="payload.readonly"
            :value="value"
            :placeholder="payload.placeholder"
            @input="events.input"
            @focus="events.focus"
            @blur="events.blur"
          />

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
                :class="['group-hover/panel:opacity-50 scale-90 opacity-0']"
                icon="mdi:close-circle-outline"
                @click="methods.reset"
              />
            </dz-popover>
          </v>
        </v>
      </v>
    </template>
  </dz-popover>
</template>
