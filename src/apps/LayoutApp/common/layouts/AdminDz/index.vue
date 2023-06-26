<script setup lang="ts"></script>

<template>
  <v col s="w-[100vw] h-[100vh]">
    <v s="w-grow h-16" desc="navbar">
      <v s="w-64 h-16" desc="logo">
        <v s="w-16 h-16" desc="logo-pic"></v>
        <v s="w-48 h-16" desc="logo-name"></v>
      </v>
      <v s="w-grow h-16" desc="space"></v>
      <v s="w-fit h-16" desc="plugin">
        <v s="w-12 h-16" desc="plugin-search"></v>
        <v s="w-12 h-16" desc="plugin-locale"></v>
        <v s="w-12 h-16" desc="plugin-dark"></v>
        <v s="w-12 h-16" desc="plugin-notice"></v>
        <v s="w-12 h-16" desc="plugin-full"></v>
        <v s="w-12 h-16" desc="plugin-setting"></v>
        <v s="w-12 h-16" desc="plugin-theme"></v>
      </v>
      <v s="w-16 h-16" desc="avatar"></v>
    </v>
    <v s="w-grow h-grow" desc="body">
      <v col s="w-64 h-grow" desc="sidebar">
        <v s="w-64 h-grow" desc="menu"></v>
        <v s="w-64 h-16" desc="menutool"></v>
      </v>
      <v col s="w-grow h-grow" desc="body">
        <v s="w-grow h-16" desc="breadcrumb"></v>
        <v s="w-grow h-grow" w="overflow-auto" desc="body">
          <slot></slot>
        </v>
      </v>
    </v>
  </v>
</template>
