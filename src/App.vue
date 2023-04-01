<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">
      <SideBar/>
      <div class="w-full pl-0 lg:pl-64 min-h-screen" id="main-content">
        <Navbar />
        <RouterView/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import SideBar from "@/components/SideBar.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

</style>
