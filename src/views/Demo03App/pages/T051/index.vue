<script setup lang="ts">
import PaneTool from './components/PaneTool/index.vue';
import { useTool } from './hooks/useTool';
const optionMap = {
  t1: ['1', '2'],
  t2: ['1', '2'],
  t3: ['1', '2'],
  t4: ['1', '2'],
  t5: ['1', '2'],
  t6: ['1', '2'],
};
const { handleChangeIndex, optionState, optionListState } = useTool({ optionMap });
</script>

<template>
  <div layout one flex-grow-0 class="w-auto h-16">
    <div wrapper col flex-grow-1 class="w-0 h-full">
      <div pane flex-grow-0 class="w-auto h-full">1 one</div>
    </div>
  </div>

  <div layout one flex-grow-0 class="w-auto h-16">
    <div wrapper col flex-grow-1 class="w-0 h-full" overflow>
      <div pane flex-grow-0 class="w-[2000px] h-full">1.1 overflow-x</div>
    </div>
  </div>

  <div layout one flex-grow-0 class="w-auto h-16">
    <div wrapper col flex-grow-1 class="w-0 h-full" overflow>
      <div pane flex-grow-0 class="w-auto h-[100px] shrink-0">1.2 overflow-y</div>
    </div>
  </div>

  <div layout one flex-grow-0 class="w-auto h-16">
    <div wrapper col flex-grow-1 class="w-0 h-full" overflow>
      <div pane flex-grow-0 class="w-[2000px] h-[100px] shrink-0">1.3 overflow-xy</div>
    </div>
  </div>

  <div layout one flex-grow-0 class="w-auto h-16">
    <div wrapper col flex-grow-1 class="w-0 h-full">
      <div layout one flex-grow-0 class="w-auto h-full">
        <div wrapper col flex-grow-1 class="w-0 h-full" overflow>
          <div pane flex-grow-0 class="w-[2000px] h-[100px] shrink-0">1.4 demo overflow-xy</div>
        </div>
      </div>
    </div>
  </div>

  <div layout row flex-grow-0 class="w-auto h-16">
    <div wrapper col flex-grow-0 class="w-64 h-full">
      <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
    </div>
    <div wrapper col flex-grow-1 class="w-0 h-full">
      <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
    </div>
    <div wrapper col flex-grow-1 class="w-0 h-full">
      <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
    </div>
    <div wrapper col flex-grow-0 class="w-64 h-full">
      <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
    </div>
  </div>

  <div layout row flex-grow-0 class="w-auto h-16">
    <div wrapper col flex-grow-0 class="w-64 h-full">
      <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
    </div>
    <div wrapper col flex-grow-1 class="w-0 h-full">
      <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
    </div>
    <div wrapper col flex-grow-1 class="w-0 h-full">
      <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
    </div>
    <div wrapper col flex-grow-0 class="w-64 h-full">
      <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
    </div>
  </div>

  <div layout one flex-grow-0 class="w-auto h-16">
    <div wrapper col flex-grow-1 class="w-0 h-full">
      <div layout one flex-grow-0 class="w-auto h-full">
        <div wrapper col flex-grow-1 class="w-0 h-full" overflow>
          <!-- s -->
          <div layout row flex-grow-0 class="w-[2000px] h-32 shrink-0">
            <div wrapper col flex-grow-0 class="w-64 h-full">
              <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
            </div>
            <div wrapper col flex-grow-0 class="w-64 h-full">
              <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
            </div>
            <div wrapper col flex-grow-1 class="w-0 h-full">
              <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
            </div>
            <div wrapper col flex-grow-1 class="w-0 h-full">
              <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
            </div>
            <div wrapper col flex-grow-0 class="w-64 h-full">
              <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
            </div>
          </div>
          <!-- s -->
        </div>
      </div>
    </div>
  </div>

  <div layout row flex-grow-0 class="w-auto h-16">
    <div wrapper col flex-grow-0 overflow class="w-64 h-full">
      <div pane flex-grow-0 class="h-full w-[2000px]">2 row 64</div>
    </div>
    <div wrapper col flex-grow-0 overflow class="w-64 h-full">
      <div pane flex-grow-0 class="h-[200px] w-auto shrink-0">2 row 64</div>
    </div>
    <div wrapper col flex-grow-0 overflow class="w-64 h-full">
      <div pane flex-grow-0 class="h-[200px] w-[2000px] shrink-0">2 row 64</div>
    </div>
    <div wrapper col flex-grow-0 class="w-64 h-full">
      <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
    </div>
    <div wrapper col flex-grow-1 class="w-0 h-full">
      <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
    </div>
    <div wrapper col flex-grow-1 class="w-0 h-full">
      <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
    </div>
    <div wrapper col flex-grow-0 class="w-64 h-full">
      <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
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

[pane] {
  @apply border-2 border-blue-300;
}
</style>
