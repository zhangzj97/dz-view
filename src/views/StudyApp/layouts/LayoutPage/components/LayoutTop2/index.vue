<script setup lang="ts">
import { useRouter } from 'vue-router';

const { t } = useI18n();

const router = useRouter();

const navinfo = reactive({ name: router.currentRoute.value.name, title: t(`menu.${router.currentRoute.value.name}`) });
watch(
  () => router.currentRoute.value.name,
  newValue => {
    navinfo.name = newValue;
    navinfo.title = t(`menu.${newValue}`);
  },
  { immediate: true }
);
</script>

<template>
  <DzFlex class="flex-row w-full h-8 bg-gray-300">
    <DzFlex class="flex-row items-center">
      <DzIcon class="w-8 h-8" icon="mdi:menu-left" />
    </DzFlex>
    <DzFlex class="flex-row items-center flex-grow gap-2 overflow-auto">
      <template v-for="index of 20" :key="index">
        <div class="flex items-center gap-2 px-2 bg-red-400 rounded-lg">
          <DzIcon class="w-4 h-4" icon="mdi:file" />
          <div class="text-sm">Tag</div>
          <DzIcon class="w-3 h-3" icon="mdi:close" />
        </div>
      </template>
    </DzFlex>
    <DzFlex class="flex-row items-center h-8">
      <DzIcon class="w-8 h-8" icon="mdi:menu-right" />
    </DzFlex>
    <DzFlex class="flex-row items-center h-8 gap-2 mr-2">
      <DzIcon class="w-4 h-4" icon="mdi:close-circle-multiple" />
    </DzFlex>
  </DzFlex>
</template>
