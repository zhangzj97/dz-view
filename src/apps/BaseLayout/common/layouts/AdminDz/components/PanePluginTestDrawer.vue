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
    <dz-icon s="w-12 h-12" icon="mdi:test-tube" class="scale-50" />
  </v>

  <dz-modal
    v-model:state="drawerState"
    s="w-[70vw] h-fit"
    w="max-h-[60vh] min-h-[30vh]"
    col
    title="988"
  >
    <v s="w-12 h-[20vh]" class="bg-red-500"> </v>
    <v s="w-12 h-[20vh]" class="bg-red-500"> </v>
    <v s="w-12 h-[20vh]" class="bg-red-500"> </v>
    <v s="w-12 h-[20vh]" class="bg-red-500"> </v>
    <v s="w-12 h-[20vh]" class="bg-red-500"> </v>
    <v s="w-12 h-[20vh]" class="bg-red-500"> </v>
    <v s="w-12 h-[20vh]" class="bg-red-500"> </v>
    <v s="w-12 h-[20vh]" class="bg-red-500"> </v>

    <template #footer>
      <v s="w-grow h-10" w="gap-2">
        <v s="w-grow h-10" space />
        <dz-btn text="确定" />
        <dz-btn text="取消" />
        <v s="w-2 h-10" space />
      </v>
    </template>
  </dz-modal>
</template>
