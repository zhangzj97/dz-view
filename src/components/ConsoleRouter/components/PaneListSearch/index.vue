<script setup lang="ts" name="PaneListAll">
import type { RouteOption } from '../../types';

const props = defineProps<{
  list: RouteOption[];
  total: number;
}>();

const emit = defineEmits<{
  (e: 'clickListItem', ev: Event, item: RouteOption): void;
  (e: 'remove', item: RouteOption): void;
  (e: 'pintop', item: RouteOption): void;
}>();

const handleClick = (ev: Event, item: RouteOption): void => {
  emit('clickListItem', ev, item);
};

const handleRemove = (item: RouteOption): void => {
  emit('remove', item);
};

const handlePintop = (item: RouteOption): void => {
  emit('pintop', item);
};
</script>

<template>
  <div class="relative flex">
    <div class="relative flex flex-col">
      <div class="flex items-center gap-2" :class="['mx-2 my-1']">
        <div class="text-xs text-gray-600">Total:</div>
        <div class="">{{ props.total }}</div>
      </div>
      <template v-for="(item, index) of props.list" :key="index">
        <div v-if="item.disabled" class="flex items-center" :class="['mx-2 my-1']">
          <div class="flex flex-1 gap-2 px-2 py-1 transition-all bg-gray-200 rounded-sm shadow cursor-not-allowed hover:shadow-xl hover:bg-gray-300">
            <div class="text-gray-400">{{ item.title }}</div>
          </div>
        </div>
        <div v-else-if="!item.disabled" class="flex items-center" :class="['mx-2 my-1']" @click="handleClick($event, item)">
          <div class="relative flex flex-1 gap-2 px-2 py-1 transition-all bg-pink-200 rounded-sm shadow cursor-pointer hover:shadow-xl hover:bg-pink-300 hover:translate-x-1 hover:translate-y-1">
            <div>{{ item.title }}</div>
            <div class="absolute w-4 h-4 transition-all right-2" @click="handleRemove(item)">X</div>
            <div class="absolute w-4 h-4 transition-all right-6" @click="handlePintop(item)">T</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
