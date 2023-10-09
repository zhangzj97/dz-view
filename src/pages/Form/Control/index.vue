<script setup lang="ts">
const { bind, Control } = useBind();
</script>

<template>
  <v s="w-grow h-grow" col>
    <v s="w-grow h-fit">
      <dz-btn title="i1" v-bind="bind('i1', {})" />
      <dz-btn title="i1 disabled" @click="bind('i1').setPayload({ disabled: !bind('i1').getPayload().disabled })" />
      <dz-btn title="i1 loading" @click="bind('i1').setPayload({ loading: !bind('i1').getPayload().loading })" />
    </v>
    <v-space s="w-grow h-2" class="bg-red-500" />

    <v s="w-grow h-fit">
      <dz-modal v-bind="bind('modal', {})"> <dz-btn title="btn" /> </dz-modal>
      <dz-drawer v-bind="bind('drawer', {})"> <dz-btn title="btn" /> </dz-drawer>

      <dz-btn title="modal" @click="bind('modal').setPayload({ visible: !bind('modal').getPayload().visible })" />
      <dz-btn title="drawer" @click="bind('drawer').setPayload({ visible: !bind('drawer').getPayload().visible })" />
    </v>
    <v-space s="w-grow h-2" class="bg-red-500" />

    <v s="w-grow h-fit">
      <dz-popover v-bind="bind('p1', {})">
        <dz-btn title="p1" />
        <template #body> 123</template>
      </dz-popover>
      <dz-popover v-bind="bind('p2', { trigger: 'click' })">
        <dz-btn title="p2" />
        <template #body> 123</template>
      </dz-popover>
      <dz-popover v-bind="bind('p3', { tooltip: '0000' })">
        <dz-btn title="p3" />
      </dz-popover>
      <dz-popover v-bind="bind('p4', { confirm: '0000' })">
        <dz-btn title="p4" />
      </dz-popover>

      <dz-btn title="p1" @click="bind('p1').setPayload({ visible: !bind('p1').getPayload().visible })" />
      <dz-btn title="p2" @click="bind('p2').setPayload({ visible: !bind('p2').getPayload().visible })" />
      <dz-btn title="p3" @click="bind('p3').setPayload({ visible: !bind('p3').getPayload().visible })" />
      <dz-btn title="p4" @click="bind('p4').setPayload({ visible: !bind('p4').getPayload().visible })" />
    </v>
    <v-space s="w-grow h-2" class="bg-red-500" />
  </v>
</template>
