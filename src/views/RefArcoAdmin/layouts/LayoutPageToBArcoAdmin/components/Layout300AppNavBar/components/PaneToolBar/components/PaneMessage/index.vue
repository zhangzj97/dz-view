<script setup lang="ts">
const messageState = reactive({
  newCount: 1,
});

const countTtext = computed(() => {
  if (messageState.newCount > 99) {
    return '99+';
  } else {
    return String(messageState.newCount);
  }
});

const visible = ref<boolean>(false);

const showModal = () => {
  visible.value = true;
};

const handleOk = () => {
  visible.value = false;
};

const onClose = () => {
  visible.value = false;
};
</script>

<template>
  <dz-view one size="h-grow" position="5" wrapper-class="my-2 transition-all rounded-full hover:bg-gray-100">
    <dz-popover tooltip="点击弹出信息通知" placement="bottom">
      <dz-icon pointer size="6" icon="ic:round-notifications-none" @click="showModal" />
      <div v-if="messageState.newCount > 0" class="pane-message-badge" :class="['px-1', 'top-2 left-7']">
        <dz-font xs color="text-white">{{ countTtext }}</dz-font>
      </div>
    </dz-popover>
  </dz-view>

  <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>

  <a-drawer title="Basic Drawer" placement="right" :closable="false" :visible="visible" @close="onClose">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<style scoped>
.pane-message-badge {
  @apply absolute px-1 rounded-lg bg-red-500 w-auto h-auto transform scale-90 cursor-pointer select-none;
}
</style>
