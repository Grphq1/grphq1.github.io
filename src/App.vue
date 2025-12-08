<script setup lang="ts">
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="p-sp-3 font-primary md:p-sp-5">
    <main class="container mx-auto">
      <RouterView />
      <Footer />
    </main>
  </div>
</template>
