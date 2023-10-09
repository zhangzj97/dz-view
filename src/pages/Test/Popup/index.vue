<script setup lang="ts">
const { bind } = useBind();

const a = ref();
</script>

<template>
  <v s="w-grow h-grow" col text="popup">
    <v s="w-grow h-grow" text="drawer">
      <dz-btn title="disable1" @click="() => bind('b1').setState({ disabled: true })"></dz-btn>
      <dz-btn title="disable2" @click="() => bind('b1').setState({ disabled: false })"></dz-btn>
      <dz-btn title="loading1" @click="() => bind('b1').setState({ loading: true })"></dz-btn>
      <dz-btn title="loading2" @click="() => bind('b1').setState({ loading: false })"></dz-btn>
      <dz-btn title="visible1" @click="() => bind('b1').setState({ visible: true })"></dz-btn>
      <dz-btn title="visible2" @click="() => bind('b1').setState({ visible: false })"></dz-btn>

      <dz-drawer v-bind="bind('b1', {})" />
    </v>

    <v s="w-grow h-grow" text="modal">
      <dz-btn title="disable1" @click="() => bind('b2').setState({ disabled: true })"></dz-btn>
      <dz-btn title="disable2" @click="() => bind('b2').setState({ disabled: false })"></dz-btn>
      <dz-btn title="loading1" @click="() => bind('b2').setState({ loading: true })"></dz-btn>
      <dz-btn title="loading2" @click="() => bind('b2').setState({ loading: false })"></dz-btn>
      <dz-btn title="visible1" @click="() => bind('b2').setState({ visible: true })"></dz-btn>
      <dz-btn title="visible2" @click="() => bind('b2').setState({ visible: false })"></dz-btn>
      <dz-btn title="visible2" @click="a = true"></dz-btn>

      <dz-modal v-bind="bind('b2', {})" />
    </v>

    <v s="w-grow h-grow" text="tooltip">
      <dz-btn title="disable1" @click="() => bind('b3').setState({ disabled: true })"></dz-btn>
      <dz-btn title="disable2" @click="() => bind('b3').setState({ disabled: false })"></dz-btn>
      <dz-btn title="loading1" @click="() => bind('b3').setState({ loading: true })"></dz-btn>
      <dz-btn title="loading2" @click="() => bind('b3').setState({ loading: false })"></dz-btn>
      <dz-btn title="visible1" @click="() => bind('b3').setState({ visible: true })"></dz-btn>
      <dz-btn title="visible2" @click="() => bind('b3').setState({ visible: false })"></dz-btn>

      <dz-btn title="31-v1" @click="() => bind('b31').setState({ visible: true })"></dz-btn>
      <dz-btn title="31-v2" @click="() => bind('b31').setState({ visible: false })"></dz-btn>

      <dz-btn title="32-v1" @click="() => bind('b32').setState({ visible: true })"></dz-btn>
      <dz-btn title="32-v2" @click="() => bind('b32').setState({ visible: false })"></dz-btn>
      <dz-btn title="33-v1" @click="() => bind('b33').setState({ visible: true })"></dz-btn>
      <dz-btn title="33-v2" @click="() => bind('b33').setState({ visible: false })"></dz-btn>

      <dz-popover v-bind="bind('b31', {})">
        <v s="w-fit h-fit" v="mouse-gray">
          <v-icon v="8-75" icon="mdi:ab-testing" />
        </v>
        <template #body> 123</template>
      </dz-popover>

      <dz-popover trigger="click" v-bind="bind('b32', {})">
        <v s="w-fit h-fit" v="mouse-gray">
          <v-icon v="8-75" icon="mdi:ab-testing" />
        </v>
        <template #body> 123</template>
      </dz-popover>

      <dz-popover tooltip="0000" v-bind="bind('b33', {})">
        <v s="w-fit h-fit" v="mouse-gray">
          <v-icon v="8-75" icon="mdi:ab-testing" />
        </v>
      </dz-popover>

      <dz-popover confirm="0000" v-bind="bind('b41', {})">
        <v s="w-fit h-fit" v="mouse-gray">
          <v-icon v="8-75" icon="mdi:ab-testing" />
        </v>
      </dz-popover>
    </v>
  </v>
</template>
