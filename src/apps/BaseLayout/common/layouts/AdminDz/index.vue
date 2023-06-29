<script setup lang="ts">
import LayoutLogo from '@/apps/BaseLayout/common/components/LayoutLogo/index.vue';
import LayoutMenu from '@/apps/BaseLayout/common/components/LayoutMenu/index.vue';
import LayoutUserProfile from '@/apps/BaseLayout/common/components/LayoutUserProfile/index.vue';
import LayoutRouteBreadCrumb from '@/apps/BaseLayout/common/components/LayoutRouteBreadCrumb/index.vue';
</script>

<template>
  <v col s="w-[100vw] h-[100vh]">
    <v s="w-grow h-16" desc="navbar">
      <LayoutLogo />
      <v s="w-grow h-16" desc="other"></v>
      <v s="w-fit h-16" desc="plugin">
        <v s="w-12 h-16" desc="plugin-search"></v>
        <v s="w-12 h-16" desc="plugin-locale"></v>
        <v s="w-12 h-16" desc="plugin-dark"></v>
        <v s="w-12 h-16" desc="plugin-notice"></v>
        <v s="w-12 h-16" desc="plugin-full"></v>
        <v s="w-12 h-16" desc="plugin-setting"></v>
        <v s="w-12 h-16" desc="plugin-theme"></v>
      </v>
      <LayoutUserProfile />
    </v>
    <v s="w-grow h-grow" desc="body">
      <v col s="w-fit h-grow" desc="sidebar">
        <LayoutLogo />
        <LayoutMenu class="z-50" />
      </v>
      <v col s="w-grow h-grow" desc="body">
        <LayoutRouteBreadCrumb />
        <v s="w-grow h-grow" w="overflow-auto" desc="body">
          <slot></slot>
        </v>
      </v>
    </v>
  </v>
</template>
