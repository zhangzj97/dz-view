<script setup lang="ts" name="TestScroller03">
import { useContainer } from './hooks/useContainer';
import { useBlock } from './hooks/useBlock';
const { containerClassNameState, handleChangeContainer } = useContainer();
const { blockClassNameState, handleChangeBlock } = useBlock();
</script>

<template>
  <dz-row row-item class="w-grow">
    <dz-row row-item class="h-10">
      <dz-row row-item h-fit class="overflow-auto bg-cyan-400">
        <dz-flex :class="[blockClassNameState.w, blockClassNameState.h]" class="bg-blue-400 bg-stripes-white" />
      </dz-row>
    </dz-row>
    <dz-row row-item class="h-0 h-grow">
      <dz-row row-item h-fit class="overflow-auto bg-cyan-400">
        <dz-flex :class="[blockClassNameState.w, blockClassNameState.h]" class="bg-blue-400 bg-stripes-white" />
      </dz-row>
    </dz-row>
    <dz-row row-item class="h-0 h-grow">
      <dz-row row-item h-fit class="overflow-auto h-grow bg-cyan-400">
        <dz-flex :class="[blockClassNameState.w, blockClassNameState.h]" class="bg-blue-400 bg-stripes-white" />
      </dz-row>
    </dz-row>
  </dz-row>
  <!-- 
  <dz-row class="h-grow">
    <dz-row-item class="w-16">
      <dz-row row-item h-fit class="h-0 overflow-auto h-grow bg-cyan-400">
        <dz-flex :class="[blockClassNameState.w, blockClassNameState.h]" class="bg-blue-400 bg-stripes-white" />
      </dz-row>
    </dz-row-item>
    <dz-row-item class="w-grow">
      <dz-row row-item h-fit class="h-0 overflow-auto h-grow bg-cyan-400">
        <dz-flex :class="[blockClassNameState.w, blockClassNameState.h]" class="bg-blue-400 bg-stripes-white" />
      </dz-row>
    </dz-row-item>
  </dz-row> -->

  <div class="absolute rounded-lg shadow-lg top-4 right-4 bg-cyan-300">
    <dz-flex class="flex-row justify-center h-full mx-8 my-2">
      <dz-icon class="w-8" @click="handleChangeContainer" icon="mdi:dice-1" />
      <dz-icon class="w-8" @click="handleChangeBlock" icon="mdi:dice-2" />
      <dz-icon class="w-8" @click="handleChangeContainer" icon="mdi:dice-3" />
      <dz-icon class="w-8" @click="handleChangeContainer" icon="mdi:dice-4" />
      <dz-icon class="w-8" @click="handleChangeContainer" icon="mdi:dice-5" />
      <dz-icon class="w-8" @click="handleChangeContainer" icon="mdi:dice-6" />
      <dz-icon class="w-8" @click="handleChangeContainer" icon="mdi:dice" />
    </dz-flex>

    <dz-flex class="justify-center h-full mx-8 my-2">
      <div>----- containerClassNameState -----</div>
      <div>index: {{ containerClassNameState.index }}</div>
      <div>____w: {{ containerClassNameState.w }}</div>
      <div>____h: {{ containerClassNameState.h }}</div>
    </dz-flex>

    <dz-flex class="justify-center h-full mx-8 my-2">
      <div>----- blockClassNameState -----</div>
      <div>index: {{ blockClassNameState.index }}</div>
      <div>____w: {{ blockClassNameState.w }}</div>
      <div>____h: {{ blockClassNameState.h }}</div>
    </dz-flex>
  </div>
</template>
