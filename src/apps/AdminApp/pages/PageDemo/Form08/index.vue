<script setup lang="ts">
// 页面上所有 带有 state ( visible, loading, fullscreen, disabled 等等 ) 的组件统一管理
const { bind0, setState0, getState0, store } = useStateStore();
</script>

<template>
  <v s="w-grow h-grow" text="Demo0713">
    <!-- 所有带内部state, -->
    <dz-modal title="被注册成 P1" v-bind="bind0('P1')(/** 显式修改初始状态  */ { fullscreen: false })" />

    <dz-drawer title="被注册成 P2" v-bind="bind0('P2')({})" />

    <dz-btn
      title="把 P1 变成 visible-true fullscreen-true"
      @click="setState0('P1')({ visible: true, fullscreen: true })"
    />
    <dz-btn title="切换 P1 visibl" @click="setState0('P1')({ visible: !getState0('P1').visible })" />

    <!-- 照这个思路  -->
    <!-- 问题 1 , 是否该认为 page 信息 是 state, 是追加 还是 重新取个空间 -->
    <!-- 一个临时且粗糙的示例 -->
    <!-- 追加的方案, 把page 视为 state的一部分 -->
    <!-- <dz-table v-bind="bind('T1')({ page: 1, pageSize: 10 })" />

    <dz-btn
      title="外部修改page"
      @click="setState('T1')({ page: 10, pageSize: 10 })"
    />
    <dz-btn title="外部修改page" @click="setState('T1')({ page: 10 })" /> -->

    <!-- 其他方案 把 page 视为与 State 平级的 props -->
    <!--  -->
  </v>
</template>
