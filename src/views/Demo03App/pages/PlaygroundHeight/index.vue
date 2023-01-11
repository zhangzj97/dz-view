<script setup lang="ts">
import PaneTool from './components/PaneTool/index.vue';
import { useTool } from './hooks/useTool';
const optionMap = {
  'h-0': ['show', 'hidden'],
  'h-16': ['show', 'hidden'],
  'h-auto': ['show', 'hidden'],
  'h-full': ['show', 'hidden'],
  'h-fit': ['show', 'hidden'],
  'h-max': ['show', 'hidden'],
  'h-min': ['show', 'hidden'],
  son: ['text', 'box', 'grow', 'full'],
};
const { handleChangeIndex, optionState, optionListState } = useTool({ optionMap });
</script>

<template>
  <div class="flex flex-col w-full h-full bg-red-300">
    <div v-show="optionState['h-0'] === 'show'" class="w-auto h-0 bg-green-100">
      <template v-if="optionState.son === 'text'">text</template>
      <template v-else-if="optionState.son === 'box'">
        <div class="border-2 border-red-600 w-96 h-96"></div>
      </template>
    </div>
    <div v-show="optionState['h-16'] === 'show'" class="w-auto h-16 bg-green-200">
      <template v-if="optionState.son === 'text'">text</template>
      <template v-else-if="optionState.son === 'box'">
        <div class="border-2 border-red-600 w-96 h-96"></div>
      </template>
    </div>
    <div v-show="optionState['h-auto'] === 'show'" class="w-auto h-full bg-green-400">
      <template v-if="optionState.son === 'text'">text</template>
      <template v-else-if="optionState.son === 'box'">
        <div class="border-2 border-red-600 w-96 h-96"></div>
      </template>
    </div>
    <div v-show="optionState['h-full'] === 'show'" class="w-auto h-full bg-green-500">
      <template v-if="optionState.son === 'text'">text</template>
      <template v-else-if="optionState.son === 'box'">
        <div class="border-2 border-red-600 w-96 h-96"></div>
      </template>
    </div>
    <div v-show="optionState['h-fit'] === 'show'" class="w-auto bg-green-600 h-fit">
      <template v-if="optionState.son === 'text'">text</template>
      <template v-else-if="optionState.son === 'box'">
        <div class="border-2 border-red-600 w-96 h-96"></div>
      </template>
    </div>
    <div v-show="optionState['h-max'] === 'show'" class="w-auto bg-green-700 h-max">
      <template v-if="optionState.son === 'text'">text</template>
      <template v-else-if="optionState.son === 'box'">
        <div class="border-2 border-red-600 w-96 h-96"></div>
      </template>
    </div>
    <div v-show="optionState['h-min'] === 'show'" class="w-auto bg-green-800 h-min">
      <template v-if="optionState.son === 'text'">text</template>
      <template v-else-if="optionState.son === 'box'">
        <div class="border-2 border-red-600 w-96 h-96"></div>
      </template>
    </div>
  </div>

  <PaneTool @handleOptionClick="handleChangeIndex" :optionState="optionState" :optionListState="optionListState" />
</template>
