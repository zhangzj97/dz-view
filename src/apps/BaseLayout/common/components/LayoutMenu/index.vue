<script setup lang="ts">
import { reactive } from 'vue';
import MenuLevel1 from './components/MenuLevel1.vue';
import MenuLevel2 from './components/MenuLevel2.vue';
import MenuLevel3 from './components/MenuLevel3.vue';

const testState = reactive({
  tree: [
    { id: '1', avatar: 'el:adjust-alt', title: 't1', idPath: '1' },
    {
      id: '2',
      avatar: 'el:adjust-alt',
      title: 't2',
      idPath: '2',
      children: [
        { id: '21', avatar: 'el:address-book', title: 't2-1', idPath: '2,21' },
        {
          id: '22',
          avatar: 'el:address-book',
          title: 't2-2',
          idPath: '2,22',
          children: [
            {
              id: '221',
              avatar: 'el:address-book',
              title: 't2-2-1',
              idPath: '2,22,221',
            },
            {
              id: '222',
              avatar: 'el:address-book',
              title: 't2-2-2',
              idPath: '2,22,222',
            },
          ],
        },
      ],
    },
    { id: '3', avatar: 'el:adjust-alt', title: 't3', idPath: '3' },
    {
      id: '4',
      avatar: 'el:adjust-alt',
      title: 't4',
      idPath: '4',
      children: [
        { id: '41', avatar: 'el:address-book', title: 't4-1', idPath: '4,41' },
        { id: '42', avatar: 'el:address-book', title: 't4-2', idPath: '4,42' },
      ],
    },
  ],
});

const menuState = reactive({
  tree: testState.tree,
});
</script>

<template>
  <v s="w-64 h-grow" col wrap="overflow-auto">
    <template v-for="(item, index) of menuState.tree" :key="index">
      <MenuLevel1 :avatar="item.avatar" :title="item.title">
        <template v-for="(item2, index2) of item.children" :key="index2">
          <MenuLevel2 :avatar="item2.avatar" :title="item2.title">
            <template v-for="(item3, index3) of item2.children" :key="index3">
              <MenuLevel3 :avatar="item3.avatar" :title="item3.title" />
            </template>
          </MenuLevel2>
        </template>
      </MenuLevel1>
    </template>

    <v s="w-64 h-grow" space></v>
  </v>
</template>
