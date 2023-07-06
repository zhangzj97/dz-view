<script setup lang="ts">
import V from '@/components/VDesc/index.vue';

import LayoutUserProfile from '@/apps/BaseLayout/common/components/LayoutUserProfile/index.vue';
import LayoutLogo from '@/apps/BaseLayout/common/components/LayoutLogo/index.vue';
import LayoutRouteTag from '@/apps/BaseLayout/common/components/LayoutRouteTag/index.vue';
import LayoutMenu from '@/apps/BaseLayout/common/components/LayoutMenu/index.vue';
import LayoutMenuLevelTop from '@/apps/BaseLayout/common/components/LayoutMenuLevelTop/index.vue';
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
