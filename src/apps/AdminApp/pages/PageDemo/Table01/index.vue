<script setup lang="ts">
const handleOkForm = () => {
  console.log('handleOkForm');
};
const handleResetForm = () => {
  console.log('handleResetForm');
};

const handleOkQuery = () => {
  console.log('handleOkQuery');
};
const handleResetQuery = () => {
  console.log('handleResetQuery');
};

const handleVisibleQuery = () => {
  console.log('handleVisibleQuery');
};
</script>

<template>
  <v s="w-grow h-grow" col class="p-4">
    <v s="w-grow h-16" text="tab"></v>
    <v s="w-grow h-grow">
      <v s="w-grow h-grow" col text="list">
        <v s="w-grow h-fit" grid text="query">
          <v s="w-fit h-16" w="min-w-[160px]" text="form-item1" />
          <v s="w-fit h-16" w="min-w-[160px]" text="form-item2" />
          <v s="w-fit h-16" w="min-w-[160px]" text="form-item4" />
          <v s="w-fit h-16" w="min-w-[160px]" text="form-item4" />
          <v s="w-fit h-16" w="min-w-[160px]" text="form-item4" />
          <v s="w-fit h-16" w="min-w-[160px]" text="form-item4" />
          <v s="w-fit h-16" w="min-w-[160px]" text="form-item4" />
          <v s="w-fit h-16" w="min-w-[160px]" text="form-item4" />
          <v s="w-fit h-16" w="min-w-[160px]" text="form-item4" />

          <v s="w-grow h-16" w="min-w-[160px] gap-2">
            <v-space s="w-grow h-grow" />
            <dz-btn type="primary" title="确认" @click="handleOkQuery" />
            <dz-btn title="重置" @clic="handleResetQuery" />
          </v>
        </v>
        <v s="w-grow h-grow" text="list"> </v>
        <v s="w-grow h-footer" text="page"></v>
      </v>

      <dz-card
        s="w-grow h-grow"
        class="bg-red-200"
        title="编辑"
        icon="mdi:close"
      >
        <v
          s="w-grow h-grow"
          w="min-w-[200px] min-h-[30vh] overflow-auto"
          class="shadow-inner"
          col
          text="form"
        >
          <v s="w-grow h-fit" col>
            <v s="w-grow h-16" text="form-item"></v>
            <v s="w-grow h-16" text="form-item"></v>
            <v s="w-grow h-16" text="form-item"></v>
            <v s="w-grow h-16" text="form-item"></v>
            <v s="w-grow h-16" text="form-item"></v>
            <v s="w-grow h-16" text="form-item"></v>
            <v s="w-grow h-16" text="form-item"></v>
            <v s="w-grow h-16" text="form-item"></v>
            <v s="w-grow h-16" text="form-item"></v>
            <v s="w-grow h-16" text="form-item"></v>
            <v s="w-grow h-16" text="form-item"></v>
            <v s="w-grow h-16" text="form-item"></v>
            <v s="w-grow h-16" text="form-item"></v>
          </v>
        </v>

        <template #action>
          <dz-btn type="primary" title="确认" @click="handleOkForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
        </template>
      </dz-card>
    </v>
  </v>
</template>
