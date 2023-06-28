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

  list: [],

  map: {
    1: { id: '1', avatar: 'el:adjust-alt', title: 't1', idPath: '1' },
    2: {
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
    21: { id: '21', avatar: 'el:address-book', title: 't2-1', idPath: '2,21' },
    22: {
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
    221: {
      id: '221',
      avatar: 'el:address-book',
      title: 't2-2-1',
      idPath: '2,22,221',
    },
    222: {
      id: '222',
      avatar: 'el:address-book',
      title: 't2-2-2',
      idPath: '2,22,222',
    },
    3: { id: '3', avatar: 'el:adjust-alt', title: 't3', idPath: '3' },
    4: {
      id: '4',
      avatar: 'el:adjust-alt',
      title: 't4',
      idPath: '4',
      children: [
        { id: '41', avatar: 'el:address-book', title: 't4-1', idPath: '4,41' },
        { id: '42', avatar: 'el:address-book', title: 't4-2', idPath: '4,42' },
      ],
    },
    41: {
      id: '41',
      avatar: 'el:address-book',
      title: 't4-1',
      idPath: '4,41',
    },
    42: {
      id: '42',
      avatar: 'el:address-book',
      title: 't4-2',
      idPath: '4,42',
    },
  },

  active: {},
});

const menuState = reactive<any>({
  tree: testState.tree,

  map: testState.map,

  collapse: {},
});

const clickMenu = ({ id }: any) => {
  const item = menuState.map[id];
  const { idPath } = item;

  menuState.collapse = {};
  idPath.split(',').forEach((item: string) => {
    menuState.collapse[item] = true;
  });
};
</script>

<template>
  <v s="w-64 h-grow" col wrap="overflow-auto">
    <MenuLevel1
      v-for="(item, index) of menuState.tree"
      :key="index"
      :id="item.id"
      :avatar="item.avatar"
      :title="item.title"
      :collapse="!!menuState.collapse[item.id]"
      @clickMenu="clickMenu(item)"
    >
      <MenuLevel2
        v-for="(item2, index2) of item.children"
        :key="index2"
        :id="item2.id"
        :avatar="item2.avatar"
        :title="item2.title"
        :collapse="!!menuState.collapse[item2.id]"
        @clickMenu="clickMenu(item2)"
      >
        <MenuLevel3
          v-for="(item3, index3) of item2.children"
          :key="index3"
          :id="item3.id"
          :avatar="item3.avatar"
          :title="item3.title"
          :collapse="!!menuState.collapse[item3.id]"
          @clickMenu="clickMenu(item3)"
        />
      </MenuLevel2>
    </MenuLevel1>
    {{ menuState.collapse }}
    <v s="w-64 h-grow" space></v>
  </v>
</template>
