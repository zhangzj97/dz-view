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
  <div class="flex flex-row items-center justify-center h-8 gap-2">
    <dz-icon class="w-6 cursor-pointer hover:text-blue-500" @click="handleLight" icon="mdi:white-balance-sunny" />
    <dz-icon class="w-6 cursor-pointer hover:text-blue-500" @click="handleDark" icon="mdi:weather-night" />
    <dz-icon class="w-6 cursor-pointer hover:text-blue-500" @click="handleRound" icon="mdi:rounded-corner" />
    <dz-icon class="w-6 cursor-pointer hover:text-blue-500" @click="handlePalette" icon="mdi:palette" />
    <dz-icon class="w-6 cursor-pointer hover:text-blue-500" @click="handleUnfold" icon="mdi:arrow-left-bold-box-outline" />
    <dz-icon class="w-6 cursor-pointer hover:text-blue-500" @click="handleFold" icon="mdi:arrow-right-bold-box-outline" />
    <dz-icon class="w-6 cursor-pointer hover:text-blue-500" @click="handleHidden" icon="mdi:eye-settings" />
    <dz-icon class="w-6 cursor-pointer hover:text-blue-500" @click="handleInit" icon="mdi:refresh" />
  </div>
</template>
