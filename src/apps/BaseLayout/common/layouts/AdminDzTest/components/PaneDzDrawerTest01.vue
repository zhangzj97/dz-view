<script setup lang="ts">
import { useModal } from '@/hooks/useTrigger';

const { state, setVisible } = useModal();
</script>

<template>
  <dz-popover tooltip="默认 drawer">
    <v s="w-16 h-grow" pointer @click="setVisible(true)">
      <v-icon v="16-50" icon="mdi:border-right-variant" />
    </v>
  </dz-popover>

  <dz-drawer
    :state="state"
    position="right"
    title="test01"
    icon="mdi:ab-testing"
  >
  </dz-drawer>
</template>
