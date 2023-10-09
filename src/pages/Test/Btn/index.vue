<script setup lang="ts">
const { bind } = useBind();
</script>

<template>
  <v s="w-grow h-grow" text="Btn">
    <dz-btn title="test1" v-bind="bind('b1', {})"> </dz-btn>
    <dz-btn title="disable1" @click="() => bind('b1').setState({ disabled: true })"></dz-btn>
    <dz-btn title="disable2" @click="() => bind('b1').setState({ disabled: false })"></dz-btn>
    <dz-btn title="loading1" @click="() => bind('b1').setState({ loading: true })"></dz-btn>
    <dz-btn title="loading2" @click="() => bind('b1').setState({ loading: false })"></dz-btn>
  </v>
</template>
