<script setup lang="ts">
import type { ControlProps, ControlEmits } from '@/types/dz-view';
const props = withDefaults(defineProps<ControlProps<{}>>(), {});
const emits = defineEmits<ControlEmits>();

const { methods } = usePluginControl({ props, emits });
const getValue = (): string => props.value;

const { bind } = useBind();
</script>

<template>
  <v s="w-grow h-grow" col>
    <v s="w-grow h-fit">
      <dz-popover
        v-if="payload.error"
        v-bind="bind('Error', { trigger: 'click', maskClosable: false, visibleArrow: false })"
        class="animate-[shakeX_1s_ease-in-out_1]"
      >
        <v s="w-0 h-0" />
        <template #body>
          <v
            s="w-grow h-fit"
            class="p-2 bg-red-500 rounded-sm"
            pointer
            @click="bind('Error').setPayload({ visible: false })"
          >
            <v-text class="text-sm text-white" :text="payload.validator?.result?.message" />
          </v>
        </template>
      </dz-popover>
      <slot></slot>

      <dz-popover v-if="payload.test" v-bind="bind('Test', { trigger: 'click' })">
        <dz-btn icon="mdi:test-tube" />

        <template #body>
          <v s="w-fit h-fit" col>
            <v s="w-grow h-fit" row>
              <dz-btn
                title="必填"
                :payload="{ type: payload.required ? 'primary' : 'text' }"
                @click="methods.setPayload({ required: !payload.required })"
              />
              <dz-btn
                title="禁用"
                :payload="{ type: payload.disabled ? 'primary' : 'text' }"
                @click="methods.setPayload({ disabled: !payload.disabled })"
              />
              <dz-btn
                title="错误"
                :payload="{ type: payload.error ? 'primary' : 'text' }"
                @click="
                  methods.setPayload({ error: !payload.error });
                  bind('Error').setPayload({ visible: true });
                "
              />
            </v>

            <v s="w-grow h-fit" row>
              <dz-btn title="{}" @click="methods.setValue({})" />
              <dz-btn title="null" @click="methods.setValue(null)" />
              <dz-btn title="false" @click="methods.setValue(false)" />
              <dz-btn title="[]" @click="methods.setValue([])" />
              <dz-btn title="''" @click="methods.setValue('')" />
            </v>

            <v s="w-72 h-fit"> | => {{ getValue() }}</v>
            <v s="w-72 h-fit"> | => {{ String(getValue()) }}</v>
          </v>
        </template>
      </dz-popover>
    </v>
  </v>
</template>

<style lang="scss">
@import url(../../assets/index.scss);
</style>
