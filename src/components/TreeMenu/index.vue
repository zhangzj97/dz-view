<script setup lang="ts" name="TreeMenu">
import { useRouter } from 'vue-router';
import TreeMenuItem from './components/TreeMenuItem/index.vue';

const router = useRouter();

const props = defineProps<{
  list: MenuDTO[];
  activeParentId?: string | number;
  activeListMap?: Record<string, boolean>;
}>();

const menuState = reactive<{
  treeList: MenuDTO[];
  isStableFlag: boolean;
  isCollapse: boolean;

  activeChildrenList: MenuDTO[];
  activeListMap: Record<string, boolean>;
  activeId: string;
  activeParentId: string | number;
}>({
  treeList: [],
  isStableFlag: false,
  isCollapse: false,

  activeChildrenList: [],
  activeListMap: {},
  activeId: '',
  activeParentId: '',
});

onMounted(() => {
  menuState.treeList = props.list;
});

watch(
  () => props.list,
  () => {
    menuState.treeList = props.list;
  }
);

watch(
  () => props.activeParentId,
  value => {
    if (value !== menuState.activeParentId) {
      menuState.activeId = '';
    }
  }
);

const handleClick = (ev: Event, entity: MenuDTO) => {
  const { url, children } = entity;
  console.log({ path: url });
  if (Array.isArray(children)) return;
  router.push({ path: url });
};

const handleMouseenter = (ev: Event, entity: MenuDTO) => {
  menuState.isStableFlag = true;
  const { id, children, path, parentId } = entity;
  const activeList = (path as string).split(',');
  menuState.activeListMap = {};
  activeList.forEach(item => (menuState.activeListMap[item] = true));

  menuState.activeChildrenList = children || [];
  menuState.activeId = id;
  menuState.activeParentId = parentId as string;
};

const handleMouseleave = (ev: Event, entity: MenuDTO) => { };

const hiddenChildrenContainer = () => {
  menuState.activeId = '';
};
</script>

<script lang="ts">
export default {
  name: 'TreeMenu',
};
</script>

<template>
  <FlexContainer @mouseleave="hiddenChildrenContainer" class="h-full">
    <FlexContainer class="h-full overflow-y-auto">
      <TreeMenuItem class="animate-slide-in-from-right" :style="{ '--index': index }"
        v-for="(item, index) of menuState.treeList" :key="item.id" :id="item.id" :title="item.title ?? ''"
        :propsRow="item" :avatar="item.avatar ?? ''" :isChildren="!!(item.children && item.children?.length > 0)"
        :isActive="!!menuState.activeListMap[item.id]" :isCollapse="menuState.isCollapse" @click="handleClick"
        @mouseenter="handleMouseenter" @mouseleave="handleMouseleave" />
    </FlexContainer>

    <FlexContainer class="absolute top-0 shadow-lg left-full" v-show="!!menuState.activeId"
      v-if="menuState.activeChildrenList?.length > 0" @mouseleave="hiddenChildrenContainer">
      <FlexContainer class="top-0 bg-slate-300" :style="{ height: 'calc(100vh - 128px)' }">
        <TreeMenu :list="menuState.activeChildrenList" :activeParentId="menuState.activeId" />
      </FlexContainer>
    </FlexContainer>
  </FlexContainer>
</template>

<style lang="scss" scoped>
.animate-slide-in-from-right {
  animation-name: slide-in-from-right;
  animation-duration: calc(var(--index) * 100ms + 300ms);
  animation-timing-function: ease-in;
  @apply transition-transform;
}

@keyframes slide-in-from-right {
  0% {
    transform: translateX(64px);
    opacity: 0;
  }

  20% {
    transform: translateX(16px);
    opacity: 0.5;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
