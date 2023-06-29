<script setup lang="ts">
import RouteTag from './components/RouteTag.vue';
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
              children: [
                {
                  id: '2221',
                  avatar: 'el:address-book',
                  title: 't2-2-2-1',
                  idPath: '2,22,222,2221',
                },
              ],
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

  list: [
    { id: '1', avatar: 'el:adjust-alt', title: 't1', idPath: '1' },
    {
      id: '2',
      avatar: 'el:adjust-alt',
      title: 't2',
      idPath: '2',
      children: [
        {
          id: '21',
          avatar: 'el:address-book',
          title: 't2-1',
          idPath: '2,21',
        },
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
    {
      id: '21',
      avatar: 'el:address-book',
      title: 't2-1',
      idPath: '2,21',
    },
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
    {
      id: '2221',
      avatar: 'el:address-book',
      title: 't2-2-2-1',
      idPath: '2,22,222,2221',
    },
    { id: '3', avatar: 'el:adjust-alt', title: 't3', idPath: '3' },
    {
      id: '4',
      avatar: 'el:adjust-alt',
      title: 't4',
      idPath: '4',
      children: [
        {
          id: '41',
          avatar: 'el:address-book',
          title: 't4-1',
          idPath: '4,41',
        },
        {
          id: '42',
          avatar: 'el:address-book',
          title: 't4-2',
          idPath: '4,42',
        },
      ],
    },
    {
      id: '41',
      avatar: 'el:address-book',
      title: 't4-1',
      idPath: '4,41',
    },
    {
      id: '42',
      avatar: 'el:address-book',
      title: 't4-2',
      idPath: '4,42',
    },
  ],

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
    2221: {
      id: '2221',
      avatar: 'el:address-book',
      title: 't2-2-2-1',
      idPath: '2,22,222,2221',
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
});

const routeTagState = reactive<any>({
  tree: testState.tree,

  list: testState.list,

  map: testState.map,

  collapse: {},

  showList: [],

  active: {},
});

const closeRouteTag = ({ id }: any) => {
  routeTagState.showList = routeTagState.showList.filter(
    (item: any) => item != id
  );
};

const clickRouteTag = ({ id }: any) => {
  const item = routeTagState.map(id);
  const { path } = item;
};

const closeAll = () => {
  routeTagState.showList = [2, 3];
};

const showList = computed(() => {
  return routeTagState.showList.map((item: any) => routeTagState.map[item]);
});
</script>

<template>
  <v s="w-grow h-8" class="shadow-lg">
    <v s="w-grow h-8" w="overflow-auto">
      <v s="w-0 h-8" space />
      <RouteTag
        v-for="(item, index) of showList"
        class="scale-90"
        :key="index"
        :id="item.id"
        :avatar="item.avatar"
        :title="item.title"
        :active="!!routeTagState.active[item.id]"
        :showRightIcon="item.children?.length >= 0"
        @clickRouteTag="clickRouteTag(item)"
        @closeRouteTag="closeRouteTag(item)"
      />
    </v>
    <v s="w-fit h-8">
      <dz-icon
        s="w-8 h-8"
        class="scale-75"
        hover="hover:opacity-80"
        pointer
        icon="carbon:close-outline"
        @click="closeAll"
      />
    </v>
  </v>
</template>
