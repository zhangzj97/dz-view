<script setup lang="ts" name="LayoutPage">
import Layout010101FixHeight from './components/Layout010101FixHeight/index.vue';
import Layout020101FixHeight from './components/Layout020101FixHeight/index.vue';
import Layout030101FixHeight from './components/Layout030101FixHeight/index.vue';

const layoutState = reactive<{
  rowList: any;
}>({
  rowList: [
    { h: 'h-32', children: [{ w: 'w-grow', component: () => Layout010101FixHeight }] },
    { h: 'h-32', children: [{ w: 'w-grow', component: () => Layout020101FixHeight }] },
    { h: 'h-32', children: [{ w: 'w-grow', component: () => Layout030101FixHeight }] },
  ],
});
</script>

<template>
  <div class="flex flex-col w-screen h-screen overflow-hidden bg-gray-100">
    <dz-row class="w-full" :class="[item.h]" v-for="(item, index) of layoutState.rowList" :key="index">
      <dz-row-item class="h-full" :class="[item2.w]" v-for="(item2, index2) of item.children" :key="index2">
        <component v-if="item2.component" :is="item2.component()" v-bind="item2.props" />
        <template v-else>
          <dz-row row-item class="w-full" :class="[item3.h]" v-for="(item3, index3) of item2.children" :key="index3">
            <slot v-if="item3.type === 'slot'"></slot>
            <!-- <dz-row row-item v-if="item3.type === 'slot'" class="h-0 overflow-auto scrollbar-hidden h-grow">
              <slot></slot>
            </dz-row> -->
            <component v-else :is="item3.component()" v-bind="item3.props" />
          </dz-row>
        </template>
      </dz-row-item>
    </dz-row>
  </div>

  <!-- single -->
  <dz-row>
    <dz-row-item><dz-flex></dz-flex> </dz-row-item>
  </dz-row>

  <dz-flex></dz-flex>

  <!-- single -->
  <dz-row row-item>
    <dz-flex></dz-flex>
  </dz-row>

  <dz-flex></dz-flex>

  <!-- multiple -->
  <dz-row>
    <dz-row-item>
      <dz-flex></dz-flex>
    </dz-row-item>
    <dz-row-item>
      <dz-flex></dz-flex>
    </dz-row-item>
  </dz-row>

  <dz-row>
    <dz-row-item>
      <dz-flex></dz-flex>
    </dz-row-item>
    <dz-row-item>
      <dz-flex></dz-flex>
    </dz-row-item>
  </dz-row>

  <!-- multiple -->
  <dz-row row-item>
    <dz-row row-item>
      <dz-flex></dz-flex>
    </dz-row>
    <dz-row row-item>
      <dz-flex></dz-flex>
    </dz-row>
  </dz-row>

  <dz-row row-item>
    <dz-flex></dz-flex>
    <dz-flex></dz-flex>
  </dz-row>

  <!-- single -->
  <dz-flex row w-12 h-12>
    <dz-flex></dz-flex>
  </dz-flex>

  <dz-flex w-12 h-12>
    <dz-flex-wrapper w-full h-full>
      <dz-flex></dz-flex>
    </dz-flex-wrapper>
  </dz-flex>

  <!-- multiple -->
  <dz-flex row w-full h-12>
    <dz-flex w-12></dz-flex>
    <dz-flex w-12></dz-flex>
    <dz-flex w-12></dz-flex>
    <dz-flex w-12></dz-flex>
  </dz-flex>

  <!-- multiple -->
  <dz-flex row w-full h-12>
    <dz-flex-wrapper w-full h-full>
      <dz-flex-wrapper w-12 h-full>
        <dz-flex></dz-flex>
      </dz-flex-wrapper>
      <dz-flex-wrapper w-12 h-full>
        <dz-flex></dz-flex>
      </dz-flex-wrapper>
      <dz-flex-wrapper w-12 h-full>
        <dz-flex></dz-flex>
      </dz-flex-wrapper>
      <dz-flex-wrapper w-12 h-full>
        <dz-flex></dz-flex>
      </dz-flex-wrapper>
    </dz-flex-wrapper>
  </dz-flex>

  <dz-flex col w-96 h-full>
    <dz-flex h-12></dz-flex>
    <dz-flex h-12></dz-flex>
    <dz-flex h-12></dz-flex>
    <dz-flex row h-12>
      <dz-flex w-12></dz-flex>
      <dz-flex w-12></dz-flex>
      <dz-flex row w-12>
        <dz-flex w-12></dz-flex>
        <dz-flex w-12></dz-flex>
        <dz-flex col w-12>
          <dz-flex h-12></dz-flex>
          <dz-flex h-12></dz-flex>
          <dz-flex h-12></dz-flex>
        </dz-flex>
      </dz-flex>
    </dz-flex>
  </dz-flex>

  <dz-flex col w-96 h-full>
    <dz-flex-wrapper w-full h-12>
      <dz-flex></dz-flex>
    </dz-flex-wrapper>
    <dz-flex-wrapper w-full h-12>
      <dz-flex></dz-flex>
    </dz-flex-wrapper>
    <dz-flex-wrapper w-full h-12>
      <dz-flex></dz-flex>
    </dz-flex-wrapper>
    <dz-flex-wrapper w-full h-12>
      <dz-flex></dz-flex>
    </dz-flex-wrapper>
  </dz-flex>
</template>
