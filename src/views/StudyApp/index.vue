<script setup lang="ts" name="App">
import LayoutPage from './layouts/LayoutPage/index.vue';
</script>

<template>
  <LayoutPage>
    <RouterView class="animate__animated animate__fadeInRight" />
  </LayoutPage>
</template>

<style lang="scss">
@import url(./assets/index.scss);

.bg-page {
  background-position-x: -280px;
  background-size: calc(100% + 280px);
  background-repeat: no-repeat;

  position: absolute;
  width: 100%;
  height: 1000px;
}
</style>

<style lang="scss">
@import url(animate.css);
</style>

<style>
.flex-container {
  /* opacity: 0.5; */
}
.flex-container:hover {
  /* opacity: 0.5; */
}
</style>
