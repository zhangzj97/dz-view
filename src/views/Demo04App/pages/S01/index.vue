<script setup lang="ts" name="S01">
const layoutList = {
  option: { layout: 'col', size: 'w-screen h-screen', overflow: 'auto', description: 'Page' },
  children: [
    // 加载栏
    { option: { layout: 'one', size: 'h-2' }, component: () => 'Layout10LoadingBar' },
    // 通知栏
    { option: { layout: 'one', size: 'h-8' }, component: () => 'Layout20NoticeBar' },
    // 应用 Navbar
    {
      option: { layout: 'row', size: 'h-16' },
      component: () => 'Layout30AppNavBar',
      children: [
        { option: { layout: 'one', size: 'w-64' }, component: () => 'Layout3010Logo' },
        { option: { layout: 'one', size: 'w-grow' }, component: () => 'Layout3010AppNav' },
        { option: { layout: 'one', size: 'w-64' }, component: () => 'Layout3010Search' },
        { option: { layout: 'one', size: 'w-64' }, component: () => 'Layout3010ToolBar' },
        { option: { layout: 'one', size: 'w-16' }, component: () => 'Layout3010Avatar' },
      ],
    },
    // 粘性应用 Navbar
    { option: { layout: 'one', size: 'h-16', fixed: true }, component: () => 'Layout31AppNavBar' },
    // 主体
    {
      option: { layout: 'row', size: 'h-grow' },
      children: [
        { option: { layout: 'one', size: 'w-64', absolute: true }, component: () => 'Layout40FloatLeft' },
        { option: { layout: 'one', size: 'w-64', absolute: true }, component: () => 'Layout40FloatRight' },

        { option: { layout: 'one', size: 'w-16' }, component: () => 'Layout40SlimLeft' },
        { option: { layout: 'one', size: 'w-64' }, component: () => 'Layout40Left' },
        {
          option: { layout: 'col', size: 'w-grow' },
          children: [
            {
              option: { layout: 'row', size: 'h-16' },
              children: [
                { option: { layout: 'one', size: 'w-64' }, component: () => 'Layout4010Logo' },
                { option: { layout: 'one', size: 'w-grow' }, component: () => 'Layout4010AppNav' },
                { option: { layout: 'one', size: 'w-64' }, component: () => 'Layout4010Search' },
                { option: { layout: 'one', size: 'w-64' }, component: () => 'Layout4010ToolBar' },
                { option: { layout: 'one', size: 'w-16' }, component: () => 'Layout4010Avatar' },
              ],
            },
            { option: { layout: 'one', size: 'h-grow' }, slot: true },
          ],
        },
      ],
    },
    // 足部信息
    { option: { layout: 'one', size: 'h-16' }, component: () => 'FooterBar' },
  ],
};
</script>

<template>
  <dz-view col size="w-screen h-screen" overflow-hidden>
    <!-- vben -->
    <dz-view one></dz-view>

    <!-- page 主体 -->
    <dz-view row>
      <!-- 左边栏 -->
      <dz-view col>
        <!-- logo -->
        <dz-view row>
          <!-- logo icon -->
          <dz-view one></dz-view>
          <!-- logo slogan -->
          <dz-view one></dz-view>
        </dz-view>
        <!-- 菜单 -->
        <dz-view one></dz-view>
      </dz-view>
      <!-- 右边主体 -->
      <dz-view col>
        <!-- breadcrumb -->
        <dz-view row>
          <!-- 菜单收缩 -->
          <dz-view one></dz-view>
          <!-- breadcrumb -->
          <dz-view row>
            <dz-view one></dz-view>
            <dz-view one></dz-view>
          </dz-view>
          <!-- toolbar -->
          <dz-view row>
            <dz-view row>
              <dz-view one></dz-view>
              <dz-view one></dz-view>
              <dz-view one></dz-view>
            </dz-view>
            <dz-view row>
              <dz-view one></dz-view>
              <dz-view one></dz-view>
            </dz-view>
            <dz-view one></dz-view>
          </dz-view>
        </dz-view>
        <!-- page tag -->
        <dz-view row>
          <dz-view row>
            <dz-view one></dz-view>
            <dz-view one></dz-view>
            <dz-view one></dz-view>
          </dz-view>
          <dz-view row>
            <dz-view one></dz-view>
            <dz-view one></dz-view>
            <dz-view one></dz-view>
          </dz-view>
        </dz-view>
        <!-- slot -->
        <dz-view one>
          <slot></slot>
        </dz-view>
      </dz-view>
    </dz-view>
    <!-- vben -->
  </dz-view>
</template>

<style>
.h-grow {
  @apply flex-grow h-0;
}
.w-grow {
  @apply flex-grow w-0;
}
</style>
