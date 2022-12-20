<script setup lang="ts" name="PaneSearch">
import type { SearchModel } from '../../types';

const props = defineProps<{
  searchModel: SearchModel;
}>();

const searchState: SearchModel = reactive({ keyword: '' });
const refreshSearchState = (model: SearchModel): void => {
  searchState.keyword = model.keyword;
};

const emit = defineEmits<{
  (e: 'searchInput', ev: Event, model: SearchModel): void;
  (e: 'searchSubmit', ev: Event, model: SearchModel): void;
}>();

const handleInput = (ev: Event): void => {
  searchState.keyword = (ev.target as HTMLInputElement).value;
  emit('searchInput', ev, searchState);
};

const handleSubmit = (ev: Event): void => {
  searchState.keyword = String(searchState.keyword);
  emit('searchSubmit', ev, searchState);
};

watch(
  () => props.searchModel.keyword,
  () => {
    searchState.keyword = props.searchModel.keyword;
  }
);

onMounted(() => {
  refreshSearchState(props.searchModel);
});
</script>

<template>
  <div class="relative flex">
    <div class="flex h-8">
      <input type="text" :value="searchState.keyword" @input="handleInput" />
      <div class="w-16 h-8 bg-blue-300 border rounded shadow cursor-pointer" @click="handleSubmit">
        <div>查询</div>
      </div>
    </div>
  </div>
</template>
