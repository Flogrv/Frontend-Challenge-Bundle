
<template>
  <div class="flex justify-between bg-[url('/img/hero-image-github-profile.png')] bg-cover bg-center min-h-60">
    <div class="mx-auto h-auto mt-6 w-[500px]">
      <UiInput @search-results="emitSearchResults" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
const emit = defineEmits(['search-results']);

function emitSearchResults(results: any[]) {
  emit('search-results', results);
}
</script>
