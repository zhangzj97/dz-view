<script setup lang="ts">
import { reactive } from 'vue';

const testState = reactive({
  list: ['count', 'itemW', 'itemH', 'itemMaxW', 'itemMinW'],
  state: {},

  count: ['10', '20', '100', '1000'],

  itemW: ['itemW', 'w-fit', 'w-grow', 'w-[30vw]', 'w-[80vw]', 'w-[110vw]'],
  itemMaxW: [
    'itemMaxW',
    'w-fit',
    'w-grow',
    'max-w-[30vw]',
    'max-w-[80vw]',
    'max-w-[110vw]',
  ],
  itemMinW: [
    'itemMinW',
    'w-fit',
    'w-grow',
    'min-w-[30vw]',
    'min-w-[80vw]',
    'min-w-[110vw]',
  ],

  itemH: ['itemH', 'h-fit', 'h-grow', 'h-[30vh]', 'h-[80vh]', 'h-[110vh]'],
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
  <v s="w-grow h-grow" w="overflow-auto scrollbar" grid text="Card01">
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

    <v
      v-for="(item, index) of Number(value('count') || 1)"
      :key="index"
      :s="`${value('itemW')} ${value('itemH')}`"
      :w="`${value('itemMinW')} ${value('itemMaxW')}`"
      trans
      text="item"
    />
  </v>
</template>
