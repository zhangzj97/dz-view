<script setup lang="ts">
defineProps<{
  optionListState: any;
  optionState: any;
}>();

const emit = defineEmits<{
  (e: 'handleOptionClick', key: any, index2: any): void;
}>();

const handleOptionClick = (key: any, index2: any) => {
  emit('handleOptionClick', key, index2);
};
</script>

<template>
  <div class="fixed flex flex-col p-2 bg-white rounded-lg shadow-lg opacity-50 top-2 right-2">
    <div class="flex flex-row h-24 w-96" v-for="(item, key) of optionListState" :key="key">
      <div class="flex flex-col w-16">{{ key }}</div>
      <div class="flex flex-col w-80">
        <div class="flex flex-wrap gap-2 -flex-row">
          <div
            class="flex flex-col p-2 cursor-pointer"
            :class="[
              //
              optionState[key] !== item2 && 'bg-pink-300',
              optionState[key] === item2 && 'bg-pink-600',
            ]"
            v-for="(item2, index2) of optionListState[key]"
            :key="index2"
            @click="handleOptionClick(key, index2)"
          >
            <div class="text-white">{{ item2 }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
