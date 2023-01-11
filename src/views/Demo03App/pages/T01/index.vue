<script setup lang="ts">
import { useTestStyle } from './hooks/useTestStyle';
const { handleAddIndex, handleChangeIndex, testStyleState, classNameListState } = useTestStyle();
</script>

<template>
  <!-- 111 -->
  <div v-if="testStyleState.layout === '111'" class="relative flex flex-col w-full h-full">
    <div class="flex flex-row w-full h-16 bg-orange-300"></div>
    <!-- h-0 flex-grow -->
    <div class="flex flex-row w-full transition-all transform bg-violet-300" :class="[testStyleState.width, testStyleState.height, testStyleState.flexGrow]"></div>
    <div class="flex flex-row w-full h-16 bg-red-300"></div>
  </div>

  <!-- 131 -->
  <div v-if="testStyleState.layout === '131'" class="relative flex flex-col w-full h-full dz-wrapper">
    <div class="dz-layout-row">
      <div class="w-32 h-16 dz-wrapper">
        <div class="w-16 h-16 bg-amber-500"></div>
      </div>
      <div class="w-32 h-16 dz-wrapper">
        <div class="flex flex-row w-16 h-16 bg-amber-500"></div>
      </div>
    </div>
  </div>

  <!-- t1 -->
  <div v-if="testStyleState.layout === 't1'" class="relative flex flex-col w-auto h-auto dz-wrapper">
    <div class="flex-grow-0 w-full h-96 dz-layout-row bg-amber-800">
      <div class="w-32 h-16 dz-wrapper">
        <div class="w-16 h-16 bg-amber-500"></div>
      </div>
    </div>

    <div class="flex-grow w-auto h-0 bg-blue-700 dz-layout-row">
      <div class="flex-grow-0 w-32 h-full bg-green-300 dz-wrapper">
        <div class="w-16 h-16 bg-amber-500"></div>
      </div>

      <!-- <div class="flex-grow w-0 h-auto overflow-auto bg-green-400 dz-wrapper">
        <div class="w-[1600px] h-[1600px] bg-red-300"></div>
      </div> -->

      <div class="flex-grow w-0 h-auto overflow-auto bg-green-400 dz-wrapper">
        <div class="w-full h-[1600px] bg-red-500 shrink-0"></div>
      </div>

      <div class="flex-col flex-grow w-0 h-auto overflow-auto bg-green-400 dz-wrapper">
        <div class="dz-layout-col">
          <div class="flex-grow-0 w-[1000px] h-96 dz-layout-row bg-amber-800 shrink-0">
            <div class="w-32 h-16 dz-wrapper">
              <div class="w-16 h-16 bg-amber-500"></div>
            </div>
          </div>
          <div class="flex-grow-0 w-full h-96 dz-layout-row bg-amber-800 shrink-0">
            <div class="w-32 h-16 dz-wrapper">
              <div class="w-16 h-16 bg-amber-500"></div>
            </div>
          </div>
          <div class="flex-grow-0 w-full h-96 dz-layout-row bg-amber-800 shrink-0">
            <div class="w-32 h-16 dz-wrapper">
              <div class="w-16 h-16 bg-amber-500"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-grow-0 w-32 h-16 bg-green-500 dz-wrapper">
        <div class="w-16 h-16 bg-amber-500"></div>
      </div>
    </div>

    <div class="flex-grow-0 h-16 w-fit dz-layout-row bg-amber-700">
      <div class="w-32 h-16 dz-wrapper">
        <div class="w-16 h-16 bg-amber-500"></div>
      </div>
    </div>
  </div>

  <!-- t2 -->
  <div v-if="testStyleState.layout === 't2'" class="w-auto h-auto dz-layout col">
    <div class="flex-grow-0 w-auto overflow-auto bg-red-100 h-96 dz-wrapper">
      <div class="w-[2000px] h-[2000px] bg-orange-200"></div>
    </div>

    <div class="flex-grow w-auto h-0 bg-red-200 dz-wrapper">
      <div class="dz-layout row">
        <div class="flex-grow-0 w-64 h-auto bg-blue-100 dz-wrapper">
          <div class="dz-layout col">
            <div class="flex-grow-0 w-auto h-40 overflow-auto bg-green-100 dz-wrapper">
              <div class="w-[2000px] h-[2000px] bg-orange-200"></div>
            </div>
            <div class="flex-grow-0 w-auto h-40 overflow-auto bg-green-100 dz-wrapper">
              <div class="w-[2000px] h-[2000px] bg-orange-200 shrink-0"></div>
            </div>

            <div class="flex-grow w-auto h-40 overflow-auto bg-green-100 dz-wrapper">
              <div class="dz-layout row">
                <div class="w-[2000px] h-[2000px] bg-orange-200"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="flex-grow-0 w-64 h-auto bg-blue-100 dz-wrapper">
          <div class="dz-layout col">
            <div class="flex-grow-0 w-auto h-40 overflow-auto bg-green-100 dz-wrapper">
              <div class="w-[2000px] h-[2000px] bg-orange-200"></div>
            </div>
            <div class="flex-grow-0 w-auto h-40 overflow-auto bg-green-100 dz-wrapper">
              <div class="w-[2000px] h-[2000px] bg-orange-200 shrink-0"></div>
            </div>

            <div class="flex-grow-0 w-auto h-40 overflow-auto bg-green-100 dz-wrapper">
              <div class="dz-layout row">
                <div class="w-[2000px] h-[2000px] bg-orange-200"></div>
              </div>
            </div>
          </div>
        </div> -->
        <!-- <div class="flex-grow w-0 h-auto bg-blue-200 dz-wrapper">
          <div class="dz-layout col">
            <div class="flex-grow-0 w-auto h-40 overflow-auto bg-green-100 dz-wrapper">
              <div class="w-[2000px] h-[2000px] bg-orange-300 shrink-0"></div>
            </div>
            <div class="flex-grow w-auto h-0 overflow-auto bg-green-100 dz-wrapper">
              <div class="w-[2000px] h-[2000px] bg-orange-400 shrink-0"></div>
            </div>
          </div>
        </div> -->
        <!-- <div class="flex-grow w-0 h-auto bg-blue-200 dz-wrapper">
          <div class="dz-layout col">
            <div class="flex-grow-0 w-auto h-40 overflow-auto bg-green-100 dz-wrapper">
              <div class="w-[2000px] h-[2000px] bg-orange-300 shrink-0"></div>
            </div>
            <div class="flex-grow-0 w-auto h-40 overflow-auto bg-green-100 dz-wrapper">
              <div class="w-[2000px] h-[2000px] bg-orange-300"></div>
            </div>
            <div class="flex-grow-0 w-auto h-20 overflow-auto bg-green-100 dz-wrapper">
              <div class="dz-layout row">
                <div class="w-[2000px] h-[2000px] bg-orange-300"></div>
              </div>
            </div>
            <div class="flex-grow w-auto h-0 overflow-auto bg-green-100 dz-wrapper">
              <div class="w-[2000px] h-[2000px] bg-orange-400 shrink-0"></div>
            </div>
          </div>
        </div> -->

        <div class="flex-grow-0 w-64 h-auto bg-blue-300 dz-wrapper"></div>
      </div>
    </div>
    <div class="flex-grow-0 w-auto h-16 bg-red-300 dz-wrapper"></div>

    <!-- <div class="flex-grow-0 w-auto h-40 overflow-auto bg-red-100 dz-wrapper">
      <div class="w-[2000px] h-[2000px] bg-orange-200 shrink-0"></div>
    </div>
    <div class="flex-grow-0 w-auto h-40 overflow-auto bg-red-100 dz-wrapper">
      <div class="w-[2000px] h-[2000px] bg-orange-200"></div>
    </div>
    <div class="flex-grow-0 w-auto h-40 overflow-auto bg-red-100 dz-wrapper">
      <div class="dz-layout row">
        <div class="w-[2000px] h-[2000px] bg-orange-200 flex-grow"></div>
      </div>
    </div> -->

    <div class="flex-grow-0 w-auto h-40 bg-red-100 dz-wrapper">
      <div class="dz-layout row">
        <div class="w-64 h-20 overflow-auto dz-wrapper">
          <div class="w-[2000px] h-[2000px] bg-green-200 flex-gro shrink-0"></div>
        </div>
        <div class="w-64 h-full overflow-auto dz-wrapper">
          <div class="w-[2000px] h-[2000px] bg-green-300 flex-grow shrink-0"></div>
        </div>
        <div class="w-16 dz-wrapper">
          <div class="w-[2000px] h-[2000px] bg-green-400 flex-grow"></div>
        </div>
      </div>
    </div>
    <div class="flex-grow-0 w-auto h-40 bg-red-100 dz-wrapper">
      <div class="dz-layout row">
        <div class="w-64 h-20 overflow-auto dz-wrapper">
          <div class="w-[2000px] h-[2000px] bg-pink-200 flex-gro shrink-0"></div>
        </div>
        <div class="flex-grow w-64 h-0 overflow-auto dz-wrapper">
          <div class="w-[2000px] h-[2000px] bg-pink-300 flex-grow shrink-0"></div>
        </div>
        <div class="w-16 dz-wrapper">
          <div class="w-[2000px] h-[2000px] bg-pink-400 flex-grow"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Tool -->
  <div class="fixed flex flex-col p-2 bg-white rounded-lg shadow-lg top-2 right-2">
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
.dz-wrapper {
  @apply flex flex-col;
}

.dz-layout-col {
  @apply flex flex-col flex-nowrap;
}

.dz-layout-row {
  @apply flex flex-row flex-nowrap;
}

.dz-layout-grid {
  @apply flex flex-row flex-wrap;
}
</style>

<style>
.dz-wrapper {
  @apply relative flex flex-col;
}
.dz-layout {
  @apply relative flex flex-grow;
}

.dz-layout.col {
  @apply flex-col flex-nowrap;
}

.dz-layout.row {
  @apply flex-row flex-nowrap;
}

.dz-layout.grid {
  @apply flex-row flex-wrap;
}
</style>
