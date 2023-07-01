<script setup lang="ts">
const profileState = reactive<any>({
  showPopover: false,
});

const tooglePopover = () => {
  profileState.showPopover = !profileState.showPopover;
};
</script>

<template>
  <v s="w-48 h-16" hover="hover:bg-gray-100" pointer>
    <v s="w-fit h-fit" @click="tooglePopover">
      <dz-icon
        s="w-16 h-16"
        class="scale-50 rounded-full"
        src="//iconfont.alicdn.com/p/illus/preview_image/lwvMdbm1khWH/63a475cc-2ad6-4048-a268-dea0a41d9517.png"
      />
      <v s="w-32 h-fit" col>
        <dz-text t="text-sm font-bold">管理员管理员</dz-text>
        <dz-text t="text-xs text-green-600">在线</dz-text>
      </v>
    </v>
    <v
      s="w-40 h-fit"
      col
      absolute
      class="p-2 gap-2 translate-y-[80px] bg-white z-[9999] border-[1px] origin-top transition-all"
      :class="[profileState.showPopover ? '' : 'scale-0']"
    >
      <dz-btn text="退出登录" />
      <dz-btn text="重置密码" />
    </v>
  </v>
</template>
