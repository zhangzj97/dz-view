<script setup lang="ts">
import { reactive } from 'vue';

const modalState = reactive<any>({
  visible: false,
  fullscreen: false,
});

const modal2State = reactive<any>({
  visible: false,
  fullscreen: false,
});

const modal3State = reactive<any>({
  visible: false,
  fullscreen: false,
});

const toggleVisible = () => {
  modalState.visible = !modalState.visible;
};
</script>

<template>
  <dz-popover tooltip="嵌套">
    <v
      s="w-16 h-grow"
      trans="hover:bg-gray-100 active:bg-gray-200"
      pointer
      @click="toggleVisible"
    >
      <v-icon v="16-50" icon="mdi:rectangle-outline" />
    </v>
  </dz-popover>

  <dz-modal :state="modalState" title="test01" icon="mdi:ab-testing">
    <v s="w-96 h-96" class="bg-stripes-sky">
      <v
        s="w-12 h-12"
        class="bg-blue-300"
        @click="modal2State.visible = !modal2State.visible"
      ></v>
    </v>
  </dz-modal>

  <dz-modal :state="modal2State" title="modal2State" icon="mdi:ab-testing">
    <v s="w-48 h-48" class="bg-stripes-sky">
      <v
        s="w-12 h-12"
        class="bg-blue-300"
        @click="modal3State.visible = !modal3State.visible"
      ></v>
    </v>
  </dz-modal>

  <dz-modal :state="modal3State" title="modal3State" icon="mdi:ab-testing">
    <v s="w-48 h-48" class="bg-stripes-sky">
      <v s="w-12 h-12" class="bg-blue-300"></v>
    </v>
  </dz-modal>
</template>
