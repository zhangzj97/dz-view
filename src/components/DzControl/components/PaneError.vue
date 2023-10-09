<script setup lang="ts">
import type { ControlProps, ControlEmits } from '@/types/dz-view';
const props = withDefaults(defineProps<ControlProps<{}>>(), {});
const emits = defineEmits<ControlEmits>();

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
    </v>
  </v>
</template>

<style lang="scss">
@import url(../../assets/index.scss);
</style>
