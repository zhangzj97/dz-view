<script setup lang="ts">
const { bind0, setState0, getState0, store } = useStateStore();
</script>

<template>
  <v s="w-grow h-grow" text="Card01">
    <dz-btn
      title="visible-toggle"
      @click="setState0('P1')({ visible: !getState0('P1').visible })"
    />

    <dz-btn title="visible-true" @click="setState0('P1')({ visible: true })" />
    <dz-btn
      title="visible-false"
      @click="setState0('P1')({ loading: false })"
    />

    <v s="">
      <pre>{{ store }}</pre>
    </v>

    <!-- <dz-btn title="Target" v-bind="bind0('P1')({ visible: false })" /> -->
    <!-- <dz-modal title="Target" v-bind="bind0('P1')({ visible: false })" /> -->
    <dz-drawer title="Target" v-bind="bind0('P1')({ visible: false })" />
  </v>
</template>
