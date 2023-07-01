<script setup lang="ts">
const drawerState = reactive<any>({
  visible: false,
  fullscreen: false,
});

const toggleVisible = () => {
  drawerState.visible = !drawerState.visible;
};
</script>

<template>
  <v
    s="w-12 h-16"
    desc="plugin-modal"
    hover="hover:bg-gray-100"
    pointer
    @click="toggleVisible"
  >
    <dz-icon s="w-12 h-12" icon="ic:round-desk" class="scale-50" />
  </v>

  <dz-drawer
    v-model:state="drawerState"
    position="top"
    s="w-[80vw] h-[10vh]"
    w="max-w-[60vw] min-h-[30vh]"
    col
    title="988"
  >
    <v s="w-fit h-fit" w="gap-2">
      <dz-popover tooltip="tooltip">
        <dz-btn title="tooltip" />
      </dz-popover>

      <dz-popover trigger="click">
        <dz-btn title="popover" />
        <template #content>
          <v s="w-12 h-12" class="bg-red-400" />
        </template>
      </dz-popover>
    </v>

    <template #footer>
      <v s="w-grow h-10" w="gap-2">
        <v s="w-grow h-10" space />
        <dz-btn text="确定" @click="toggleVisible" />
        <dz-btn text="取消" @click="toggleVisible" />
        <v s="w-2 h-10" space />
      </v>
    </template>
  </dz-drawer>
</template>
