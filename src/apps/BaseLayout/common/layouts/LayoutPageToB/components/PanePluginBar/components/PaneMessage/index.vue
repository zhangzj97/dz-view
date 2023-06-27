<script setup lang="ts">
import { useModal } from '@/hooks/useModal';
const { visible: visible01, setVisible: setVisible01 } = useModal();
const { visible: visible02, setVisible: setVisible02 } = useModal();

const updateVisible01 = (value: boolean) => {
  setVisible01({ visible: value });
};

const updateVisible02 = (value: boolean) => {
  setVisible02({ visible: value });
};

const messageState = reactive({
  newCount: 1,
});

const countTtext = computed(() => {
  return messageState.newCount > 99 ? '99+' : String(messageState.newCount);
});

const showModal = () => {
  setVisible01({ visible: true });
  setVisible02({ visible: true });
};
</script>

<template>
  <dz-popover tooltip="点击弹出信息通知" placement="bottom">
    <dz-view
      one
      pointer
      size="h-grow"
      position="5"
      transition
      :wrapper-class="['my-2', 'rounded-full', 'hover:bg-gray-100']"
      @click="showModal"
    >
      <dz-icon size="6" icon="ic:round-notifications-none" />
      <div
        v-if="messageState.newCount > 0"
        class="pane-message-badge"
        :class="['px-1', 'top-2 left-7']"
      >
        <dz-font xs color="text-white">{{ countTtext }}</dz-font>
      </div>
    </dz-view>
  </dz-popover>

  <dz-modal title="123" :visible="visible01" @updateVisible="updateVisible01" />

  <dz-modal
    title="123"
    :visible="visible02"
    drawer
    @updateVisible="updateVisible02"
  />
</template>

<style scoped>
.pane-message-badge {
  @apply absolute px-1 rounded-lg bg-red-500 w-auto h-auto transform scale-90 cursor-pointer select-none;
}
</style>
