<script setup lang="ts" name="Pane最新交易">
const logState = reactive({
  list: [
    { email: '1@qq.com', username: 'Dylan', avatar: '', tradeTime: '04:01', fileName: 'xxx.log', class01: 'text-green-500', resultType: '-', resultCount: '1' },
    { email: '1@142.com', username: 'W', avatar: '', tradeTime: '04:01', fileName: 'xxx.log', class01: 'text-red-500', resultType: '+', resultCount: '200' },
    { email: '1@123.com', username: 'J', avatar: '', tradeTime: '04:01', fileName: 'xxx.log', class01: 'text-red-500', resultType: '+', resultCount: '0' },
    { email: '1@123.com', username: 'J', avatar: '', tradeTime: '04:01', fileName: 'xxx.log', class01: 'text-red-500', resultType: '+', resultCount: '0' },
    { email: '1@123.com', username: 'J', avatar: '', tradeTime: '04:01', fileName: 'xxx.log', class01: 'text-red-500', resultType: '+', resultCount: '0' },
    { email: '1@123.com', username: 'J', avatar: '', tradeTime: '04:01', fileName: 'xxx.log', class01: 'text-red-500', resultType: '+', resultCount: '0' },
    { email: '1@123.com', username: 'J', avatar: '', tradeTime: '04:01', fileName: 'xxx.log', class01: 'text-red-500', resultType: '+', resultCount: '0' },
    { email: '1@123.com', username: 'J', avatar: '', tradeTime: '04:01', fileName: 'xxx.log', class01: 'text-red-500', resultType: '+', resultCount: '0' },
    { email: '1@123.com', username: 'J', avatar: '', tradeTime: '04:01', fileName: 'xxx.log', class01: 'text-red-500', resultType: '+', resultCount: '0' },
  ],
});
</script>

<template>
  <DzFlex class="flex-grow px-8" testTitle="Pane最新交易">
    <div class="absolute top-0 left-0 flex w-full h-full bg-white rounded-lg shadow-lg -z-10"></div>

    <DzFlex class="flex-row mt-8 mb-8">
      <div>
        <div class="text-lg font-bold">最新交易</div>
      </div>
      <div class="flex justify-end flex-grow h-6">
        <DzIcon icon="mdi:filter-outline"></DzIcon>
        <DzIcon icon="mdi:dots-horizontal"></DzIcon>
      </div>
    </DzFlex>

    <DzFlex class="flex-row gap-6 mb-8">
      <DzFlex class="flex-grow gap-6">
        <DzFlex class="flex flex-row items-center h-12" v-for="(item, index) of logState.list" :key="index">
          <div class="flex items-center flex-grow gap-2">
            <div class="w-12 h-12 bg-pink-300 rounded-lg">
              <DzIcon icon="mdi:user"></DzIcon>
            </div>
            <div class="flex flex-col">
              <div>{{ item.email }}</div>
              <div>{{ item.username }}</div>
            </div>
          </div>
        </DzFlex>
      </DzFlex>

      <DzFlex class="flex-grow gap-6">
        <DzFlex class="flex flex-row items-center h-12" v-for="(item, index) of logState.list" :key="index">
          <div class="flex items-center flex-grow gap-2">
            <div class="w-12 h-12 bg-purple-300 rounded-lg">
              <DzIcon icon="mdi:file"></DzIcon>
            </div>
            <div class="flex flex-col">
              <div>{{ item.tradeTime }}</div>
              <div>{{ item.fileName }}</div>
            </div>
          </div>
        </DzFlex>
      </DzFlex>

      <DzFlex class="gap-6">
        <DzFlex class="flex flex-row items-center h-12" v-for="(item, index) of logState.list" :key="index">
          <div class="flex justify-end w-20 gap-2">
            <div class="text-lg font-bold" :class="[item.class01]">{{ item.resultType }}</div>
            <div class="text-lg font-bold" :class="[item.class01]">${{ item.resultCount }}</div>
          </div>
        </DzFlex>
      </DzFlex>

      <DzFlex class="w-12 gap-6">
        <DzFlex class="flex flex-row items-center h-12" v-for="(item, index) of logState.list" :key="index">
          <div class="flex justify-end flex-grow h-6">
            <DzIcon icon="mdi:printer-outline"></DzIcon>
            <DzIcon icon="mdi:dots-horizontal"></DzIcon>
          </div>
        </DzFlex>
      </DzFlex>
    </DzFlex>
  </DzFlex>
</template>
