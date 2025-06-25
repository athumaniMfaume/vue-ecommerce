<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <AHeader />

    <main class="flex-grow-1">
      <router-view />
    </main>

    <AFooter />
  </div>
</template>

<script setup>
import AHeader from './components/AHeader.vue'
import AFooter from './components/AFooter.vue'
</script>
