<script setup lang="ts">
defineProps<{
  property: {
    id: number
    title: string
    description: string
    price: number
    rating: number
    location: string
    capacity?: {
      people?: number
      bedroom?: number
    }
    image: string
  }
}>()
</script>

<template>
  <article class="w-full max-w-[357px] mx-auto bg-primary-color rounded-xl border border-primary-accent mb-16">
    <header>
      <img :src="property.image" :alt="property.title" class="rounded-t-xl">
    </header>
    <section class="px-5">
      <h4 class="text-custom-white mt-5 font-semibold">{{ property.title }}</h4>
      <p class="text-custom-grey text-[13px] mt-2">{{ property.description }}</p>
      <div class="text-custom-grey flex items-center space-x-4 text-xs mt-4">
        <span v-if="property.capacity?.bedroom" class="flex items-center">
          <IconsHome />
          <span class="ml-2">{{ property.capacity.bedroom }} bedroom</span>
        </span>
        <span v-if="property.capacity?.people" class="flex items-center">
          <IconsGuest />
          <span class="ml-2">{{ property.capacity.people }} guests</span>
        </span>
      </div>
    </section>
    <footer class="p-5">
      <hr class="border-primary-accent">
      <div class="flex items-center space-x-4 text-xs mt-4 justify-between">
        <span class="text-xl text-custom-white">${{ property.price }}<span
            class="text-sm text-custom-grey">/night</span></span>
        <div class="flex items-center">
          <IconsStar />
          <span class="text-custom-white text-sm">{{ property.rating }}</span>
        </div>
      </div>
    </footer>
  </article>
</template>
