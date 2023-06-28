<script setup lang="ts">
import { inject } from 'vue';

const config: any = inject('config');
</script>

<template>
  <v s="w-64 h-16" desc="logo">
    <dz-icon
      s="w-16 h-16"
      :src="config.layout.logo.icon1"
      :class="[config.layout.logo.icon1Style]"
    />
    <v s="w-48 h-16" desc="logo-name">
      <dz-icon
        v-if="config.layout.logo.icon2"
        s="w-fit h-16"
        :src="config.layout.logo.icon2"
        :class="[config.layout.logo.icon2Style]"
      />
      <v v-else s="w-grow h-16">
        <v s="w-grow h-grow" space />
        <dz-text :t="config.layout.logo.textStyle">
          {{ config.layout.logo.text }}
        </dz-text>
        <v s="w-grow h-grow" space />
        <v s="w-grow h-grow" space />
      </v>
    </v>
  </v>
</template>
