<script setup lang="ts">
import PaneDzIconTest01 from './components/PaneDzIconTest01.vue';
import PaneDzIconTest02 from './components/PaneDzIconTest02.vue';
import PaneDzIconTest03 from './components/PaneDzIconTest03.vue';
import PaneDzIconTest04 from './components/PaneDzIconTest04.vue';
import PaneDzIconTest05 from './components/PaneDzIconTest05.vue';
import PaneDzIconTest06 from './components/PaneDzIconTest06.vue';
import PaneDzIconTest07 from './components/PaneDzIconTest07.vue';
import PaneDzIconTest08 from './components/PaneDzIconTest08.vue';
import PaneDzIconTest09 from './components/PaneDzIconTest09.vue';
import PaneDzIconTest10 from './components/PaneDzIconTest10.vue';

import { useModal } from '@/hooks/useTrigger';

const { state, setVisible } = useModal();

const testState = reactive({
  tooltip: 'Icon',
  triggerIcon: 'mdi:image-check-outline',
  title: 'Icon',
  icon: 'mdi:file-cad-box',
});
</script>

<template>
  <dz-popover :tooltip="testState.tooltip">
    <v s="w-16 h-grow" v="mouse-gray" @click="setVisible(true)">
      <v-icon v="16-50" :icon="testState.triggerIcon" />
    </v>
  </dz-popover>

  <dz-modal
    :state="state"
    position="right"
    :title="testState.title"
    :icon="testState.icon"
  >
    <v s="w-fit h-fit" w="min-w-[40vw] min-h-[40vh] max-w-[80vw] max-h-[80vh]">
      <v s="w-grow h-16">
        <PaneDzIconTest01 />
        <PaneDzIconTest02 />
        <PaneDzIconTest03 />
        <PaneDzIconTest04 />
        <PaneDzIconTest05 />
        <PaneDzIconTest06 />
        <PaneDzIconTest07 />
        <PaneDzIconTest08 />
        <PaneDzIconTest09 />
        <PaneDzIconTest10 />
      </v>
    </v>
  </dz-modal>
</template>
