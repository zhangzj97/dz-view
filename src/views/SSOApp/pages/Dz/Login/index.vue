<script setup lang="ts">
const loginTest = () => {};

const login = () => {};
const sms = () => {};
const captcha = () => {};
</script>

<template>
  <dz-view one size="h-grow" wrapper-class="bg-green-300" position="5">
    <dz-view
      col
      size="h-[500px] w-[450px]"
      wrapper-class="bg-red-300"
      position="2"
    >
      <dz-font color="text-white" class="mt-[20px] mb-[40px] text-[28px]">
        登录
      </dz-font>

      <dz-font color="text-white" class="mt-[20px] mb-[40px] text-[28px]">
        回到应用
      </dz-font>

      <dz-view col size="h-fit">
        <dz-view row size="h-12" position="4">
          <dz-view one size="w-16">
            <dz-font sm color="text-white">手机</dz-font>
          </dz-view>
          <dz-view one size="w-grow">
            <a-input></a-input>
          </dz-view>
          <dz-view one size="w-12">
            <dz-button primary title="SMS" />
          </dz-view>
        </dz-view>
        <dz-view row size="h-12" position="4">
          <dz-view one size="w-16">
            <dz-font sm color="text-white">用户名</dz-font>
          </dz-view>
          <dz-view one>
            <a-input></a-input>
          </dz-view>
        </dz-view>
        <dz-view row size="h-12" position="4">
          <dz-view one size="w-16">
            <dz-font sm color="text-white">密码</dz-font>
          </dz-view>
          <dz-view one>
            <a-input></a-input>
          </dz-view>
        </dz-view>

        <dz-view row size="h-12" position="4">
          <dz-view one size="w-16">
            <dz-font sm color="text-white">验证码</dz-font>
          </dz-view>
          <dz-view one size="w-grow">
            <a-input></a-input>
          </dz-view>
          <dz-view one size="w-16 h-12">
            <dz-view one size="w-grow" bg="bg-blue-100"> </dz-view>
          </dz-view>
        </dz-view>

        <dz-view row size="h-12" position="4">
          <dz-view one size="w-16">
            <dz-font sm color="text-white">记住我</dz-font>
          </dz-view>
          <dz-view one size="w-grow"> </dz-view>

          <dz-view one size="w-16">
            <dz-font sm color="text-white">忘记密码</dz-font>
          </dz-view>
        </dz-view>

        <dz-view row size="h-12" position="5">
          <dz-button primary title="登录" />
          <dz-button primary title="游客登录" @click="loginTest" />
        </dz-view>

        <dz-view row size="h-12" position="5">
          <dz-button primary title="二维码登录" />
        </dz-view>

        <dz-view row size="h-16" position="5" wrapper-class="gap-1">
          <dz-button primary title="微信" />
          <dz-button primary title="QQ" />
          <dz-button primary title="钉钉" />
          <dz-button primary title="企业微信" />
        </dz-view>
      </dz-view>
    </dz-view>
  </dz-view>
</template>
