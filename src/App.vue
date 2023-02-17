<script setup lang="ts" name="App">
import { useSource } from '@/hooks/useSource';

onBeforeMount(async () => {
  await useSource({ strategy: 'import', sourceName: 'theme' });
});
</script>

<template>
  <RouterView />

  <ContainerDrag>
    <ConsoleRouter />
  </ContainerDrag>
</template>
