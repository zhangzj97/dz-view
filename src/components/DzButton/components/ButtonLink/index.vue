<script setup lang="ts">
import { useClickEffect } from './hooks/useClickEffect';
import { useTheme } from '@/hooks/useTheme';

defineProps<{
  title?: string | false;

  icon?: string | false;

  loading?: boolean;
  disable?: boolean;
}>();

const { toggleClickEffect, clickEffectState } = useClickEffect();

const config = inject('config');
const { themeOption } = useTheme({ config, themePart: 'DzButtonLinkOption' });
</script>

<template>
  <dz-view one size="h-fit w-fit">
    <!-- 光晕 -->
    <dz-view
      v-if="false"
      absolute
      one
      size="w-full h-full"
      transition
      :wrapperClass="[
        //
        themeOption.effectBg,
        'transform',
        'rounded',
        clickEffectState.afterOn ? 'scale-110' : 'scale-100',
      ]"
    />
    <!-- 光晕 -->
    <!-- 覆盖层 -->
    <template v-if="loading">
      <dz-view
        absolute
        one
        size="w-full h-full"
        position="5"
        transition
        class="z-50"
        :wrapperClass="[
          //
          themeOption.bg,
          'cursor-wait',
          'py-0 px-0',
          'select-none',
          'opacity-90',
          'rounded',
          'border-0 border-transparent',
        ]"
      >
        <dz-icon size="5" color="text-gray-500" icon="line-md:loading-twotone-loop" />
      </dz-view>
    </template>
    <!-- 覆盖层 -->

    <!-- 覆盖层 -->
    <template v-if="disable">
      <dz-view
        absolute
        one
        size="w-full h-full"
        position="5"
        transition
        class="z-50"
        :wrapperClass="[
          //
          themeOption.bg,
          'cursor-not-allowed',
          'py-0 px-0',
          'select-none',
          'opacity-90',
          'rounded',
          'border-0 border-transparent',
        ]"
      />
    </template>
    <!-- 覆盖层 -->
    <dz-view
      row
      size="w-fit"
      pointer
      shadow="shadow-lg"
      position="4"
      class="z-30"
      transition
      :wrapperClass="[
        //
        themeOption.bg,
        themeOption.bgHover,
        themeOption.border,
        themeOption.borderHover,
        'py-0 px-0',
        'select-none',
        'rounded',
        'border-0',
      ]"
      @click="toggleClickEffect"
    >
      <template v-if="icon">
        <dz-view one size="w-6" position="5">
          <dz-icon size="5" :icon="icon" :color="themeOption.iconColor"></dz-icon>
        </dz-view>
      </template>
      <template v-if="title">
        <dz-view one size="w-fit h-fit" wrapperClass="pb-0 px-0">
          <dz-font sm class="underline underline-offset-3" :color="themeOption.textColor">{{ title }}</dz-font>
        </dz-view>
      </template>
    </dz-view>
  </dz-view>
</template>
