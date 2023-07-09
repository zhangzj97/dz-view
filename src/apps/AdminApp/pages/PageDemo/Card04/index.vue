<script setup lang="ts"></script>

<template>
  <v s="w-grow h-grow" w="overflow-auto scrollbar gap-2" grid text="Card01">
    <dz-btn title="Grid 实心 v 自动铺开" />
    <dz-btn v-for="item of 1000" :key="item" :title="String(item)" />
  </v>
</template>
