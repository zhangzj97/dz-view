<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useSourceRouteTabTagStore } from '@/hooks/useSourceStore';
import { storeToRefs } from 'pinia';

const router = useRouter();

const { version } = storeToRefs(useSourceRouteTabTagStore());
const refresh = () => {
  const { getSource } = useSourceRouteTabTagStore();
  const { list } = getSource();
  routeState.list = list;
};

const routeState = reactive<any>({
  list: [],
  selectedKeys: [],
});

// 接收通知
watch(version, refresh);

// 初始化刷新
onMounted(async () => {
  refresh();
});

const handleClick = (item: any) => {
  const { route } = item;
  router.push({ path: route });
};

const { t } = useI18n();
</script>

<template>
  <dz-view
    one
    size="h-grow"
    position="5"
    wrapper-class="border-l-[1px] rouned border-gray-300 hover:bg-gray-100"
  >
    <dz-popover placement="bottom" rounded>
      <dz-icon pointer size="6" icon="ic:outline-file-copy" />
      <template #content>
        <!-- 菜单式路由选择 -->
        <dz-view col size="w-32" class="max-h-48" overflow bg="bg-white">
          <template v-for="(item, index) of routeState.list" :key="index">
            <dz-view
              one
              pointer
              size="h-8"
              position="5"
              class="hover:bg-gray-100 shrink-0"
              @click="handleClick(item)"
            >
              <dz-font pointer sm>
                {{ t(String(`@${item.scope}.ROUTE.${item.code}`)) }}
              </dz-font>
            </dz-view>
          </template>
        </dz-view>
        <!-- 菜单式路由选择 -->
      </template>
    </dz-popover>
  </dz-view>
</template>
