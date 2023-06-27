<script setup lang="ts">
import { inject } from 'vue';

const config = inject('config');
</script>

<template>
  <v s="w-64 h-16" desc="logo">
    <v s="w-16 h-16" desc="logo-pic">
      <v
        s="w-grow h-grow"
        class="bg-contain"
        :class="[config.layout.logo.icon1Style]"
        :style="{
          backgroundImage: `url(${config.layout.logo.icon1})`,
        }"
      ></v>
    </v>
    <v s="w-48 h-16" desc="logo-name">
      <v
        v-if="config.layout.logo.icon2"
        s="w-grow h-grow"
        class="bg-contain"
        :class="[config.layout.logo.icon2Style]"
        :style="{
          backgroundImage: `url(${config.layout.logo.icon2})`,
        }"
      />
      <v s="w-grow h-16">
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
