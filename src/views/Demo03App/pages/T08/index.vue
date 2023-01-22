<script setup lang="ts">
import PaneTool from './components/PaneTool/index.vue';
import PaneT1 from './components/PaneT1/index.vue';
import { useTool } from './hooks/useTool';
const optionMap = {
  t1: ['1', '2', '3', '4', '5', '6'],
  t2: ['1', '2'],
  t3: ['1', '2'],
  t4: ['1', '2'],
  t5: ['1', '2'],
  t6: ['1', '2'],
};
const { handleChangeIndex, optionState, optionListState } = useTool({ optionMap });
</script>

<template>
  <dz-view layout="col" grow="0" size="w-full h-full">
    <PaneT1 :optionState="optionState" />

    <!-- 2. 两个并列的 共用 一个框 -->
    <!-- <PaneT1 :optionState="optionState" /> -->
    <dz-view layout="one" grow="0" size="w-auto h-16">
      <dz-view layout="row" grow="0" size="w-auto h-full">
        <dz-view layout="one" grow="1" size="w-0 h-full">
          <div
            pane
            class="transition-all"
            :class="[
              optionState.t1 === '1' && 'w-0 h-0',
              optionState.t1 === '2' && 'w-auto h-full',
              optionState.t1 === '3' && 'w-[2000px] h-full',
              optionState.t1 === '4' && 'w-[2000px] h-[300px]',
              optionState.t1 === '5' && 'w-[2000px] h-[300px] shrink-0 ',
              optionState.t1 === '6' && 'w-0 h-0',
            ]"
          >
            一个普通的 Banner
          </div>
        </dz-view>

        <dz-view layout="one" grow="0" size="w-16 h-full">
          <div pane class="transition-all">普通</div>
        </dz-view>
        <dz-view layout="one" grow="0" size="w-16 h-32">
          <div pane class="transition-all">高个子</div>
        </dz-view>
      </dz-view>
    </dz-view>
    <!-- End -->
  </dz-view>

  <PaneTool @handleOptionClick="handleChangeIndex" :optionState="optionState" :optionListState="optionListState" />
</template>

<style>
[flex-grow-1] {
  @apply flex-grow;
}

[flex-grow-0] {
  @apply flex-grow-0;
}
[overflow] {
  @apply overflow-auto;
}
[col] {
  @apply flex flex-col flex-nowrap;
}
[one] {
  @apply flex flex-row flex-wrap;
}
[grid] {
  @apply flex flex-row flex-wrap;
}
[row] {
  @apply flex flex-row flex-nowrap;
}

[layout] {
  @apply border-2 border-green-600;
}

[wrapper] {
  @apply border-2 border-red-600;
}

[pane] {
  @apply border-2 border-blue-300;
}
</style>
