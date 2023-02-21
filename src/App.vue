<script setup lang="ts" name="App">
import { useSource } from '@/hooks/useSource';

onBeforeMount(async () => {
  await useSource({ strategy: 'import', sourceName: 'theme' });
  await useSource({ strategy: 'import', sourceName: 'menu' });
});
</script>

<template>
  <RouterView />

  <ContainerDrag>
    <ConsoleRouter />
  </ContainerDrag>
</template>
