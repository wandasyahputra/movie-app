<script setup>
import Home from "./pages/Home.vue";
import Navbar from "./components/Navbar.vue";
import FooterItem from "./components/Footer.vue";
</script>

<template>
  <div class="flex items-center flex-col">
    <Navbar />
    <Home />
    <FooterItem />
  </div>
</template>

<style scoped></style>
