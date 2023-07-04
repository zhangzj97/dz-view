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
  <dz-popover tooltip="[110vw] x [10vh] 外部滚动">
    <v
      s="w-16 h-grow"
      trans="hover:bg-gray-100 active:bg-gray-200"
      pointer
      @click="toggleVisible"
    >
      <v-icon
        s="w-16 h-16"
        class="scale-50"
        pointer
        icon="mdi:rectangle-outline"
      />
    </v>
  </dz-popover>

  <dz-modal :state="modalState" title="test01" icon="mdi:ab-testing">
    <v s="w-[110vw] h-[10vh]" class="bg-stripes-sky"></v>
  </dz-modal>
</template>
