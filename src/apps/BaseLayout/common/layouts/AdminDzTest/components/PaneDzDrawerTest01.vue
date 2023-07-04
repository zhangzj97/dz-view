<script setup lang="ts">
import { reactive } from 'vue';

const modalState = reactive<any>({
  visible: false,
  fullscreen: false,
});

const toggleVisible = () => {
  modalState.visible = !modalState.visible;
};
</script>

<template>
  <dz-popover tooltip="默认 drawer">
    <v
      s="w-16 h-grow"
      trans="hover:bg-gray-100 active:bg-gray-200"
      pointer
      @click="toggleVisible"
    >
      <dz-icon
        s="w-16 h-16"
        class="scale-50"
        pointer
        icon="mdi:border-right-variant"
      />
    </v>
  </dz-popover>

  <dz-drawer
    :state="modalState"
    position="right"
    title="test01"
    icon="mdi:ab-testing"
  >
  </dz-drawer>
</template>
