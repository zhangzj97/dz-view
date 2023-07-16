<script setup lang="ts">
withDefaults(
  defineProps<{
    state: any;
    validator: any;
  }>(),
  {}
);
</script>

<template>
  <v s="w-grow h-grow" col>
    <v s="w-grow h-fit">
      <slot></slot>
    </v>

    <v
      s="w-grow h-fit"
      w="min-h-[4px]"
      :trans="state.error ? 'max-h-[20px]' : 'max-h-[4px]'"
    >
      <v-text
        v-if="state?.error"
        t="text-red-500 text-sm"
        class="animate-[shakeX_1s_ease-in-out_1]"
        :text="validator?.result?.message"
      />
    </v>
  </v>
</template>

<style lang="scss">
@import url(../assets/index.scss);
</style>
