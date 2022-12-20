<script setup lang="ts" name="TreeMenuItem">
defineProps<{
  id: string;
  title: string;
  avatar: string;
  children?: MenuDTO[];
  propsRow: MenuDTO;
  isCollapse: boolean;
  isActive?: boolean;
  isChildren?: boolean;
}>();

const emit = defineEmits<{
  (e: 'click', ev: Event, entity: MenuDTO): void;
  (e: 'mouseenter', ev: Event, entity: MenuDTO): void;
  (e: 'mouseleave', ev: Event, entity: MenuDTO): void;
}>();

const handleClick = (ev: Event, entity: MenuDTO): void => {
  emit('click', ev, entity);
};
const handleMouseenter = (ev: Event, entity: MenuDTO): void => {
  emit('mouseenter', ev, entity);
};
const handleMouseleave = (ev: Event, entity: MenuDTO): void => {
  emit('mouseleave', ev, entity);
};
</script>

<template>
  <FlexContainer>
    <FlexContainer
      class="flex-row menu-item-trigger"
      :class="[isActive && 'isActive', isCollapse ? 'w-16' : 'w-64']"
      @click="handleClick($event, propsRow)"
      @mouseenter="handleMouseenter($event, propsRow)"
      @mouseleave="handleMouseleave($event, propsRow)"
    >
      <!-- Avatar -->
      <FlexContainer v-if="avatar?.match(/:/)" class="w-5 ml-4 mr-2 menu-item-trigger-avatar">
        <z-icon class="text-slate-600" :icon="avatar" />
      </FlexContainer>

      <!-- Title -->
      <FlexContainer :class="[isCollapse ? 'scale-0 w-0' : 'scale-1 w-32']">
        <div>{{ title }}</div>
      </FlexContainer>

      <!-- Right Icon -->
      <FlexContainer v-if="isChildren" class="absolute right-2" :class="[isCollapse ? 'scale-0 w-0' : 'scale-1 w-4']">
        <z-icon icon="mdi:chevron-right" />
      </FlexContainer>
    </FlexContainer>
  </FlexContainer>
</template>

<style scoped>
.menu-item-trigger {
  @apply items-center gap-2 h-12 cursor-pointer select-none bg-slate-100;
  @apply border-l-0 border-emerald-500;
}
.menu-item-trigger.isActive {
  @apply border-l-8 border-emerald-500;
}
</style>
