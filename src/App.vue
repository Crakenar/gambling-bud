<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <body>
<!--    <header>-->
<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
<!--    </header>-->
    <RouterView/>
  </body>
</template>

<style scoped>
body {
  background-image: url('./assets/header.png');
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

</style>
