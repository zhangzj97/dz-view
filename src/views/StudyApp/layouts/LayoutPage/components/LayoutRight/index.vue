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
  <FlexContainer v-if="!styleState.hidden" class="flex-grow" w="384px" @click="changeWidth" />
  <FlexContainer v-else class="flex-grow" w="10px" @click="changeWidth" />
</template>
