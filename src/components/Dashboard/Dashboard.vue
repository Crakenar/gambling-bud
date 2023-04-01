<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">

<!--      <Sidebar />-->

      <div class="w-full pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">

        <Navbar />

        <div class="p-6 mb-20">
          <router-view />
        </div>

        <Footer />

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>

</style>
