<script setup lang="ts">
import type { ControlProps, ControlEmits } from '@/types/dz-view';
const props = withDefaults(defineProps<ControlProps<{}>>(), {});
const emits = defineEmits<ControlEmits>();

const { methods } = usePluginControl({ props, emits });

const { bind } = useBind();
</script>

<template>
  <dz-popover v-bind="bind('Test', { trigger: 'click', maskClosable: false })">
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

        <v s="w-72 h-fit"> | => {{ value }}</v>
        <v s="w-72 h-fit"> | => {{ String(value) }}</v>
        <v s="w-72 h-fit"> | => {{ String(payload.defaultValue) }}</v>

        <v s="w-fit h-fit" row>
          <dz-btn @click="bind('Test').setPayload({ visible: false })" icon="mdi:close-circle-outline" />
        </v>
      </v>
    </template>
  </dz-popover>
</template>

<style lang="scss">
@import url(../../assets/index.scss);
</style>
