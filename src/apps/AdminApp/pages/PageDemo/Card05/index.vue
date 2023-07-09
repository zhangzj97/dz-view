<script setup lang="ts"></script>

<template>
  <v s="w-grow h-grow" w="overflow-auto scrollbar " grid text="Card01">
    <dz-btn title="Grid 非实心 v 媒体查询" />
    <v
      v-for="item of 1000"
      :key="item"
      s="w-1/3 h-16"
      trans="lg:w-1/4"
      :text="String(item)"
    />
  </v>
</template>
