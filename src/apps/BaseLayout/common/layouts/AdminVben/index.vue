<script setup lang="ts"></script>

<template>
  <v col s="w-[100vw] h-[100vh]">
    <v s="w-grow h-grow" desc="body bar">
      <v col s="w-64 h-grow" desc="sider bar">
        <v s="w-64 h-16" desc="logo">
          <v s="w-16 h-16" desc="logo-pic"></v>
          <v s="w-48 h-16" desc="logo-name"></v>
        </v>
        <v s="w-64 h-grow" desc="menu"></v>
      </v>
      <v col s="w-grow h-grow" desc="body">
        <v s="w-grow h-16" desc="navbar">
          <v s="w-16 h-16" desc="plugin-fold"></v>
          <v s="w-grow h-16" desc="breadcrumb"></v>
          <v s="w-fit h-16" desc="plugin">
            <v s="w-12 h-16" desc="plugin-search"></v>
            <v s="w-12 h-16" desc="plugin-notice"></v>
            <v s="w-12 h-16" desc="plugin-fullscreen"></v>
            <v s="w-12 h-16" desc="plugin-locale"></v>
          </v>
          <v s="w-48 h-16" desc="profile">
            <v s="w-16 h-16" desc="avatar"></v>
            <v s="w-32 h-16" desc="nickname"></v>
          </v>
          <v s="w-16 h-16" desc="plugin-setting"></v>
        </v>
        <v s="w-grow h-12" desc="tagbar">
          <v s="w-grow h-12" desc="taglist"></v>
          <v s="w-36 h-12" desc="tagtool">
            <v s="w-12 h-12" desc="tagtool-refresh"></v>
            <v s="w-12 h-12" desc="tagtool-list"></v>
            <v s="w-12 h-12" desc="tagtool-fullscreen"></v>
          </v>
        </v>
        <v s="w-grow h-grow" w="overflow-auto" desc="body">
          <slot></slot>
        </v>
      </v>
    </v>
  </v>
</template>
