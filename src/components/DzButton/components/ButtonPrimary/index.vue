<script setup lang="ts">
import { useClickEffect } from './hooks/useClickEffect';

defineProps<{
  title?: string | false;

  icon?: string | false;

  loading?: boolean;
  disable?: boolean;
}>();

const { toggleClickEffect, clickEffectState } = useClickEffect();

// const config = inject('config');
// const { themeOption } = useTheme({ config, themePart: 'DzButtonDangerOption' });

const themeOption = {
  bg: 'bg-green-400',
  bgHover: 'hover:bg-green-300',
  border: 'border-green-400',
  borderHover: '',
  iconColor: 'text-green-50',
  textColor: 'text-green-50',
  effectBg: 'bg-green-100',
};
</script>

<template>
  <dz-view one size="h-fit w-fit">
    <!-- 光晕 -->
    <dz-view
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
    <template v-if="disable || loading">
      <dz-view
        absolute
        one
        size="w-full h-full"
        position="5"
        transition
        class="z-50"
        :wrapperClass="[
          //
          'bg-white',
          'cursor-not-allowed',
          'py-1 px-2',
          'select-none',
          'opacity-50',
          'rounded',
          'border-[0.5px] border-gray-200',
        ]"
      >
        <dz-icon
          v-if="loading"
          size="5"
          color="text-gray-500"
          icon="line-md:loading-twotone-loop"
        />
      </dz-view>
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
        'py-1 px-2',
        'select-none',
        'rounded',
        'border-[0.5px]',
      ]"
      @click="toggleClickEffect"
    >
      <template v-if="icon">
        <dz-view one size="w-6" position="5">
          <dz-icon
            size="5"
            :icon="icon"
            :color="themeOption.iconColor"
          ></dz-icon>
        </dz-view>
      </template>
      <template v-if="title">
        <dz-view one size="w-fit h-fit" wrapperClass="pb-[2px] px-2">
          <dz-font sm :color="themeOption.textColor">{{ title }}</dz-font>
        </dz-view>
      </template>
    </dz-view>
  </dz-view>
</template>
