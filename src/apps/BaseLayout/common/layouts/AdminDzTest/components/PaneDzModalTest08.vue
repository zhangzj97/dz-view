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
  testState.count += 1;
};
</script>

<template>
  <dz-popover tooltip="#action">
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
    <v
      s="w-fit h-fit"
      w="max-w-[80vw] max-h-[80vh] overflow-auto"
      class="bg-stripes-sky"
    >
      <v s="w-[40vw] h-[40vh]" class="bg-stripes-sky">
        {{ testState.count }}

        <v s="w-16 h-16" />
      </v>
    </v>
    <template #action>
      <v s="w-12 h-8" class="bg-red-200"></v>
      <v s="w-12 h-8" class="bg-red-200"></v>
      <v s="w-12 h-8" class="bg-red-200"></v>
      <v s="w-12 h-8" class="bg-red-200"></v>
      <v s="w-12 h-8" class="bg-red-200"></v>
    </template>
  </dz-modal>
</template>
