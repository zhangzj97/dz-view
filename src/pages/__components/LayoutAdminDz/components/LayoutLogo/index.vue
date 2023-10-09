<script setup lang="ts">
const { getState } = useService();

const { menuState } = getState('Dz/Route');
const config: any = inject('config');
</script>

<template>
  <v s="w-fit h-16" w="overflow-hidden" class="bg-gray-500" trans>
    <v-icon :v="menuState.iconMode ? '10-90' : '16-90'" trans :src="config.layout.logo.icon1" />
    <v s="w-fit h-16" :w="menuState.iconMode ? 'max-w-[0px]' : 'max-w-[100vw]'" trans>
      <v s="w-48 h-16">
        <v-space s="w-grow h-grow" />
        <v-text :t="config.layout.logo.textStyle" :text="config.layout.logo.text" />
        <v-space s="w-grow h-grow" />
        <v-space s="w-grow h-grow" />
      </v>
    </v>
  </v>
</template>
