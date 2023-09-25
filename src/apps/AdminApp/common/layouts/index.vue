<script setup lang="ts">
import LayoutUserProfile from './components/LayoutUserProfile/index.vue';
import LayoutLogo from '.n/components/LayoutLogo/index.vue';
import LayoutRouteTag from './components/LayoutRouteTag/index.vue';
import LayoutMenu from './components/LayoutMenu/index.vue';
import LayoutMenuLevelTop from './components/LayoutMenuLevelTop/index.vue';
</script>

<template>
  <v s="w-[100vw] h-[100vh]" col text="screen">
    <v s="w-grow h-grow" text="body">
      <v s="w-fit h-grow" col w="overflow-visible">
        <LayoutLogo />

        <LayoutMenu class="z-[999]" />
      </v>
      <v s="w-grow h-grow" col text="body">
        <v s="w-grow h-16" text="navbar">
          <LayoutMenuLevelTop />
          <LayoutUserProfile />
        </v>
        <LayoutRouteTag />

        <v s="w-grow h-grow" text="body">
          <slot></slot>
        </v>
      </v>
    </v>
  </v>
</template>
