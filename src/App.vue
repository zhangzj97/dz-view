<script setup lang="ts" name="App">
import {
  useSourceServiceStore,
  useSourcePluginStore,
} from '@/hooks/useSourceStore';

onMounted(async () => {
  console.log(await useSourceServiceStore().initSourceImportRaw());
  console.log(await useSourcePluginStore().initSourceImportRaw());
});
</script>

<template>
  <RouterView />

  <ContainerDrag>
    <ConsoleRouter />
  </ContainerDrag>
</template>

<style lang="scss">
@import url(./assets/index.scss);
</style>
