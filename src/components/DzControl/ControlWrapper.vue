<script setup lang="ts">
withDefaults(
  defineProps<
    { code: string; value: any; payload: any } & {
      validate?: any;
      reset?: any;
      getState?: any;
      setState?: any;
      setValue?: any;
      getValue?: any;
      getOption?: any;
      setOption?: any;
      refreshService?: any;
    }
  >(),
  { payload: () => ({}) }
);

const { bind } = useStateStore();
</script>

<template>
  <v s="w-grow h-grow" col>
    <v s="w-grow h-fit">
      <slot></slot>

      <template v-if="payload.test">
        <!-- prettier-ignore -->
        <v s="w-fit h-8" w="px-1" v="mouse-gray" :class="[payload.required && 'bg-blue-400']"
          @click="setState({ required: !payload.required })">
          <v-text text="必" />
        </v>

        <!-- prettier-ignore -->
        <v s="w-fit h-8" w="px-1" v="mouse-gray" :class="[payload.disabled && 'bg-blue-400']"
          @click="setState({ disabled: !payload.disabled })">
          <v-text text="禁" />
        </v>

        <!-- prettier-ignore -->
        <v s="w-fit h-8" w="px-1" v="mouse-gray" :class="[payload.error && 'bg-blue-400']"
          @click="setState({ error: !payload.error })">
          <v-text text="错" />
        </v>

        <!-- prettier-ignore -->
        <v s="w-fit h-8" w="px-1" v="mouse-gray" @click="validate({ error: true })"><v-text text="验" /></v>
        <!-- prettier-ignore -->
        <v s="w-fit h-8" w="px-1" v="mouse-gray" @click="setValue('')"><v-text text="''" /></v>
        <!-- prettier-ignore -->
        <v s="w-fit h-8" w="px-1" v="mouse-gray" @click="setValue(null)"><v-text text="Nu" /></v>
        <!-- prettier-ignore -->
        <v s="w-fit h-8" w="px-1" v="mouse-gray" @click="setValue([])"><v-text text="[]" /></v>
        <!-- prettier-ignore -->
        <v s="w-fit h-8" w="px-1" v="mouse-gray" @click="setValue({})"><v-text text="{}" /></v>

        <dz-popover v-bind="bind('P1')()" trigger="hover">
          <v s="w-fit h-fit" v="mouse-gray">
            <v-icon v="8-50" icon="mdi:test-tube" />
          </v>
          <template #body>
            <slot name="test">
              <v s="w-fit h-fit" w="p-2">
                {{ getValue() }}
              </v>
            </slot>
          </template>
        </dz-popover>
      </template>
    </v>

    <v s="w-grow h-fit" w="min-h-[4px]" :trans="payload.error ? 'max-h-[20px]' : 'max-h-[4px]'">
      <v-text
        v-if="payload?.error"
        t="text-red-500 text-sm"
        class="animate-[shakeX_1s_ease-in-out_1]"
        :text="payload?.validator?.result?.message"
      />
    </v>
  </v>
</template>

<style lang="scss">
@import url(../../assets/index.scss);
</style>
