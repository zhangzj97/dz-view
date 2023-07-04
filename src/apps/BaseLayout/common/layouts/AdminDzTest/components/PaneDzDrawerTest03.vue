<script setup lang="ts">
import { useModal } from '@/hooks/useTrigger';

const { state, setVisible } = useModal();

const testState = reactive<any>({
  count: 0,
});

watch(
  () => state.visible,
  () => {
    setInterval(() => {
      const t = testState.count + 10;
      testState.count = t % 100;
    }, 200);
  }
);
</script>

<template>
  <dz-popover tooltip="过渡">
    <v
      s="w-16 h-grow"
      trans="hover:bg-gray-100 active:bg-gray-200"
      pointer
      @click="setVisible(true)"
    >
      <v-icon v="16-50" pointer icon="mdi:border-right-variant" />
    </v>
  </dz-popover>

  <dz-drawer :state="state" title="test01" icon="mdi:ab-testing">
    <v
      s="w-fit h-fit"
      w="max-w-[80vw] max-h-[80vh] overflow-auto"
      class="bg-stripes-sky"
    >
      <v
        s="w-[40vw] h-[40vh]"
        class="bg-stripes-sky"
        :style="{
          width: `${testState.count}vw`,
        }"
        trans
      >
      </v>
    </v>
  </dz-drawer>
</template>
