<script setup lang="ts">
import { useTestStyle } from './hooks/useTestStyle';
const { handleAddIndex, handleChangeIndex, testStyleState, classNameListState } = useTestStyle();
</script>

<template>
  <div class="flex flex-col w-full h-full bg-red-300">
    <div class="w-auto h-0 bg-green-100"></div>
    <div class="w-auto h-16 bg-green-200"></div>
    <div class="w-auto h-full bg-green-300"></div>
    <div class="w-auto bg-green-400 h-fit"></div>
    <div class="w-auto bg-green-500 h-max"></div>
    <div class="w-auto bg-green-600 h-min"></div>
  </div>

  <!-- Tool -->
  <div class="fixed flex flex-col p-2 bg-white rounded-lg shadow-lg opacity-50 top-2 right-2">
    <div class="flex flex-row h-24 w-96" v-for="(item, styleName) of classNameListState" :key="styleName">
      <div class="flex flex-col w-16">{{ styleName }}</div>
      <div class="flex flex-col w-80">
        <div class="flex flex-wrap gap-2 -flex-row">
          <div
            class="flex flex-col p-2 cursor-pointer"
            :class="[
              //
              testStyleState[styleName] !== item2 && 'bg-pink-300',
              testStyleState[styleName] === item2 && 'bg-pink-600',
            ]"
            v-for="(item2, index2) of classNameListState[styleName]"
            :key="index2"
            @click="handleChangeIndex(styleName, index2)"
          >
            <div class="text-white">{{ item2 }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
[row] {
  @apply flex-row flex-nowrap;
}

[col] {
  @apply flex-col flex-nowrap;
}

[grid] {
  @apply flex-row flex-wrap;
}
</style>
