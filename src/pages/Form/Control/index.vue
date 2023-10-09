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

    <!-- <dz-btn
      :title="'1'"
      @click="
        bind('Time').setValue(String(Date.now()));
        bind('Time').setPayload({ defaultValue: String(Date.now()) });
      "
    />
    <dz-btn :title="'2'" @click="bind('Time').setValue(String(Date.now()))" /> -->
    <v s="w-grow h-fit" grid w="px-4">
      <dz-control s="w-1/2 h-fit" v-bind="bind('TimeRange', Control.Base.TimeRange({ test: true }))" />
      <dz-control s="w-1/2 h-fit" v-bind="bind('TimeRangePop', Control.Base.TimeRangePop({ test: true }))" />
      <dz-control s="w-1/2 h-fit" v-bind="bind('Time', Control.Base.Time({ test: true }))" />
      <dz-control s="w-1/2 h-fit" v-bind="bind('TimePop', Control.Base.TimePop({ test: true }))" />
    </v>
    <v-space s="w-grow h-2" class="bg-red-500" />

    <v s="w-grow h-fit" grid w="px-4">
      <dz-control s="w-1/4 h-fit" v-bind="bind('Picker1', Control.Base.Picker({ test: true }))" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Picker2', Control.Base.PickerList({ test: true }))" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Picker3', Control.Base.PickerPop({ test: true }))" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Picker4', Control.Base.PickerListPop({ test: true }))" />
    </v>
    <v-space s="w-grow h-2" class="bg-red-500" />

    <v s="w-grow h-fit" grid w="px-4">
      <dz-control s="w-1/4 h-fit" v-bind="bind('String', Control.Base.String({ test: true }))" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Number', Control.Base.Number({ test: true }))" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Password', Control.Base.Password({ test: true }))" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Textarea', Control.Base.Textarea({ test: true }))" />
      <dz-control s="w-1/4 h-fit" v-bind="bind('Text', Control.Base.Text({ test: true }))" />
    </v>
    <v-space s="w-grow h-2" class="bg-red-500" />

    <v s="w-grow h-fit" grid w="px-4">
      <dz-control s="w-1/4 h-fit" v-bind="bind('JSON', Control.Json.Json({ test: true }))" />
    </v>
    <v-space s="w-grow h-2" class="bg-red-500" />
  </v>
</template>
