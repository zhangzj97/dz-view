<script setup lang="ts">
import TriggerText from '../../TriggerText.vue';
import CacheText from '../../CacheText.vue';
defineOptions({ name: 'ControlString' });

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

const computedInputType = computed(() => {
  if (!props.payload.inputType) return 'text';
  if (props.payload.inputType === 'password' && props.payload.isPasswordText) return 'password';
  if (props.payload.inputType === 'password' && !props.payload.isPasswordText) return 'text';
  return props.payload.inputType;
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
      @reset="methods.clearNull"
      @undo="methods.undo"
    />

    <template #body>
      <v s="w-grow h-fit" col>
        <v v-if="false" s="w-grow h-fit">
          <CacheText :payload="payload" :value="computedCacheText" />
        </v>

        <v s="w-grow h-fit" class="group/panel">
          <input
            ref="el"
            :class="[
              'w-grow h-8',
              'dz-plugin-control-input',
              payload.error && 'dz-plugin-control-input--error',
              payload.disabled && 'dz-plugin-control-input--disabled',
              'focus:outline-none',
              'pr-8',
            ]"
            :type="computedInputType"
            :disabled="payload.disabled"
            :readonly="payload.readonly"
            :value="computedCacheValueFirst"
            :placeholder="payload.placeholder"
            @input="events.input"
            @focus="events.focus"
            @blur="events.blur"
          />

          <v s="w-fit h-fit" class="absolute top-0 right-0">
            <dz-popover v-if="payload.inputType === 'password' && value" :payload="{ tooltip: '切换明文' }">
              <dz-btn
                v-if="!payload.isPasswordText"
                :class="['scale-90 opacity-0', 'group-hover/panel:opacity-50']"
                icon="mdi:eye-off-outline"
                @click="methods.setPayload({ isPasswordText: true })"
              />
              <dz-btn
                v-else
                :class="['scale-90 opacity-0', 'group-hover/panel:opacity-50']"
                icon="mdi:eye-outline"
                @click="methods.setPayload({ isPasswordText: false })"
              />
            </dz-popover>

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
