<script setup lang="ts" name="LayoutPage">
import DzFlex from '@/components/DzFlex/index.vue';

import Layout010101LoadingBar from './components/Layout010101LoadingBar/index.vue';
import Layout020101NoticeBar from './components/Layout020101NoticeBar/index.vue';
import Layout030101SearchBar from './components/Layout030101SearchBar/index.vue';
import Layout040101AppNavBar from './components/Layout040101AppNavBar/index.vue';
import Layout050101LeftSider from './components/Layout050101LeftSider/index.vue';
import Layout050201LeftSider from './components/Layout050201LeftSider/index.vue';
import Layout050301AvatarBar from './components/Layout050301AvatarBar/index.vue';
import Layout050302RouteTab from './components/Layout050302RouteTab/index.vue';
import Layout050303BreadCrumb from './components/Layout050303BreadCrumb/index.vue';
import Layout050401RightSider from './components/Layout050401RightSider/index.vue';
import Layout060101Footer from './components/Layout060101Footer/index.vue';
import Layout070101Copyright from './components/Layout070101Copyright/index.vue';

const layoutState = reactive<{
  rowList: any;
}>({
  rowList: [
    { h: 'h-2', children: [{ w: 'w-full', component: Layout010101LoadingBar }] },
    { h: 'h-8', children: [{ w: 'w-full', component: Layout020101NoticeBar }] },
    { h: 'h-16', children: [{ w: 'w-full', component: Layout030101SearchBar }] },
    { h: 'h-16', children: [{ w: 'w-full', component: Layout040101AppNavBar }] },

    {
      h: 'h-grow',
      children: [
        { w: 'w-16', component: Layout050101LeftSider },
        { w: 'w-64', component: Layout050201LeftSider },
        {
          w: 'w-grow',
          children: [
            { h: 'h-16', component: Layout050301AvatarBar },
            { h: 'h-16', component: Layout050302RouteTab },
            { h: 'h-16', component: Layout050303BreadCrumb },
            { h: 'h-grow', type: 'slot' },
          ],
        },
        { w: 'w-64', component: Layout050401RightSider },
      ],
    },

    { h: 'h-16', children: [{ w: 'w-full', component: Layout060101Footer }] },
    { h: 'h-16', children: [{ w: 'w-full', component: Layout070101Copyright }] },
  ],
});
</script>

<template>
  <div class="flex flex-col w-screen h-screen overflow-hidden bg-gray-100">
    <dz-row class="w-full" :class="[item.h]" v-for="(item, index) of layoutState.rowList" :key="index">
      <dz-row-item class="h-full" :class="[item2.w]" v-for="(item2, index2) of item.children" :key="index2">
        <component v-if="item2.component" :is="item2.component" v-bind="item2.props" />
        <template v-else>
          <dz-row class="w-full" :class="[item3.h]" v-for="(item3, index3) of item2.children" :key="index3" row-item>
            <slot v-if="item3.type === 'slot'"></slot>
            <component v-else :is="item3.component" v-bind="item3.props" />
          </dz-row>
        </template>
      </dz-row-item>
    </dz-row>
  </div>
</template>
