<script setup lang="ts">
import { useModal } from '@/hooks/useTrigger';

const { state, setVisible } = useModal();

const testState = reactive({
  tooltip: 'Button',
  triggerIcon: 'mdi:button-pointer',
  title: 'Button',
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
    <v
      s="w-fit h-fit"
      w="min-w-[40vw] min-h-[40vh] max-w-[80vw] max-h-[80vh] p-4"
    >
      <v s="w-grow h-grow" col>
        <v s="w-grow h-12" w="gap-2">
          <dz-btn />
          <dz-btn title="Title" />
          <dz-btn title="Title" :icon="testState.icon" />
        </v>

        <!-- prettier-ignore -->
        <v s="w-grow h-12" w="gap-2">
          <dz-btn                  status="normal" title="Title" :icon="testState.icon" />
          <dz-btn type="primary"   status="normal" title="Title" :icon="testState.icon" />
          <dz-btn type="secondary" status="normal" title="Title" :icon="testState.icon" />
          <dz-btn type="outline"   status="normal" title="Title" :icon="testState.icon" />
          <dz-btn type="dashed"    status="normal" title="Title" :icon="testState.icon" />
          <dz-btn type="text"      status="normal" title="Title" :icon="testState.icon" />
        </v>
        <!-- prettier-ignore -->
        <v s="w-grow h-12" w="gap-2">
          <dz-btn                  status="warning" title="Title" :icon="testState.icon" />
          <dz-btn type="primary"   status="warning" title="Title" :icon="testState.icon" />
          <dz-btn type="secondary" status="warning" title="Title" :icon="testState.icon" />
          <dz-btn type="outline"   status="warning" title="Title" :icon="testState.icon" />
          <dz-btn type="dashed"    status="warning" title="Title" :icon="testState.icon" />
          <dz-btn type="text"      status="warning" title="Title" :icon="testState.icon" />
        </v>
        <!-- prettier-ignore -->
        <v s="w-grow h-12" w="gap-2">
          <dz-btn                  status="success" title="Title" :icon="testState.icon" />
          <dz-btn type="primary"   status="success" title="Title" :icon="testState.icon" />
          <dz-btn type="secondary" status="success" title="Title" :icon="testState.icon" />
          <dz-btn type="outline"   status="success" title="Title" :icon="testState.icon" />
          <dz-btn type="dashed"    status="success" title="Title" :icon="testState.icon" />
          <dz-btn type="text"      status="success" title="Title" :icon="testState.icon" />
        </v>
        <!-- prettier-ignore -->
        <v s="w-grow h-12" w="gap-2">
          <dz-btn                  status="danger" title="Title" :icon="testState.icon" />
          <dz-btn type="secondary" status="danger" title="Title" :icon="testState.icon" />
          <dz-btn type="outline"   status="danger" title="Title" :icon="testState.icon" />
          <dz-btn type="dashed"    status="danger" title="Title" :icon="testState.icon" />
          <dz-btn type="text"      status="danger" title="Title" :icon="testState.icon" />
        </v>
      </v>
    </v>
  </dz-modal>
</template>
