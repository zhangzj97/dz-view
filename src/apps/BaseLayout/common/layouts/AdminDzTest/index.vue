<script setup lang="ts">
import V from '@/components/VDesc/index.vue';

import LayoutUserProfile from '@/apps/BaseLayout/common/components/LayoutUserProfile/index.vue';
import LayoutLogo from '@/apps/BaseLayout/common/components/LayoutLogo/index.vue';
import LayoutRouteTag from '@/apps/BaseLayout/common/components/LayoutRouteTag/index.vue';

import PaneDzModalTest01 from './components/PaneDzModalTest01.vue';
import PaneDzModalTest02 from './components/PaneDzModalTest02.vue';
import PaneDzModalTest03 from './components/PaneDzModalTest03.vue';
import PaneDzModalTest04 from './components/PaneDzModalTest04.vue';
import PaneDzModalTest05 from './components/PaneDzModalTest05.vue';
import PaneDzModalTest06 from './components/PaneDzModalTest06.vue';
import PaneDzModalTest07 from './components/PaneDzModalTest07.vue';
import PaneDzModalTest08 from './components/PaneDzModalTest08.vue';
import PaneDzModalTest09 from './components/PaneDzModalTest09.vue';
import PaneDzModalTest10 from './components/PaneDzModalTest10.vue';

import PaneDzIconTest from './components/PaneDzIconTest/index.vue';
import PaneDzBtnTest from './components/PaneDzBtnTest/index.vue';

import PaneDzDrawerTest01 from './components/PaneDzDrawerTest01.vue';
import PaneDzDrawerTest02 from './components/PaneDzDrawerTest02.vue';
import PaneDzDrawerTest03 from './components/PaneDzDrawerTest03.vue';
import PaneDzDrawerTest04 from './components/PaneDzDrawerTest04.vue';
import PaneDzDrawerTest05 from './components/PaneDzDrawerTest05.vue';
import PaneDzDrawerTest06 from './components/PaneDzDrawerTest06.vue';
import PaneDzDrawerTest07 from './components/PaneDzDrawerTest07.vue';
import PaneDzDrawerTest08 from './components/PaneDzDrawerTest08.vue';
import PaneDzDrawerTest09 from './components/PaneDzDrawerTest09.vue';
import PaneDzDrawerTest10 from './components/PaneDzDrawerTest10.vue';
</script>

<template>
  <v s="w-[100vw] h-[100vh]" col text="screen">
    <v s="w-grow h-16" text="navbar">
      <LayoutLogo />
      <v s="w-grow h-grow" text="App List"></v>
      <v s="w-16 h-grow" text="P1"></v>
      <v s="w-16 h-grow" text="P2"></v>
      <v s="w-16 h-grow" text="P3"></v>
      <v s="w-16 h-grow" text="P4"></v>
      <LayoutUserProfile />
    </v>
    <v s="w-grow h-16" text="Level 1 Menu"></v>
    <v s="w-grow h-grow" text="body">
      <v s="w-fit h-grow" col text="sider">
        <LayoutLogo />

        <v s="w-64 h-grow" text="menu"></v>
      </v>
      <v s="w-grow h-grow" col text="body">
        <v s="w-grow h-16" text="navbar">
          <LayoutLogo />
          <v s="w-grow h-grow" text="App List"></v>
          <v s="w-16 h-grow" text="P1"></v>
          <v s="w-16 h-grow" text="P2"></v>
          <v s="w-16 h-grow" text="P3"></v>
          <v s="w-16 h-grow" text="P4"></v>
          <LayoutUserProfile />
        </v>
        <LayoutRouteTag />

        <v s="w-grow h-16" text="test1">
          <v s="w-grow h-grow" text="DzOtherTest"></v>
          <PaneDzIconTest />
          <PaneDzBtnTest />
        </v>
        <v s="w-grow h-16" text="test1">
          <v s="w-grow h-grow" text="DzModalTest"></v>
          <PaneDzModalTest01 />
          <PaneDzModalTest02 />
          <PaneDzModalTest03 />
          <PaneDzModalTest04 />
          <PaneDzModalTest05 />
          <PaneDzModalTest06 />
          <PaneDzModalTest07 />
          <PaneDzModalTest08 />
          <PaneDzModalTest09 />
          <PaneDzModalTest10 />
        </v>
        <v s="w-grow h-16" text="test1">
          <v s="w-grow h-grow" text="DzDrawerTest"></v>
          <PaneDzDrawerTest01 />
          <PaneDzDrawerTest02 />
          <PaneDzDrawerTest03 />
          <PaneDzDrawerTest04 />
          <PaneDzDrawerTest05 />
          <PaneDzDrawerTest06 />
          <PaneDzDrawerTest07 />
          <PaneDzDrawerTest08 />
          <PaneDzDrawerTest09 />
          <PaneDzDrawerTest10 />
        </v>

        <v s="w-grow h-grow" text="body"></v>
      </v>
    </v>
  </v>
</template>
