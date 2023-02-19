<script setup lang="ts" name="PnaeMenuToolSet">
const emit = defineEmits<{
  (e: 'handleLight'): void;
  (e: 'handleDark'): void;
  (e: 'handleRound'): void;
  (e: 'handlePalette'): void;
  (e: 'handleUnfold'): void;
  (e: 'handleFold'): void;
  (e: 'handleHidden'): void;
  (e: 'handleInit'): void;
}>();

const handleLight = (): void => emit('handleLight');
const handleDark = (): void => emit('handleDark');
const handleRound = (): void => emit('handleRound');
const handlePalette = (): void => emit('handlePalette');
const handleUnfold = (): void => emit('handleUnfold');
const handleFold = (): void => emit('handleFold');
const handleHidden = (): void => emit('handleHidden');
const handleInit = (): void => emit('handleInit');
</script>

<template>
  <dz-view col>
    <dz-view row>
      <dz-icon size="6" icon="ic:round-filter-1" />
      <dz-icon size="6" icon="ic:round-filter-2" />
      <dz-icon size="6" icon="ic:round-filter-3" />
    </dz-view>
    <dz-view row>
      <dz-icon size="6" icon="ic:round-filter-1" />
      <dz-icon size="6" icon="ic:round-filter-2" />
      <dz-icon size="6" icon="ic:round-filter-3" />
    </dz-view>
  </dz-view>
</template>
