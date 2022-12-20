<script setup lang="ts" name="LayoutContainer"></script>

<template>
  <div class="layout-container">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.layout-container {
  @apply relative flex flex-col transition-all transform;
}
.layout-container::-webkit-scrollbar {
  height: 0;
  width: 0;
}
.layout-container.flex-row {
  flex-direction: row;
}
.layout-container.sticky {
  position: sticky;
}
.layout-container.absolute {
  position: absolute;
}
</style>
