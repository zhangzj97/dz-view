<script setup lang="ts">
import { VxeTable, VxeColumn } from 'vxe-table';
import 'vxe-table/lib/style.css';

defineProps<{
  schema?: any[] | any;
  baseList?: any[];
  className?: string;
  moduleName?: string;
}>();
</script>

<template>
  <vxe-table
    class="dz-table"
    :class="[className || 'dz-table-scrollbar']"
    stripe
    border
    round
    height="auto"
    :column-config="{ isCurrent: true, isHover: true, resizable: true }"
    :row-config="{ isCurrent: true, isHover: true }"
    :data="baseList"
    show-header-overflow
    show-overflow
  >
    <vxe-column type="seq" width="60"></vxe-column>
    <vxe-column type="radio" width="60"></vxe-column>
    <vxe-column type="checkbox" width="60"></vxe-column>

    <template v-for="(item, index) of schema" :key="index">
      <vxe-column :field="item.field" :title="item.title">
        <template v-if="item.tooltip" #header>
          <!-- Todo 由于父级 -->
          <!-- 存在问题 -->
          <dz-view row size="h-grow" :position="item.position">
            <dz-popover :tooltip="item.tooltip">
              <dz-view one size="w-6" position="5">
                <dz-icon size="4" icon="ic:outline-info" />
              </dz-view>
            </dz-popover>
            <dz-view one size="w-grow" position="5">
              <dz-font>{{ item.title }}</dz-font>
            </dz-view>
          </dz-view>
          <!-- 存在问题 -->
        </template>
        <template #default="{ row }">
          <component :is="item.component()" :cellOption="item.cellOption" :customOption="item.customOption" :propsRow="row" :field="item.field"></component>
        </template>
      </vxe-column>
    </template>

    <template #empty>
      <span style="color: red">
        <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" />
        <p>没有更多数据了！</p>
      </span>
    </template>
  </vxe-table>
</template>

<style scoped lang="scss">
/*滚动条整体部分*/
.dz-table.dz-table-scrollbar ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
/*滚动条的轨道*/
.dz-table.dz-table-scrollbar ::-webkit-scrollbar-track {
  background-color: #ffffff;
}
/*滚动条里面的小方块，能向上向下移动*/
.dz-table.dz-table-scrollbar ::-webkit-scrollbar-thumb {
  background-color: #bfbfbf;
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
.dz-table.dz-table-scrollbar ::-webkit-scrollbar-thumb:hover {
  background-color: #a8a8a8;
}
.dz-table.dz-table-scrollbar ::-webkit-scrollbar-thumb:active {
  background-color: #787878;
}
/*边角，即两个滚动条的交汇处*/
.dz-table.dz-table-scrollbar ::-webkit-scrollbar-corner {
  background-color: #ffffff;
}
</style>
