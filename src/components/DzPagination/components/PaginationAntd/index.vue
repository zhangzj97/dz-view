<script setup lang="ts">
defineProps<{
  current: number;
  total: number;
}>();

const paginationState = reactive({
  current: 0,
});

const emit = defineEmits<{
  (e: 'change', page: any, pageSize: any): void;
}>();

const hanlderChange = (page: any, pageSize: any): void => {
  emit('change', page, pageSize);
};
</script>

<template>
  <a-pagination v-model:current="paginationState.current" show-quick-jumper :total="total" @change="hanlderChange" />
</template>
