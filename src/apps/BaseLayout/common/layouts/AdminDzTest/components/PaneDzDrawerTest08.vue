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
    <v s="w-16 h-grow" v="mouse-gray" @click="setVisible(true)">
      <v-icon v="16-50" icon="mdi:border-right-variant" />
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
