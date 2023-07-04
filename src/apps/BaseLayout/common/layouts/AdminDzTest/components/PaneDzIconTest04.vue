<script setup lang="ts"></script>

<template>
  <dz-popover tooltip="静态旋转">
    <v s="w-16 h-grow" trans="hover:bg-gray-100 active:bg-slate-200" pointer>
      <v-icon
        s="w-16 h-16"
        class="scale-50 rotate-45"
        pointer
        icon="mdi:dice-1"
      />
    </v>
  </dz-popover>
</template>
