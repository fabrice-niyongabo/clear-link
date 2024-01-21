<template>
  <section
    class="h-screen w-full"
    :style="{ backgroundImage: `url(${bgImage})`, backgroundSize: '100%' }"
  >
    <NavBar />
    <Contents />
  </section>
</template>
<script setup>
import bgImage from "@/assets/img/bg.png";
import NavBar from "./NavBar/index.vue";
import Contents from "./Contents/index.vue";
</script>
