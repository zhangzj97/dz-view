<script setup lang="ts"></script>

<template>
  <dz-view
    col
    size="h-grow"
    position="1"
    wrapper-class="p-4 m-4 border rounded-md shadow"
  >
    <dz-font>type</dz-font>
    <dz-alert type="success" />
    <dz-alert type="error" />
    <dz-alert type="warn" />
    <dz-alert type="info" />

    <dz-font>size</dz-font>
    <dz-alert size="w-96" type="success" />
    <dz-alert size="w-96" type="error" />
    <dz-alert size="w-96" type="warn" />
    <dz-alert size="w-96" type="info" />

    <dz-font>title</dz-font>
    <dz-alert size="w-96" type="success" title="短短短短" />
    <dz-alert
      size="w-96"
      type="error"
      title="长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长"
    />

    <dz-font>message</dz-font>
    <dz-alert size="w-96" type="success" message="短短短短" />
    <dz-alert
      size="w-96"
      type="error"
      message="长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长"
    />

    <dz-font>title & message</dz-font>
    <dz-alert size="w-96" type="success" title="短短短短" message="短短短短" />
    <dz-alert
      size="w-96"
      type="error"
      title="短短短短"
      message="长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长"
    />

    <dz-alert
      size="w-96"
      type="success"
      title="长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长"
      message="短短短短"
    />
    <dz-alert
      size="w-96"
      type="error"
      title="长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长"
      message="长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长"
    />
  </dz-view>
</template>
