<script setup lang="ts">
import { useDrawer } from '@/hooks/useTrigger';

const { state: state1, setVisible: setVisible1 } = useDrawer();
const { state: state2, setVisible: setVisible2 } = useDrawer();
const { state: state3, setVisible: setVisible3 } = useDrawer();

const testState = reactive({
  tooltip: '嵌套',
  triggerIcon: 'mdi:border-right-variant',
  modalTitle: '嵌套',
  modalIcon: 'mdi:file-cad-box',
});
</script>

<template>
  <dz-popover :tooltip="testState.tooltip">
    <v s="w-16 h-grow" v="mouse-gray" @click="setVisible1(true)">
      <v-icon v="16-50" :icon="testState.triggerIcon" />
    </v>
  </dz-popover>

  <dz-drawer :state="state1" title="一级嵌套" icon="mdi:dice-1">
    <v s="w-[80vw] h-96" class="bg-stripes-sky">
      <v s="w-16 h-grow" v="mouse-gray" @click="setVisible2(true)">
        <v-icon v="16-50" :icon="testState.triggerIcon" />
      </v>
    </v>
  </dz-drawer>

  <dz-drawer :state="state2" title="二级嵌套" icon="mdi:dice-2">
    <v s="w-[60vw] h-48" class="bg-stripes-sky">
      <v s="w-16 h-grow" v="mouse-gray" @click="setVisible3(true)">
        <v-icon v="16-50" :icon="testState.triggerIcon" />
      </v>
    </v>
  </dz-drawer>

  <dz-drawer :state="state3" title="三级嵌套" icon="mdi:dice-3">
    <v s="w-[40vw] h-24" class="bg-stripes-sky">
      <v s="w-16 h-grow" v="mouse-gray" @click="setVisible3(false)">
        <v-icon v="16-50" :icon="testState.triggerIcon" />
      </v>
    </v>
  </dz-drawer>
</template>
