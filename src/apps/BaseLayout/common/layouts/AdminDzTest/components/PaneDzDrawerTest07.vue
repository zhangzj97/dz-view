<script setup lang="ts">
import { reactive } from 'vue';

const modalState = reactive<any>({
  visible: false,
  fullscreen: false,
});

const testState = reactive<any>({
  count: 0,
});

const toggleVisible = () => {
  modalState.visible = !modalState.visible;
  setInterval(() => {
    const t = testState.count + 10;
    testState.count = t % 1000;
  }, 150);
};
</script>

<template>
  <dz-popover tooltip="过渡 左">
    <v
      s="w-16 h-grow"
      trans="hover:bg-gray-100 active:bg-gray-200"
      pointer
      @click="toggleVisible"
    >
      <v-icon v="16-50" icon="mdi:rectangle-outline" />
    </v>
  </dz-popover>

  <dz-drawer
    :state="modalState"
    position="left"
    title="test01"
    icon="mdi:ab-testing"
  >
    <v
      s="w-fit h-fit"
      w="max-w-[80vw] max-h-[80vh] overflow-auto"
      class="bg-stripes-sky"
    >
      <v
        s="w-[40vw] h-[40vh]"
        class="bg-stripes-sky"
        :style="{
          width: `${testState.count}px`,
        }"
        trans
      >
      </v>
    </v>
  </dz-drawer>
</template>
