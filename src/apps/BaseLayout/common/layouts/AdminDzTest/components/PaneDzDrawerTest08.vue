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
    const t = testState.count + 100;
    testState.count = t % 2000;
  }, 150);
};
</script>

<template>
  <dz-popover tooltip="过渡 下">
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
        icon="mdi:rectangle-outline"
      />
    </v>
  </dz-popover>

  <dz-drawer
    :state="modalState"
    position="bottom"
    title="test01"
    icon="mdi:ab-testing"
  >
    <v
      s="w-fit h-fit"
      w="max-w-[100vw] max-h-[80vh] overflow-auto"
      class="bg-stripes-sky"
    >
      <v
        s="w-[40vw] h-[40vh]"
        class="bg-stripes-sky"
        :style="{
          height: `${testState.count}px`,
        }"
        trans
      >
      </v>
    </v>
  </dz-drawer>
</template>
