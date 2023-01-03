<script setup lang="ts" name="LayoutPage">
import DzFlex from '@/components/DzFlex/index.vue';

const layoutState = reactive<{
  rowList: any;
}>({
  rowList: [
    { h: 'h-2', children: [{ w: 'w-full', component: DzFlex, props: { testTitle: 'Top01 LoadingBar' } }] },
    { h: 'h-8', children: [{ w: 'w-full', component: DzFlex, props: { testTitle: 'Top02 NoticeBar' } }] },
    { h: 'h-16', children: [{ w: 'w-full', component: DzFlex, props: { testTitle: 'Top03 SearchBar' } }] },
    { h: 'h-16', children: [{ w: 'w-full', component: DzFlex, props: { testTitle: 'Top04 AppNavBar' } }] },

    {
      h: 'h-grow',
      children: [
        { w: 'w-16', component: DzFlex, props: { testTitle: 'L01' } },
        { w: 'w-64', component: DzFlex, props: { testTitle: 'L02' } },
        {
          w: 'w-grow',
          children: [
            { h: 'h-16', component: DzFlex, props: { testTitle: 'CTop01 AvatarBar' } },
            { h: 'h-16', component: DzFlex, props: { testTitle: 'CTop02 RouteTab' } },
            { h: 'h-16', component: DzFlex, props: { testTitle: 'CTop03 BreadCrumb' } },
            { h: 'h-grow', type: 'slot', component: DzFlex, props: { testTitle: 'Body' } },
          ],
        },
        { w: 'w-64', component: DzFlex, props: { testTitle: 'R01' } },
      ],
    },

    { h: 'h-16', children: [{ w: 'w-full', component: DzFlex, props: { testTitle: 'Top05 Footer' } }] },
    { h: 'h-16', children: [{ w: 'w-full', component: DzFlex, props: { testTitle: 'Top06 Copyright' } }] },
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
