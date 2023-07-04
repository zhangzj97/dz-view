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
  <dz-popover tooltip="96 x 96">
    <v s="w-16 h-grow" v="mouse-gray" @click="setVisible(true)">
      <v-icon v="16-50" icon="mdi:rectangle-outline" />
    </v>
  </dz-popover>

  <dz-modal :state="modalState" title="test01" icon="mdi:ab-testing">
    <v s="w-96 h-96" class="bg-stripes-sky"></v>
  </dz-modal>
</template>
