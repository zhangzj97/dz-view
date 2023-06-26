<script setup lang="ts">
const ok01 = () => {
  console.log('ok01');
};

const cancle01 = () => {
  console.log('cancle01');
};
</script>

<template>
  <dz-view
    col
    size="h-grow"
    position="1"
    wrapper-class="p-4 m-4 border rounded-md shadow"
  >
    <dz-font>tooltip</dz-font>
    <dz-view row size="h-12" wrapper-class="gap-2">
      <dz-popover tooltip="点击弹出信息通知">
        <dz-button title="tooltip" />
      </dz-popover>
    </dz-view>

    <dz-font>confirm</dz-font>
    <dz-view row size="h-12" wrapper-class="gap-2">
      <dz-popover confirm="点击弹出信息通知" @ok="ok01" @cancle="cancle01">
        <dz-button title="confirm" />
      </dz-popover>
    </dz-view>

    <dz-font>popover</dz-font>
    <dz-view row size="h-12" wrapper-class="gap-2">
      <dz-popover>
        <dz-button title="hover" />
        <template #content>
          <dz-button title="hover" />
        </template>
      </dz-popover>
    </dz-view>
  </dz-view>
</template>
