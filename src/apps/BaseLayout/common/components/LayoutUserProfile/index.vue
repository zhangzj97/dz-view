<script setup lang="ts"></script>

<template>
  <dz-popover trigger="click">
    <v s="w-48 h-16" v="mouse-gray">
      <v s="w-fit h-fit">
        <v-icon
          v="16-50"
          class="rounded-full"
          src="//iconfont.alicdn.com/p/illus/preview_image/lwvMdbm1khWH/63a475cc-2ad6-4048-a268-dea0a41d9517.png"
        />
        <v s="w-32 h-fit" col>
          <v-text t="text-sm font-bold" text="管理员管理员" />
          <v-text t="text-xs text-green-600" text="在线" />
        </v>
      </v>
    </v>

    <template #body>
      <v s="w-fit h-fit" col>
        <dz-btn status="normal" title="用户信息" />
        <dz-btn status="normal" title="修改密码" />
        <v s="w-grow h-[0.5px]" class="bg-gray-300" />
        <dz-btn status="normal" title="退出登录" />
      </v>
    </template>
  </dz-popover>
</template>
