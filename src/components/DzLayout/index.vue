<script setup lang="ts" name="DzLay"></script>

<template>
  <div class="dz-layout-container">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.dz-layout-container {
  @apply relative flex flex-col transition-all transform;
}

.dz-layout-container::-webkit-scrollbar {
  height: 0;
  width: 0;
}

.dz-layout-container.flex-row {
  flex-direction: row;
}

.dz-layout-container.sticky {
  position: sticky;
}

.dz-layout-container.absolute {
  position: absolute;
}
</style>
