<script setup lang="ts">
const styleState = reactive<{
  hidden: boolean;
}>({
  hidden: false,
});
const changeWidth = () => {
  styleState.hidden = !styleState.hidden;
};
</script>

<template>
  <DzFlex v-if="!styleState.hidden" class="flex-grow" w="384px" @click="changeWidth" />
  <DzFlex v-else class="flex-grow" w="10px" @click="changeWidth" />
</template>
