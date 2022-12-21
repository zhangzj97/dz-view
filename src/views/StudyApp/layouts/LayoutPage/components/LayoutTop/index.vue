<script setup lang="ts">
import PaneNotice from './components/PaneNotice/index.vue';
import PaneConfig from './components/PaneConfig/index.vue';
import PaneAvatar from './components/PaneAvatar/index.vue';
import PaneSearch from './components/PaneSearch/index.vue';
import { useRouter } from 'vue-router'

const { t } = useI18n();

const router = useRouter();

const navinfo = reactive({ name: router.currentRoute.value.name, title: t(`menu.${router.currentRoute.value.name}`) })
watch(() => router.currentRoute.value.name, (newValue,) => {
  navinfo.name = newValue
  navinfo.title = t(`menu.${newValue}`)
}, { immediate: true })

</script>

<template>
  <DzFlex class="w-full h-16">
    <DzFlex class="flex-row">

      <DzFlex class="justify-center w-64 h-16">
        <div class="items-center ml-8">
          <div class="text-2xl font-bold">{{ navinfo.title }}</div>
        </div>
      </DzFlex>

      <DzFlex class="items-end justify-center flex-grow h-16" testTitle="tool">
        <DzFlex class="flex-row gap-2 ">
          <PaneSearch />
          <PaneNotice />
          <PaneConfig />
        </DzFlex>
      </DzFlex>

      <DzFlex class="items-center justify-center w-20 h-16" testTitle="avatar">
        <PaneAvatar />
      </DzFlex>

    </DzFlex>
  </DzFlex>

</template>
