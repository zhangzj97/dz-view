<script setup lang="ts" name="PageBanking">
import PaneCard01 from './components/PaneCard01/index.vue';
import PaneCard02 from './components/PaneCard02/index.vue';
import PaneJishiyinhang from './components/Pane即时银行/index.vue';
import PaneShouruleibie from './components/Pane收入类别/index.vue';
import PaneZuixinjiaoyi from './components/Pane最新交易/index.vue';
</script>

<template>
  <DzFlex class="flex-grow" testTitle="PageBanking">
    <DzFlex class="flex-grow bg-PageBanking bg-page"></DzFlex>

    <DzFlex testTitle="Row01" h="100px"></DzFlex>

    <DzFlex class="flex-row" :class="['px-10 h-[400px]']">
      <DzFlex class="items-start justify-center flex-grow">
        <PaneCard01 />
      </DzFlex>
      <DzFlex class="items-center justify-center flex-grow">
        <PaneCard02 />
      </DzFlex>
      <DzFlex class="items-end justify-center" w="380px">
        <PaneJishiyinhang />
      </DzFlex>
    </DzFlex>
    <DzFlex class="flex-row flex-grow" :class="['px-10 pt-2 pb-4']">
      <DzFlex class="flex-grow">
        <PaneZuixinjiaoyi />
      </DzFlex>
      <DzFlex class="items-end" w="420px">
        <PaneShouruleibie />
      </DzFlex>
    </DzFlex>
  </DzFlex>
</template>
