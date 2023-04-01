<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">
      <SideBar v-if="showSideBar"/>
      <div class="w-full pl-0 lg:pl-64 min-h-screen" id="main-content">
        <Navbar v-if="showNavbar" />
        <RouterView/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {RouterView} from 'vue-router'
import SideBar from "@/components/SideBar.vue";
import Navbar from "@/components/Navbar.vue";
import {computed} from "vue";
import router from "@/router";

const showSideBar = computed(() => {
  return router.currentRoute.value.meta.sidebar ?? true
});

const showNavbar = computed(() => {
  return router.currentRoute.value.meta.navbar ?? true
});
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

</style>
