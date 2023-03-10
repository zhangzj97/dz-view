<script setup lang="ts" name="App"></script>

<template>
  <RouterView />

  <ContainerDrag>
    <ConsoleRouter />
  </ContainerDrag>
</template>

<style lang="scss">
@import url(./assets/index.scss);
</style>
