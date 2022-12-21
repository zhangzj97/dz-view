<script setup lang="ts" name="App">
import LayoutPage from './layouts/LayoutPage/index.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
router.beforeEach((to, from, next) => {
  // 这个方法在后面会写
  // store.dispatch('setRouter', { to, from }).then(() => next())
  console.log('beforeEach');
  next();
});
</script>

<template>
  <LayoutPage class="bg-gray-100">
    <router-view v-slot="{ Component }">
      <transition name="page-fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </LayoutPage>
</template>

<style lang="scss">
@import url(./assets/index.scss);

.bg-page {
  background-position-x: -280px;
  background-size: calc(100% + 280px);
  background-repeat: no-repeat;

  position: absolute;
  width: 100%;
  height: 1000px;
}
</style>

<style lang="scss">
@import url(animate.css);
</style>

<style>
/* Test */
.dz-flex-container {
  /* opacity: 0.5; */
}

.dz-flex-container:hover {
  /* opacity: 0.5; */
}
</style>

<style>
.page-fade-enter-active {
  animation: page-fade 1s;
}

.page-fade-leave-active {
  animation: page-fade-out 1s;
}

@keyframes page-fade {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateX(1px);
  }
}

@keyframes page-fade-out {
  from {
    transform: translateX(0);
    opacity: 1;
  }

  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
