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
      <v s="w-4 h-grow" space />
      <dz-icon
        s="w-10 h-10"
        t="text-gray-300"
        class="scale-50"
        :icon="avatar"
      />
      <v
        s="w-[200px] h-10"
        w="overflow-hidden"
        class="transition-all"
        :class="[
          //
          // iconMode ? 'max-w-[0px]' : 'max-w-[1000vw]',
        ]"
      >
        <v s="w-2 h-grow" space />
        <v s="w-grow h-10">
          <dz-text t="text-white text-base">{{ title }}</dz-text>
          <v s="w-grow h-10" space />
        </v>
        <dz-icon
          v-if="showRightIcon"
          s="w-10 h-10"
          t="text-gray-200"
          class="transition-all scale-50"
          :class="[collapse ? 'rotate-90' : '']"
          icon="el:chevron-right"
        />
      </v>
    </v>
    <v
      v-if="iconMode"
      absolute
      s="w-64 h-fit"
      class="transition-all origin-left translate-x-[272px]"
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
    class="transition-all"
    :class="[!collapse ? 'max-h-[0px]' : 'max-h-[1000vh]']"
  >
    <slot></slot>
  </v>
</template>
