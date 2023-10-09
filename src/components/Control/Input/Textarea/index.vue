<script setup lang="ts">
import TriggerText from '../../TriggerText.vue';
import CacheText from '../../CacheText.vue';
defineOptions({ name: 'ControlTextarea' });

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
const computedCacheValueFirst = computed(() => cache.value?.[0]);
</script>

<template>
  <dz-popover :payload="{ embed: payload.embed, position: 'bl' }">
    <TriggerText
      v-if="false"
      :payload="payload"
      :text="computedTriggerText"
      :value="value"
      :warning="null"
      @reset="methods.clearNull"
      @undo="methods.undo"
    />

    <template #body>
      <v s="w-grow h-fit" col>
        <v v-if="false" s="w-grow h-fit">
          <CacheText :payload="payload" :value="computedCacheText" />
        </v>

        <v s="w-grow h-fit" class="group/panel">
          <textarea
            ref="el"
            :class="[
              'transition-none',
              'w-grow h-fit',
              'dz-plugin-control-textarea',
              payload.error && 'dz-plugin-control-textarea--error',
              payload.disabled && 'dz-plugin-control-textarea--disabled',
              'focus:outline-none',
              'pr-8',
            ]"
            type="text"
            :disabled="payload.disabled"
            :readonly="payload.readonly"
            :value="computedCacheValueFirst"
            :placeholder="payload.placeholder"
            @input="events.input"
            @focus="events.focus"
            @blur="events.blur"
          ></textarea>

          <v s="w-fit h-fit" class="absolute top-0 right-2">
            <dz-popover v-if="handleValue.diff(payload.defaultValue)" :payload="{ tooltip: '撤销 字段修改' }">
              <dz-btn :class="['scale-90 opacity-50']" icon="mdi:undo-variant" @click="methods.undo" />
            </dz-popover>
            <dz-popover v-else :payload="{ tooltip: '清空 字段内容' }">
              <dz-btn
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
