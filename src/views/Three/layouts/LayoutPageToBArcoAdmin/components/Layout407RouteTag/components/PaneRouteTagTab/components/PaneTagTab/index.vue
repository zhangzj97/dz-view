<script setup lang="ts">
defineProps<{
  baseList: any[];

  selectedKeys: any[];
}>();

const emit = defineEmits<{
  (e: 'handleClick', item: any): void;
  (e: 'handleCloseUnactive', item: any): void;
  (e: 'handleCloseActive', item: any): void;
}>();

const handleClick = (item: any) => {
  emit('handleClick', item);
};

const handleCloseUnactive = (item: any) => {
  emit('handleCloseUnactive', item);
};

const handleCloseActive = (item: any) => {
  emit('handleCloseActive', item);
};

const { t } = useI18n();
</script>

<template>
  <dz-view
    class=""
    row
    size="h-grow"
    overflow
    position="4"
    wrapper-class="gap-1 px-2"
  >
    <template v-for="(item, index) of baseList" :key="index">
      <template v-if="item.tagFixed && selectedKeys.includes(String(item.id))">
        <dz-view
          row
          position="4"
          pointer
          size="w-fit"
          transition
          class="route-tab-tag shrink-0"
          wrapper-class="px-2 rounded-sm border-[1px] border-gray-300 bg-blue-500 hover:bg-blue-300"
        >
          <dz-font color="text-white" class="mr-1" @click="handleClick(item)">
            {{ t(String(`@${item.scope}.ROUTE.${item.code}`)) }}
          </dz-font>
        </dz-view>
      </template>

      <template v-else-if="item.tagFixed">
        <dz-view
          row
          position="4"
          pointer
          size="w-fit"
          transition
          class="shrink-0"
          wrapper-class="px-2 rounded-sm border-[1px] border-gray-300 bg-white hover:bg-gray-400"
          @click="handleClick(item)"
        >
          <dz-font color="text-gray-600" class="mr-1">
            {{ t(String(`@${item.scope}.ROUTE.${item.code}`)) }}
          </dz-font>
        </dz-view>
      </template>

      <template v-else-if="selectedKeys.includes(String(item.id))">
        <dz-view
          row
          position="4"
          pointer
          size="w-fit"
          transition
          class="route-tab-tag shrink-0"
          wrapper-class="pl-2 rounded-sm border-[1px] border-gray-300 bg-blue-500 hover:bg-blue-400"
          @click="handleClick(item)"
        >
          <dz-font color="text-white" class="mr-1">
            {{ t(String(`@${item.scope}.ROUTE.${item.code}`)) }}
          </dz-font>
          <dz-view
            class="route-tab-tag__icon"
            one
            size="w-5 h-5"
            position="5"
            transition
            wrapper-class="hover:bg-gray-100"
            @click.stop="handleCloseActive(item)"
          >
            <dz-icon size="3" icon="ic:round-close"></dz-icon>
          </dz-view>
        </dz-view>
      </template>

      <template v-else>
        <dz-view
          row
          position="4"
          pointer
          size="w-fit"
          transition
          class="route-tab-tag shrink-0"
          wrapper-class="pl-2 rounded-sm border-[1px] border-gray-300 bg-white hover:bg-gray-300"
          @click="handleClick(item)"
        >
          <dz-font color="text-gray-600" class="mr-1">
            {{ t(String(`@${item.scope}.ROUTE.${item.code}`)) }}
          </dz-font>
          <dz-view
            class="route-tab-tag__icon"
            one
            size="w-5 h-5"
            position="5"
            transition
            wrapper-class="rounded-sm hover:bg-gray-100"
            @click.stop="handleCloseUnactive(item)"
          >
            <dz-icon size="3" icon="ic:round-close" color="text-gray-900" />
          </dz-view>
        </dz-view>
      </template>
    </template>
  </dz-view>
</template>

<style scoped lang="scss">
.route-tab-tag .route-tab-tag__icon {
  @apply opacity-0;
}
.route-tab-tag:hover .route-tab-tag__icon {
  @apply opacity-100;
}
</style>
