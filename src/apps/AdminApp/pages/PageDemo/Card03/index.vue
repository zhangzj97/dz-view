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
    'max-w-[25%]',
  ],
  itemMinW: [
    'itemMinW',
    'w-fit',
    'w-grow',
    'min-w-[300px]',
    'min-w-[30vw]',
    'min-w-[80vw]',
    'min-w-[110vw]',
  ],

  itemH: [
    'itemH',
    'h-fit',
    'h-grow',
    'h-[30vh]',
    'h-[80vh]',
    'h-[110vh]',
    'h-[25%]',
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
      v-for="(item, index) of 3"
      :key="index"
      :s="`${value('itemW')} ${value('itemH')}`"
      :w="`${value('itemMinW')} ${value('itemMaxW')}`"
      trans
      :text="'be' + index"
    />

    <v
      :s="`w-fit ${value('itemH')}`"
      :w="`${value('itemMinW')} ${value('itemMaxW')} overflow-auto`"
      trans
    >
      <v s="w-[60vw] h-16" text="w-fit"></v>
    </v>

    <v
      v-for="(item, index) of 3"
      :key="index"
      :s="`${value('itemW')} ${value('itemH')}`"
      :w="`${value('itemMinW')} ${value('itemMaxW')}`"
      trans
      :text="'af' + index"
    />

    <v
      :s="`w-grow ${value('itemH')}`"
      :w="`${value('itemMinW')} ${value('itemMaxW')} overflow-auto`"
      trans
    >
      <v s="w-[60vw] h-16" text="w-grow"></v>
    </v>

    <v
      v-for="(item, index) of 5"
      :key="index"
      :s="`${value('itemW')} ${value('itemH')}`"
      :w="`${value('itemMinW')} ${value('itemMaxW')}`"
      trans
      :text="'af' + index"
    />

    <!-- <v
      :s="`${value('itemW')} ${value('itemH')}`"
      :w="` ${value('itemMaxW')}`"
      :style="{ flexGrow: '2', minWidth: '600px' }"
      trans
    >
      <v :s="`w-fit h-fit`" :w="`overflow-auto`" class="ml-auto" trans>
        <v-space></v-space>
        <v s="w-[30vw] h-16" text="last"></v>
      </v>
    </v> -->

    <v s="w-grow h-fit" w="min-w-[50%] max-w-[100%]" text="1"> </v>
    <v s="w-fit h-0" class="" trans>
      <v
        :s="`w-fit h-fit`"
        :w="`overflow-visible`"
        class="top-0 right-0"
        :style="{
          position: 'absolute',
        }"
        trans
      >
        <v-space></v-space>
        <v s="w-[30vw] h-16" text="last"></v>
      </v>
    </v>
  </v>
</template>
