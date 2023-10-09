<script setup lang="ts">
defineProps<{
  id: string;
  avatar: string;
  title: string;

  collapse: boolean;
  active: boolean;

  showRightIcon: boolean;

  iconMode: boolean;
}>();

const emit = defineEmits<{
  (e: 'clickMenu', value: any): void;
}>();

const clickMenu = (item: any) => {
  emit('clickMenu', item);
};
</script>

<template>
  <v s="w-fit h-10" pointer class="bg-gray-400 border-b-[1px] border-gray-300">
    <v s="w-fit h-fit" @click="clickMenu({ id })">
      <v-space s="w-4 h-grow" />
      <v-icon v="10-50" t="text-gray-300" :icon="avatar" />
      <v
        s="w-[200px] h-10"
        w="overflow-hidden"
        trans
        :class="[
          //
          // iconMode ? 'max-w-[0px]' : 'max-w-[1000vw]',
        ]"
      >
        <v-space s="w-2 h-grow" />
        <v s="w-grow h-10">
          <v-text t="text-white text-base" :text="title" />
          <v-space s="w-grow h-10" />
        </v>
        <v s="w-10 h-grow" :class="[collapse ? 'rotate-90' : '']" trans>
          <v-icon v-if="showRightIcon" v="10-50" t="text-gray-200" icon="el:chevron-right" />
        </v>
      </v>
    </v>
    <v
      v-if="iconMode"
      absolute="tr"
      s="w-64 h-fit"
      class="origin-left translate-x-[272px]"
      trans
      :class="[!collapse ? 'scale-0' : '']"
      col
    >
      <slot></slot>
    </v>
  </v>
  <v
    v-if="!iconMode"
    col
    s="w-64 h-fit"
    w="overflow-hidden"
    trans
    :class="[!collapse ? 'max-h-[0px]' : 'max-h-[1000vh]']"
  >
    <slot></slot>
  </v>
</template>
