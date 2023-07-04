<script setup lang="ts">
import { useModal } from '@/hooks/useTrigger';

const { state: state1, setVisible: setVisible1 } = useModal();
const { state: state2, setVisible: setVisible2 } = useModal();
const { state: state3, setVisible: setVisible3 } = useModal();
</script>

<template>
  <dz-popover tooltip="嵌套">
    <v
      s="w-16 h-grow"
      trans="hover:bg-gray-100 active:bg-gray-200"
      pointer
      @click="setVisible1(true)"
    >
      <dz-icon
        s="w-16 h-16"
        class="scale-50"
        pointer
        icon="mdi:border-right-variant"
      />
    </v>
  </dz-popover>

  <dz-drawer :state="state1" title="test01" icon="mdi:ab-testing">
    <v s="w-96 h-96" class="bg-stripes-sky">
      <v s="w-12 h-12" class="bg-blue-300" @click="setVisible2(true)"></v>
    </v>
  </dz-drawer>

  <dz-drawer :state="state2" title="modal2State" icon="mdi:ab-testing">
    <v s="w-48 h-48" class="bg-stripes-sky">
      <v s="w-12 h-12" class="bg-blue-300" @click="setVisible3(true)"></v>
    </v>
  </dz-drawer>

  <dz-drawer :state="state3" title="modal3State" icon="mdi:ab-testing">
    <v s="w-48 h-48" class="bg-stripes-sky">
      <v s="w-12 h-12" class="bg-blue-300"></v>
    </v>
  </dz-drawer>
</template>
