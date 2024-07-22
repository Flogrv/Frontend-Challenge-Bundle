<script setup lang="ts">
const { filteredProperties } = usePropertyState()
</script>

<template>
  <main>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h3 class="text-custom-white text-2xl font-semibold">Over 200 stays</h3>
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
        <ClientOnly>
          <CardProperty v-for="property in filteredProperties" :key="property.id" :property="property" />
        </ClientOnly>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 1280px;
}
</style>
