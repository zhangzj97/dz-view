<script setup lang="ts"></script>

<template>
  <dz-popover tooltip="长按放大">
    <v s="w-16 h-grow" trans="hover:bg-gray-100 active:bg-slate-200 " pointer>
      <v s="w-grow h-grow" trans="active:animate-ping" pointer>
        <v-icon s="w-16 h-16" class="scale-50" pointer icon="mdi:dice-1" />
      </v>
    </v>
  </dz-popover>
</template>
