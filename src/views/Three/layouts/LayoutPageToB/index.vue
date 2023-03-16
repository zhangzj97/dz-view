<script setup lang="ts">
import PaneAppBar from './components/PaneAppBar/index.vue';
import PaneAvatar from './components/PaneAvatar/index.vue';
import PaneBreadCrumb from './components/PaneBreadCrumb/index.vue';
import PaneBreadCrumbBack from './components/PaneBreadCrumbBack/index.vue';
import PaneLogo from './components/PaneLogo/index.vue';
import PaneLogoTool from './components/PaneLogoTool/index.vue';
import PaneMenu from './components/PaneMenu/index.vue';
import PaneMenuTool from './components/PaneMenuTool/index.vue';
import PaneMobileBack from './components/PaneMobileBack/index.vue';
import PaneMobileTitle from './components/PaneMobileTitle/index.vue';
import PaneMobileTool from './components/PaneMobileTool/index.vue';
import PaneNoticeBar from './components/PaneNoticeBar/index.vue';
import PanePluginBar from './components/PanePluginBar/index.vue';
import PaneRouteTag from './components/PaneRouteTag/index.vue';
import PaneRouteTagTool from './components/PaneRouteTagTool/index.vue';
import PaneSearch from './components/PaneSearch/index.vue';
</script>

<template>
  <dz-view col size="w-screen h-screen">
    <!-- 通知栏 -->
    <dz-view one size="h-fit">
      <PaneNoticeBar />
    </dz-view>
    <!-- Nav -->
    <dz-view row size="h-16" wrapper-class="shadow-sm">
      <dz-view one size="w-64"><PaneLogo /></dz-view>
      <dz-view one size="w-grow"><PaneAppBar /></dz-view>
      <dz-view one size="w-fit"><PaneSearch /></dz-view>
      <dz-view one size="w-fit"><PanePluginBar /></dz-view>
      <dz-view one size="w-fit"><PaneAvatar /></dz-view>
    </dz-view>
    <!-- Body -->
    <dz-view row size="h-grow" wrapper-class="shadow-sm">
      <dz-view col size="w-fit" wrapper-class="shadow-sm">
        <dz-view one size="h-16"><PaneLogo /></dz-view>
        <dz-view
          one
          size="h-grow"
          class="h-0"
          overflow
          wrapper-class="shadow-sm"
        >
          <PaneMenu />
        </dz-view>
        <dz-view one size="h-fit"><PaneLogoTool /></dz-view>
        <dz-view one size="h-fit"><PaneMenuTool /></dz-view>
      </dz-view>
      <dz-view col size="w-grow">
        <!-- Nav -->
        <dz-view row size="h-16" wrapper-class="shadow-sm">
          <dz-view one size="w-64"><PaneLogo /></dz-view>
          <dz-view one size="w-grow"><PaneAppBar /></dz-view>
          <dz-view one size="w-fit"><PaneSearch /></dz-view>
          <dz-view one size="w-fit"><PanePluginBar /></dz-view>
          <dz-view one size="w-fit"><PaneAvatar /></dz-view>
        </dz-view>
        <!-- BreadCrumb -->
        <dz-view row size="h-8" wrapper-class="shadow-sm">
          <dz-view one size="w-fit"><PaneBreadCrumbBack /></dz-view>
          <dz-view one size="w-grow"><PaneBreadCrumb /></dz-view>
        </dz-view>
        <!-- MobileNav -->
        <dz-view row size="h-12" wrapper-class="shadow-sm">
          <dz-view one size="w-fit"><PaneMobileBack /></dz-view>
          <dz-view one size="w-grow"><PaneMobileTitle /></dz-view>
          <dz-view one size="w-fit"><PaneMobileTool /></dz-view>
        </dz-view>
        <!-- RouteTag -->
        <dz-view row size="h-8" wrapper-class="shadow-sm">
          <dz-view one size="w-grow" class="w-0" overflow>
            <PaneRouteTag />
          </dz-view>
          <dz-view one size="w-fit"><PaneRouteTagTool /></dz-view>
        </dz-view>
        <h1>body</h1>
        <dz-view one size="h-grow" class="h-0" wrapper-class="w-0" overflow>
          <slot></slot>
        </dz-view>
      </dz-view>
    </dz-view>
  </dz-view>
</template>
