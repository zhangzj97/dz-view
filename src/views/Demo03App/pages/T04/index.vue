<script setup lang="ts">
import PaneTool from './components/PaneTool/index.vue';
import { useTool } from './hooks/useTool';
const optionMap = {
  son: ['text', 'box', 'grow', 'full'],
};
const { handleChangeIndex, optionState, optionListState } = useTool({ optionMap });
</script>

<template>
  <div>The size of son element fill parent element</div>
  <div layout one flex-grow-0 class="w-16 h-16">
    <div wrapper col flex-grow-0 overflow class="w-auto h-auto" :class="['shrink-0']">
      <div pane></div>
    </div>
  </div>

  <div layout one flex-grow-0 class="w-16 h-16">
    <div wrapper col flex-grow-1 overflow class="w-auto h-auto" :class="['shrink-0']">
      <div pane></div>
    </div>
  </div>

  <div layout one flex-grow-0 class="w-16 h-16">
    <div wrapper col flex-grow-0 overflow class="w-full h-auto" :class="['shrink-0']">
      <div pane></div>
    </div>
  </div>

  <div>Bad : The size of wrapper is h-full , h-auto is better.</div>
  <div layout one flex-grow-0 class="w-16 h-16">
    <div wrapper col flex-grow-0 overflow class="w-full h-full" :class="['shrink-0']">
      <div pane></div>
    </div>
  </div>

  <div>The size of son element is less than parent element</div>
  <div layout one flex-grow-0 class="w-16 h-16">
    <div wrapper col flex-grow-0 overflow class="w-0 h-0">
      <div pane></div>
    </div>
  </div>
  <div layout one flex-grow-0 class="w-16 h-16">
    <div wrapper col flex-grow-0 overflow class="w-8 h-0">
      <div pane></div>
    </div>
  </div>
  <div layout one flex-grow-0 class="w-16 h-16">
    <div wrapper col flex-grow-0 overflow class="w-0 h-8">
      <div pane></div>
    </div>
  </div>
  <div layout one flex-grow-0 class="w-16 h-16">
    <div wrapper col flex-grow-0 overflow class="w-8 h-8">
      <div pane></div>
    </div>
  </div>

  <div>Rule[MUST]: The size of wrapper must be less than the size of layout.</div>
  <div layout one flex-grow-0 class="w-16 h-16">
    <div wrapper col flex-grow-0 overflow class="w-32 h-8" :class="['shrink-0']">
      <div pane></div>
    </div>
  </div>
  <div layout one flex-grow-0 class="w-16 h-16" :class="['translate-x-64']">
    <div wrapper col flex-grow-0 overflow class="w-8 h-32" :class="['shrink-0']">
      <div pane></div>
    </div>
  </div>
  <div layout one flex-grow-0 class="w-16 h-16">
    <div wrapper col flex-grow-0 overflow class="w-32 h-32" :class="['shrink-0']">
      <div pane></div>
    </div>
  </div>

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
</style>
