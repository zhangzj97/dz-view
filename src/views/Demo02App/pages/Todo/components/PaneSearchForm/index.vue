<script setup lang="ts" name="PaneSearchForm"></script>

<template>
  <dz-row row-item>
    <dz-row row-item class="h-96">
      <dz-flex test-title="新增按钮"></dz-flex>
    </dz-row>
    <dz-row row-item class="h-16">
      <dz-flex test-title="菜单"></dz-flex>
      <dz-flex test-title="重要"></dz-flex>
      <dz-flex test-title="待完成"></dz-flex>
      <dz-flex test-title="已删除"></dz-flex>
    </dz-row>

    <dz-row row-item class="h-0 overflow-auto scrollbar-hidden h-grow">
      <dz-row row-item class="w-full">
        <dz-flex class="" test-title="更多"></dz-flex>
      </dz-row>
    </dz-row>
  </dz-row>
</template>
