<script setup lang="ts" name="App"></script>

<template>
  <h1>123</h1>
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
/* Test */
.dz-flex-container {
  /* opacity: 0.5; */
}

.dz-flex-container:hover {
  /* opacity: 0.5; */
}
</style>

<style>
/* fade-slide */
.fade-slide-leave-active,
.fade-slide-enter-active {
  transition: all 0.3s;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
