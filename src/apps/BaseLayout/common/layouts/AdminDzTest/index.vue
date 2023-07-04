<script setup lang="ts">
import LayoutMenu from '@/apps/BaseLayout/common/components/LayoutMenu/index.vue';
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

import PaneDzIconTest01 from './components/PaneDzIconTest01.vue';
import PaneDzIconTest02 from './components/PaneDzIconTest02.vue';
import PaneDzIconTest03 from './components/PaneDzIconTest03.vue';
import PaneDzIconTest04 from './components/PaneDzIconTest04.vue';
import PaneDzIconTest05 from './components/PaneDzIconTest05.vue';
import PaneDzIconTest06 from './components/PaneDzIconTest06.vue';
import PaneDzIconTest07 from './components/PaneDzIconTest07.vue';
import PaneDzIconTest08 from './components/PaneDzIconTest08.vue';
import PaneDzIconTest09 from './components/PaneDzIconTest09.vue';
import PaneDzIconTest10 from './components/PaneDzIconTest10.vue';

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
  <v-desc s="w-[100vw] h-[100vh]" col text="screen">
    <v-desc s="w-grow h-16" text="navbar">
      <v-desc s="w-64 h-grow" text="Logo">
        <v-desc s="w-16 h-16" text="Icon"></v-desc>
        <v-desc s="w-grow h-16" text="LogoTitle"></v-desc>
      </v-desc>
      <v-desc s="w-grow h-grow" text="App List"></v-desc>
      <v-desc s="w-16 h-grow" text="P1"></v-desc>
      <v-desc s="w-16 h-grow" text="P2"></v-desc>
      <v-desc s="w-16 h-grow" text="P3"></v-desc>
      <v-desc s="w-16 h-grow" text="P4"></v-desc>
      <v-desc s="w-48 h-grow" text="Profile">
        <v-desc s="w-16 h-grow" text="Avatar"></v-desc>
        <v-desc s="w-grow h-grow" col text="Info">
          <v-desc s="w-grow h-grow" text="space"></v-desc>
          <v-desc s="w-grow h-fit" text="Nickname"></v-desc>
          <v-desc s="w-grow h-fit" text="Status"></v-desc>
          <v-desc s="w-grow h-grow" text="space"></v-desc>
        </v-desc>
      </v-desc>
    </v-desc>
    <v-desc s="w-grow h-16" text="Level 1 Menu"></v-desc>
    <v-desc s="w-grow h-grow" text="body">
      <v-desc s="w-fit h-grow" col text="sider">
        <v-desc s="w-grow h-16" text="Logo">
          <v-desc s="w-16 h-16" text="Icon"></v-desc>
          <v-desc s="w-grow h-16" text="LogoTitle"></v-desc>
        </v-desc>
        <v-desc s="w-64 h-grow" text="menu"></v-desc>
      </v-desc>
      <v-desc s="w-grow h-grow" col text="body">
        <v-desc s="w-grow h-16" text="navbar">
          <v-desc s="w-64 h-grow" text="Logo">
            <v-desc s="w-16 h-16" text="Icon"></v-desc>
            <v-desc s="w-grow h-16" text="LogoTitle"></v-desc>
          </v-desc>
          <v-desc s="w-grow h-grow" text="App List"></v-desc>
          <v-desc s="w-16 h-grow" text="P1"></v-desc>
          <v-desc s="w-16 h-grow" text="P2"></v-desc>
          <v-desc s="w-16 h-grow" text="P3"></v-desc>
          <v-desc s="w-16 h-grow" text="P4"></v-desc>
          <v-desc s="w-48 h-grow" text="Profile">
            <v-desc s="w-16 h-grow" text="Avatar"></v-desc>
            <v-desc s="w-grow h-grow" col text="Info">
              <v-desc s="w-grow h-grow" text="space"></v-desc>
              <v-desc s="w-grow h-fit" text="Nickname"></v-desc>
              <v-desc s="w-grow h-fit" text="Status"></v-desc>
              <v-desc s="w-grow h-grow" text="space"></v-desc>
            </v-desc>
          </v-desc>
        </v-desc>
        <v-desc s="w-grow h-12" text="routeTag">
          <v-desc s="w-grow h-12" w="overflow-auto" text="routeList">
            <v-desc s="w-fit h-12" text="tag">
              <v-desc s="w-12 h-12" text="icon"></v-desc>
              <v-desc s="w-fit h-12" text="title"></v-desc>
              <v-desc s="w-12 h-12" text="closeIcon"></v-desc>
            </v-desc>
          </v-desc>
          <v-desc s="w-12 h-12" text="refresh"></v-desc>
          <v-desc s="w-12 h-12" text="closeAll"></v-desc>
        </v-desc>
        <v-desc s="w-grow h-16" text="test1">
          <v-desc s="w-grow h-grow" text="DzIconTest"></v-desc>
          <PaneDzIconTest01 />
          <PaneDzIconTest02 />
          <PaneDzIconTest03 />
          <PaneDzIconTest04 />
          <PaneDzIconTest05 />
          <PaneDzIconTest06 />
          <PaneDzIconTest07 />
          <PaneDzIconTest08 />
          <PaneDzIconTest09 />
          <PaneDzIconTest10 />
        </v-desc>
        <v-desc s="w-grow h-16" text="test1">
          <v-desc s="w-grow h-grow" text="DzModalTest"></v-desc>
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
        </v-desc>
        <v-desc s="w-grow h-16" text="test1">
          <v-desc s="w-grow h-grow" text="DzModalTest"></v-desc>
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
        </v-desc>
        <v-desc s="w-grow h-grow" text="body"></v-desc>
      </v-desc>
    </v-desc>
  </v-desc>
</template>
