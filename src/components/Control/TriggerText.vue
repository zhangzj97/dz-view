<script setup lang="ts">
withDefaults(
  defineProps<{
    payload: any;
    text: string;
    value: any;
    // TODO WARINING
    warning?: string | null;
  }>(),
  {}
);

const emits = defineEmits<{
  reset: [];
  undo: [];
}>();

const reset = () => emits('reset');

const undo = () => emits('undo');
</script>

<template>
  <v s="w-grow h-fit" row>
    <v s="w-grow h-fit" class="group/trigger">
      <textarea
        :class="[
          'w-grow h-8',
          'dz-plugin-control-input',
          payload.error && 'dz-plugin-control-input--error',
          payload.disabled && 'dz-plugin-control-input--disabled',
          'focus:outline-none',
          'pr-4',
        ]"
        :disabled="payload.disabled"
        :readonly="true"
        :placeholder="payload.placeholder"
        :value="text"
        :row="1"
      ></textarea>

      <v s="w-fit h-fit" class="absolute top-0 right-2">
        <dz-popover
          v-if="(!value && payload.defaultValue) || (value && payload.defaultValue && value !== payload.defaultValue)"
          :payload="{ tooltip: '撤销 字段修改' }"
        >
          <dz-btn :class="['scale-90 opacity-50']" icon="mdi:undo-variant" @click="undo" />
        </dz-popover>
        <dz-popover v-else :payload="{ tooltip: '清空 字段内容' }">
          <dz-btn
            v-if="value"
            :class="['group-hover/trigger:opacity-50 scale-90 opacity-0']"
            icon="mdi:close-circle-outline"
            @click="reset"
          />
        </dz-popover>
      </v>
    </v>

    <dz-popover v-if="warning" :payload="{ tooltip: warning }">
      <dz-btn :class="['scale-90 opacity-80', 'text-yellow-500']" icon="mdi:alert" />
    </dz-popover>
  </v>
</template>
