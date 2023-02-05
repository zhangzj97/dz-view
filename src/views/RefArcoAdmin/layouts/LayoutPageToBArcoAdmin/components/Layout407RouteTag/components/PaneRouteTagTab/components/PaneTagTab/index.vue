<script setup lang="ts">
defineProps<{
  baseList: any[];
}>();
</script>

<template>
  <dz-view row size="h-grow" overflow position="4" wrapper-class="gap-1 px-2">
    <template v-for="(item, index) of baseList" :key="index">
      <template v-if="item.fixed">
        <dz-view row position="4" pointer size="w-fit" transition class="shrink-0" wrapper-class="px-2 rounded-sm border-[1px] border-gray-300 bg-white hover:bg-gray-200">
          <dz-font color="text-gray-600" class="mr-1">{{ item.title }}</dz-font>
        </dz-view>
      </template>

      <template v-else-if="item.actived">
        <dz-view row position="4" pointer size="w-fit" transition class="shrink-0" wrapper-class="px-2 rounded-sm border-[1px] border-gray-300 bg-blue-500 hover:bg-blue-300">
          <dz-font color="text-white" class="mr-1">{{ item.title }}</dz-font>
          <dz-view one size="w-3 h-3" position="5" transition wrapper-class="transform scale-90 bg-blue-500 rounded-full hover:bg-blue-300 hover:scale-100">
            <dz-icon size="3" icon="ic:round-close"></dz-icon>
          </dz-view>
        </dz-view>
      </template>

      <template v-else>
        <dz-view row position="4" pointer size="w-fit" transition class="shrink-0" wrapper-class="px-2 rounded-sm border-[1px] border-gray-300 bg-white hover:bg-gray-200">
          <dz-font color="text-gray-600" class="mr-1">{{ item.title }}</dz-font>
          <dz-view one size="w-3 h-3" position="5" transition wrapper-class="transform scale-90 bg-white rounded-full opacity-0 hover:opacity-100 hover:bg-gray-100 hover:scale-100">
            <dz-icon size="2" icon="ic:round-close"></dz-icon>
          </dz-view>
        </dz-view>
      </template>
    </template>
  </dz-view>
</template>
