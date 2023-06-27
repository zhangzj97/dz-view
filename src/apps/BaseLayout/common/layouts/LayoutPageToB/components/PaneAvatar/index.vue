<script setup lang="ts">
import { useService } from '@/hooks/useService';

const { dispatch } = useService();

const authState = reactive({
  SourceAuthState: {
    id: '',
    avatar: '',
    nickname: '',
    username: '',
    realname: '',
    token: '',
    expireTime: '',
  },

  list: [
    //
    { title: '切换用户' },
    { title: '用户信息' },
    { title: '退出登录' },
  ],
});

const refreshSourceAuthState = async () => {
  const { data } = await dispatch('SourceAuth.State', {});
  authState.SourceAuthState = data;
};

onBeforeMount(async () => {
  await refreshSourceAuthState();
});
</script>

<template>
  <dz-popover placement="bottom" rounded>
    <dz-view row pointer size="w-fit h-grow" wrapper-class="px-2">
      <dz-view one size="w-12 h-grow" position="5">
        <a-avatar :size="8 * 4" />
      </dz-view>
      <dz-view one size="w-20" position="4" class="w-0" overflow-hidden>
        <dz-font class="whitespace-nowrap">
          {{ authState.SourceAuthState.nickname }}
        </dz-font>
      </dz-view>
    </dz-view>

    <template #content>
      <dz-view col class="w-32" bg="bg-white">
        <template v-for="(item, index) of authState.list" :key="index">
          <dz-button size="w-grow" text :title="item.title" />
        </template>
      </dz-view>
    </template>
  </dz-popover>
</template>
