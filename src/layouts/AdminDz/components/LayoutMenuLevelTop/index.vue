<script setup lang="ts">
const { getState } = useService();

const { menuState } = getState('Dz/Route');

const clickMenu = ({ id }: any) => {
  if (menuState.levelTopMenuId === id) {
    menuState.levelTopMode = false;
    menuState.levelTopMenuId = '';
  } else {
    menuState.levelTopMode = true;
    menuState.levelTopMenuId = id;
  }
};
</script>

<template>
  <v s="w-grow h-grow">
    <v s="w-fit h-grow">
      <v
        v-for="(item, index) of menuState.tree"
        :key="index"
        s="w-fit h-grow"
        v="mouse-gray"
        :class="[menuState.levelTopMenuId === item.id && 'border-blue-500 border-b-2']"
        trans="hover:border-blue-500 hover:border-b-2"
        @click="clickMenu(item)"
      >
        <v-space s="w-2 h-grow" />
        <v-icon v="8-50" :icon="item.avatar" />
        <v-text :text="item.title" />
        <v-space s="w-4 h-grow" />
      </v>
    </v>
  </v>
</template>
