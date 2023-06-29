<script setup lang="ts">
const config: any = inject('config');
// TODO 使用状态机 来处理 logo的收缩
</script>

<template>
  <v s="w-fit h-16" class="transition-all bg-gray-700" w="overflow-hidden">
    <dz-icon
      s="w-16 h-16"
      :src="config.layout.logo.icon1"
      :class="[config.layout.logo.icon1Style]"
    />
    <v s="w-48 h-16">
      <dz-icon
        v-if="config.layout.logo.icon2"
        s="w-16 h-16"
        :src="config.layout.logo.icon2"
        :class="[config.layout.logo.icon2Style]"
      />
      <v v-else s="w-grow h-16">
        <v s="w-grow h-16" space />
        <dz-text
          :t="config.layout.logo.textStyle"
          :text="config.layout.logo.text"
        />
        <v s="w-grow h-16" space />
        <v s="w-grow h-16" space />
      </v>
    </v>
  </v>
</template>
