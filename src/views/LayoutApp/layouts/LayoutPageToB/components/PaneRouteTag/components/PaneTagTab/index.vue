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
  <dz-view row size="h-grow" overflow position="4" wrapper-class="gap-1 px-2">
    <template v-for="(item, index) of baseList" :key="index">
      <dz-view
        row
        position="4"
        pointer
        size="w-fit"
        transition
        class="route-tab-tag shrink-0"
        wrapper-class=" rounded-sm border-[1px] border-gray-300 bg-white hover:bg-gray-200"
        @click="handleClick(item)"
      >
        <dz-view one size="w-5 h-5" position="5" transition>
          <dz-icon
            icon="ic:round-circle"
            size="3"
            :color="
              selectedKeys.includes(item.routeTagCode)
                ? 'text-blue-300'
                : 'text-gray-300'
            "
          />
        </dz-view>
        <dz-font color="text-gray-600" class="mr-2">
          {{ t(String(`@${item.scope}.ROUTE.${item.code}`)) }}
        </dz-font>
        <dz-view
          v-if="!item.tagFixed"
          class="route-tab-tag__icon hover:bg-gray-50"
          one
          size="w-5 h-5"
          position="5"
          transition
          @click.stop="
            selectedKeys.includes(item.routeTagCode)
              ? handleCloseActive(item)
              : handleCloseUnactive(item)
          "
        >
          <dz-icon size="3" icon="ic:round-close"></dz-icon>
        </dz-view>
      </dz-view>
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
