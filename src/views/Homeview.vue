<script setup lang="ts">
import bgImage from '@/assets/bg.png'
import FilterBar from '@/components/Filterbar.vue'
</script>

<template>
  <div
    class="home-background"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="pt-40 text-center">
      <h1 class="text-3xl font-bold text-black font-sans ">
        DEFINE YOUR <span class="font-bold italic">SPOT</span>
      </h1>
      <p class="font-bold text-4xl text-black">DEFINE YOUR POT</p>

      <p class="text-2xl">Enhance your plants with pots from our collection—all made for the beauty of plants.</p> 
    </div>
    <div class="fixed bottom-12 left-0 right-0 text-center">
      <FilterBar /> </div>
  </div>
</template>

<style scoped>
.home-background {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: calc(100vh - 4rem); /* 4rem = 64px (tinggi navbar) */
  width: 100%;
}
</style>