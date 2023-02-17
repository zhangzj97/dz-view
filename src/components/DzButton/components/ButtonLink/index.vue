<script setup lang="ts">
defineProps<{
  title?: string;

  themeOption: any;

  icon?: string | false;
  iconSize?: string;

  loading?: boolean;
  disable?: boolean;
}>();
</script>

<template>
  <dz-view one size="h-fit w-fit">
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
          // themeOption.bg,

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
      :wrapperClass="[
        //
        themeOption.bg,
        themeOption.border,
        'py-0 px-0',
        'select-none',
        'hover:opacity-80',
        'rounded',
        'border-0 border-transparent',
      ]"
    >
      <template v-if="icon">
        <dz-view one size="w-6" position="5">
          <dz-icon size="5" :icon="icon" :color="themeOption.iconColor"></dz-icon>
        </dz-view>
      </template>
      <template v-if="title">
        <dz-view one size="w-fit h-fit" wrapperClass="pb-0 px-0">
          <dz-font sm class="underline underline-offset-2" :color="themeOption.border">{{ title }}</dz-font>
        </dz-view>
      </template>
    </dz-view>
  </dz-view>
</template>
