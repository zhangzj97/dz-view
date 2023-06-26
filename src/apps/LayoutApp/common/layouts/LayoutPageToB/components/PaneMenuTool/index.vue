<script setup lang="ts">
import { useService } from '@/hooks/useService';

const { dispatch } = useService();

const updateState = async (code: any, value: any) => {
  await dispatch('SourceAccessMenu.UpdateState', { [code]: value });
};

const actionState = reactive({
  list: [
    //
    { title: 'Theme: light', click: () => updateState('theme', 'light') },
    { title: 'Theme: dark', click: () => updateState('theme', 'dark') },
    { title: 'Mode: vertical', click: () => updateState('mode', 'vertical') },
    {
      title: 'Mode: horizontal',
      click: () => updateState('mode', 'horizontal'),
    },
    { title: 'Mode: inline', click: () => updateState('mode', 'inline') },
    { title: 'Collapsed: true', click: () => updateState('collapsed', true) },
    {
      title: 'Collapsed: false',
      click: () => updateState('collapsed', false),
    },
    { title: 'Collapsed: null', click: () => updateState('collapsed', null) },
  ],
});
</script>

<template>
  <dz-popover placement="bottom" rounded>
    <dz-view
      one
      pointer
      size="h-grow"
      position="5"
      transition
      :wrapper-class="['my-2', 'rounded-full', 'hover:bg-gray-100']"
    >
      <dz-icon size="6" icon="ic:round-settings" />
    </dz-view>
    <template #content>
      <dz-view col size="w-32" bg="bg-white">
        <template v-for="(item, index) of actionState.list" :key="index">
          <dz-button
            size="w-grow"
            text
            :title="item.title"
            @click="item.click"
          />
        </template>
      </dz-view>
    </template>
  </dz-popover>
</template>
