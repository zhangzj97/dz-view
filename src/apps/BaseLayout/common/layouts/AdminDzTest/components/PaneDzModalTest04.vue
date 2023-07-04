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
  <dz-popover tooltip="[110vw] x [110vh] 外部滚动">
    <v s="w-16 h-grow" v="mouse-gray" @click="setVisible(true)">
      <v-icon v="16-50" icon="mdi:rectangle-outline" />
    </v>
  </dz-popover>

  <dz-modal :state="modalState" title="test01" icon="mdi:ab-testing">
    <v s="w-[110vw] h-[110vh]" class="bg-stripes-sky"></v>
  </dz-modal>
</template>
