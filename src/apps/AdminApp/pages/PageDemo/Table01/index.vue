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
  <v s="w-grow h-grow" w="overflow-auto p-4" col>
    <v s="w-grow h-16" text="tab"></v>
    <v s="w-grow h-grow">
      <v s="w-grow h-grow" col>
        <dz-card s="w-grow h-fit" icon="mdi:close">
          <v s="w-grow h-fit" grid text="query">
            <v s="w-grow h-16" w="min-w-[160px]" text="form-item1" />
            <v s="w-grow h-16" w="min-w-[160px]" text="form-item2" />
            <v s="w-grow h-16" w="min-w-[160px]" text="form-item4" />
            <v s="w-grow h-16" w="min-w-[160px]" text="form-item4" />
            <v s="w-grow h-16" w="min-w-[160px]" text="form-item4" />
          </v>

          <template #action>
            <dz-btn type="primary" title="确认" @click="handleOkQuery" />
            <dz-btn title="重置" @clic="handleResetQuery" />
          </template>
        </dz-card>

        <v s="w-grow h-grow" text="list"> </v>
        <v s="w-grow h-footer" text="page"></v>
      </v>

      <dz-card s="w-[520px] h-grow" class="card-lg" title="编辑">
        <v s="w-grow h-grow" w="overflow-auto" class="shadow-inner" col>
          <v s="w-grow h-fit" col>
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

      <dz-card s="w-[300px] h-grow" class="card-lg" title="Test">
        <v s="w-grow h-grow" w=" overflow-auto " row grid class="shadow-inner">
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />

          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />

          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />

          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
        </v>

        <template #action>
          <dz-btn type="primary" title="确认" @click="handleOkForm" />
          <dz-btn title="重置" @clic="handleResetForm" />
        </template>
      </dz-card>

      <v s="h-grow w-[300px]" w="overflow-auto" class="justify-start" row>
        <dz-card s="w-[300px] h-fit" class="flex-shrink-0" title="Test">
          <v s="w-grow h-fit" w=" overflow-auto " row grid class="shadow-inner">
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />

            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />

            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />

            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
          </v>

          <template #action>
            <dz-btn type="primary" title="确认" @click="handleOkForm" />
            <dz-btn title="重置" @clic="handleResetForm" />
          </template>
        </dz-card>
      </v>
    </v>
  </v>
</template>
