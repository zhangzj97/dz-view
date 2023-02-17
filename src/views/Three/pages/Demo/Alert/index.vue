<script setup lang="ts"></script>

<template>
  <dz-view col size="h-grow" position="5">
    <dz-view one size="h-fit w-full" position="5">
      <dz-alert primary title="tile" />
      <dz-alert danger />
      <dz-alert />
      <dz-alert title="tile" message="123" />
      <dz-alert size="w-96" theme="@ThemeApp/Blue" title="中文表头" message="123" />
      <dz-alert size="w-96" theme="@ThemeApp/Blue" title="中文表头" />
      <dz-alert size="w-96" primary message="123" />
      <dz-alert
        size="w-96"
        theme="@ThemeApp/Yellow"
        title="Title"
        message="123阿斯顿撒旦撒旦阿斯顿撒旦撒旦阿斯顿撒旦撒旦阿斯顿撒旦撒旦阿斯顿撒旦撒旦阿斯顿撒旦撒旦阿斯顿撒旦撒旦阿斯顿撒旦撒旦阿斯顿撒旦撒旦阿斯顿撒旦撒旦阿斯顿撒旦撒旦阿斯顿撒旦撒旦"
      />
    </dz-view>

    <dz-view row size="h-16" position="5" wrapper-class="gap-2">
      <a-button>返回首页</a-button>
      <a-button>刷新</a-button>
    </dz-view>
  </dz-view>
</template>
