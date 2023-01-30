<script setup lang="ts" name="Home"></script>

<template>
  <!-- 
  <div bg-x class="flex flex-row flex-grow-0 w-auto h-auto">
    <div bg-x class="flex flex-col flex-grow-0 w-auto h-auto"></div>
  </div>
   -->
  <div class="relative flex flex-row flex-grow-0 w-screen h-screen">
    <div class="relative flex flex-col flex-grow-0 w-full h-full overflow-hidden">
      <!-- page container -->
      <div bg-0 class="flex flex-row flex-grow-0 w-auto h-full shrink">
        <div bg-0 class="flex flex-col flex-grow w-0 h-auto shrink">
          <!-- page row -->
          <div bg-1 class="flex flex-row flex-grow-0 w-auto h-12">
            <div bg-1 class="flex flex-col flex-grow w-0 h-auto"></div>
          </div>
          <!-- page row -->
          <!-- page row -->
          <div bg-1 class="flex flex-row flex-grow-0 w-auto h-32">
            <div bg-1 class="flex flex-row flex-grow w-0 h-auto">
              <!-- page col -->
              <div bg-2 class="flex flex-row flex-grow-0 w-12 h-auto">
                <div bg-2 class="flex flex-col flex-grow w-0 h-auto">
                  <!-- dz-pane -->
                  <!-- dz-pane -->
                </div>
              </div>
              <!-- page col -->
              <!-- page col -->
              <div bg-2 class="flex flex-row flex-grow w-0 h-auto">
                <div bg-2 class="flex flex-col flex-grow w-0 h-auto">
                  <!-- dz-pane -->
                  <!-- dz-pane -->
                </div>
              </div>
              <!-- page col -->
              <!-- page col -->
              <div bg-2 class="flex flex-row flex-grow-0 w-12 h-auto">
                <div bg-2 class="flex flex-col flex-grow w-0 h-auto"></div>
              </div>
              <!-- page col -->
            </div>
          </div>
          <!-- page row -->
          <!-- page row -->
          <div bg-1 class="flex flex-row flex-grow-0 w-auto h-32">
            <div bg-1 class="flex flex-col flex-grow w-0 h-auto">
              <!-- page col -->
              <div bg-2 class="flex flex-row flex-grow w-auto h-0">
                <div bg-2 class="flex flex-col flex-grow w-0 h-auto">
                  <!-- dz-pane -->
                  <!-- dz-pane -->
                </div>
              </div>
              <!-- page col -->
              <!-- page col -->
              <div bg-2 class="flex flex-row flex-grow-0 w-auto h-12">
                <div bg-2 class="flex flex-col flex-grow w-0 h-auto"></div>
              </div>
              <!-- page col -->
            </div>
          </div>
          <!-- page row -->
          <!-- page row -->
          <div bg-1 class="flex flex-row flex-grow-0 w-auto h-32">
            <div bg-1 class="flex flex-col flex-grow w-0 h-auto">
              <!-- page col -->
              <div bg-2 class="flex flex-row flex-grow-0 w-auto h-12">
                <div bg-2 class="flex flex-col flex-grow w-0 h-auto"></div>
              </div>
              <!-- page col -->
              <!-- page col -->
              <div bg-2 class="flex flex-row flex-grow-0 w-auto h-12">
                <div bg-2 class="flex flex-col flex-grow w-0 h-auto"></div>
              </div>
              <!-- page col -->
            </div>
          </div>
          <!-- page row -->
        </div>
      </div>
      <!-- page container -->
    </div>
  </div>
</template>

<style>
[bg-0] {
  @apply border-4  border-slate-600;
  @apply bg-slate-300;
}

[bg-1] {
  @apply border-4 border-emerald-400;
  @apply bg-red-400;
}
[bg-2] {
  @apply border-4 border-blue-400;
  @apply bg-cyan-400;
}
[bg-3] {
  @apply border-4 border-pink-400;
  @apply bg-orange-400;
}

div::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
</style>
