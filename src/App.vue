<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
</script>
<template>
  <div class="font-sans min-h-screen">
    <Navbar /> <main>
      <RouterView />
    </main>
  </div>
</template>
