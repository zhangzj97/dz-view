<script setup lang="ts" name="PageBanking">
import PaneCard01 from './components/PaneCard01/index.vue';
import PaneCard02 from './components/PaneCard02/index.vue';
import PaneJishiyinhang from './components/Pane即时银行/index.vue';
import PaneShouruleibie from './components/Pane收入类别/index.vue';
import PaneZuixinjiaoyi from './components/Pane最新交易/index.vue';
</script>

<template>
  <FlexContainer class="flex-grow" testTitle="PageBanking">
    <FlexContainer class="flex-grow bg-PageBanking bg-page"></FlexContainer>

    <FlexContainer testTitle="Row01" h="100px"></FlexContainer>

    <FlexContainer class="flex-row" :class="['px-10 h-[400px]']">
      <FlexContainer class="items-start justify-center flex-grow"><PaneCard01 /></FlexContainer>
      <FlexContainer class="items-center justify-center flex-grow"><PaneCard02 /></FlexContainer>
      <FlexContainer class="items-end justify-center" w="380px"><PaneJishiyinhang /></FlexContainer>
    </FlexContainer>
    <FlexContainer class="flex-row flex-grow" :class="['px-10 pt-2 pb-4']">
      <FlexContainer class="flex-grow"><PaneZuixinjiaoyi /></FlexContainer>
      <FlexContainer class="items-end" w="420px"><PaneShouruleibie /></FlexContainer>
    </FlexContainer>
  </FlexContainer>
</template>
