<script setup lang="ts">
withDefaults(
  defineProps<
    { state: any; validator: any } & {
      validate?: any;
      reset?: any;
      setState?: any;
      setValue?: any;
    }
  >(),
  {}
);

const { bind0 } = useStateStore();
</script>

<template>
  <v s="w-grow h-grow" col>
    <v s="w-grow h-fit">
      <slot></slot>

      <!-- prettier-ignore -->
      <v s="w-fit h-8" w="px-1" v="mouse-gray" :class="[state.required && 'bg-blue-400']"
        @click="setState({ required: !state.required })">
        <v-text text="必" />
      </v>

      <!-- prettier-ignore -->
      <v s="w-fit h-8" w="px-1" v="mouse-gray" :class="[state.disabled && 'bg-blue-400']"
        @click="setState({ disabled: !state.disabled })">
        <v-text text="禁" />
      </v>

      <!-- prettier-ignore -->
      <v s="w-fit h-8" w="px-1" v="mouse-gray" :class="[state.error && 'bg-blue-400']"
        @click="setState({ error: !state.error })">
        <v-text text="错" />
      </v>

      <!-- prettier-ignore -->
      <v s="w-fit h-8" w="px-1" v="mouse-gray" @click="validate({ error: true })"><v-text text="验" /></v>
      <!-- prettier-ignore -->
      <v s="w-fit h-8" w="px-1" v="mouse-gray" @click="reset"><v-text text="清" /></v>

      <dz-popover v-bind="bind0('P1')()" trigger="hover">
        <v s="w-fit h-fit" v="mouse-gray">
          <v-icon v="8-50" icon="mdi:test-tube" />
        </v>
        <template #body>
          <slot name="test"></slot>
        </template>
      </dz-popover>
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
