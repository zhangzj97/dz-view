<script setup lang="ts">
const config: any = inject('config');
// TODO 使用状态机 来处理 logo的收缩
</script>

<template>
  <v s="w-fit h-16" w="overflow-hidden" class="bg-gray-500" trans>
    <v-icon v="16-90" :src="config.layout.logo.icon1" />
    <v s="w-48 h-16">
      <v s="w-grow h-16">
        <v-space s="w-grow h-grow" />
        <v-text
          :t="config.layout.logo.textStyle"
          :text="config.layout.logo.text"
        />
        <v-space s="w-grow h-grow" />
        <v-space s="w-grow h-grow" />
      </v>
    </v>
  </v>
</template>
