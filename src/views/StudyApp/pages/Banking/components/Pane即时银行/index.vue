<script setup lang="ts" name="Pane即时银行"></script>

<template>
  <FlexContainer class="px-4" :class="['h-[360px] w-[352px]']">
    <div class="absolute top-0 left-0 flex w-full h-full rounded-lg shadow-lg -z-10 bg-gradient-to-tr from-pink-600 to-fuchsia-600"></div>

    <div class="absolute transform" :class="['translate-x-[232px] translate-y-[24px]']">
      <div class="absolute w-12 h-12 origin-top-left transform translate-x-0 bg-white rounded-full opacity-30"></div>
      <div class="absolute w-12 h-12 origin-top-left transform translate-x-8 bg-white rounded-full opacity-30"></div>
    </div>

    <div class="absolute transform" :class="['translate-x-[16px] translate-y-[142px]']">
      <div class="absolute w-16 h-16 origin-bottom-right transform scale-50 rotate-0 translate-x-0 translate-y-0 bg-white rounded-full opacity-30" :class="['rounded-br-[2000px]']"></div>
      <div class="absolute w-16 h-16 origin-bottom-right transform scale-90 rotate-90 translate-x-4 translate-y-0 bg-white rounded-full opacity-30" :class="['rounded-br-[2000px]']"></div>
      <div class="absolute w-16 h-16 origin-bottom-right transform scale-75 rotate-180 translate-x-4 translate-y-4 bg-white rounded-full opacity-30" :class="['rounded-br-[2000px]']"></div>
      <div class="absolute w-16 h-16 origin-bottom-right transform scale-125 rotate-270 translate-x-0 translate-y-4 bg-white rounded-full opacity-30" :class="['rounded-br-[2000px]']"></div>
    </div>

    <div class="flex mt-8 mb-6"><div class="text-xl font-bold text-white">某某银行</div></div>
    <div class="flex mb-2"><div class="text-lg text-white">Balance</div></div>
    <div class="flex mb-16"><div class="text-3xl font-bold text-white">$78321</div></div>
    <div class="flex justify-end mb-6"><div class="text-2xl font-bold tracking-widest text-white">···· 9527</div></div>
    <div class="flex justify-end mb-2"><div class="text-sm text-white">Dylan Zhange</div></div>
    <div class="flex justify-end mb-0"><div class="text-lg font-bold text-white">03/21</div></div>
  </FlexContainer>
</template>
