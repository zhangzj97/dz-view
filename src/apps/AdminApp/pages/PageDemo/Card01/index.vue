<script setup lang="ts">
import { reactive } from 'vue';

const testState = reactive({
  list: ['direction', 'isGrid', 'mainW', 'mainH', 'siblingW', 'siblingH'],
  state: {},
  direction: ['col', 'row'],

  isGrid: ['grid', ''],

  mainW: ['mainW', 'w-fit', 'w-grow', 'w-[30vw]', 'w-[80vw]', 'w-[110vw]'],

  mainH: ['mainH', 'h-fit', 'h-grow', 'h-[30vh]', 'h-[80vh]', 'h-[110vh]'],

  siblingW: [
    'siblingW',
    'w-fit',
    'w-grow',
    'w-[30vw]',
    'w-[80vw]',
    'w-[110vw]',
  ],

  siblingH: [
    'siblingH',
    'h-fit',
    'h-grow',
    'h-[30vh]',
    'h-[80vh]',
    'h-[110vh]',
  ],
});

const list = computed(() => test => {
  return testState[test];
});

const value = computed(() => test => {
  return testState.state[test];
});

const changeValue = (test, value) => {
  testState.state[test] = value;
};
</script>

<template>
  <v
    s="w-grow h-grow"
    w="overflow-auto scrollbar"
    :col="value('layout') === 'col'"
    :grid="value('isGrid') === 'grid'"
    text="Card01"
  >
    <v s="w-grow h-fit" w="gap-2" col class="fixed top-24 z-[99]">
      <v
        v-for="(item, index) of testState.list"
        :key="index"
        s="w-grow h-fit"
        w="gap-2"
      >
        <dz-btn
          v-for="(item2, index2) of list(item)"
          :key="index2"
          :title="item2"
          :type="value(item) === item2 ? 'primary' : 'secondary'"
          @click="changeValue(item, item2)"
        />
      </v>
    </v>

    <v :s="`${value('siblingW')} ${value('siblingW')}`" trans text="sibling" />
    <v :s="`${value('mainW')} ${value('mainH')}`" trans text="main" />
  </v>
</template>
