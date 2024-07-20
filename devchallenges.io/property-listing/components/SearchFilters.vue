<script setup lang="ts">
import { usePropertyState } from '~/composables/propertyState'

const { selectedCountry, setSelectedCountry } = usePropertyState()
const countries = ['All stays', 'Norway', 'Finland', 'Sweden', 'Switzerland']
</script>


<template>
  <div
    class="relative bottom-[3.6rem] bg-secondy-dark opacity-95 rounded-xl border-opacity-50 border border-custom-grey text-custom-white p-8 flex flex-wrap justify-around items-center sm:mx-4">
    <ul class="flex gap-x-4 mb-2 sm:mb-0 flex-wrap">
      <li v-for="country in countries" :key="country" :class="[
        'cursor-pointer py-1 px-2 rounded-md',
        selectedCountry === country ? 'bg-gray-700' : 'hover:bg-custom-grey'
      ]" @click="setSelectedCountry(country)">
        {{ country }}
      </li>
    </ul>
    <div class="flex items-center gap-x-4 flex-wrap">
      <div class="flex items-center gap-x-2">
        <button class="w-12 h-6 bg-blue-600 rounded-full p-1 flex items-center">
          <div class="bg-white w-4 h-4 rounded-full shadow-md transform translate-x-6" />
        </button>
        <span>Superhost</span>
      </div>
      <div class="relative">
        <button class="bg-gray-700 py-1 px-3 rounded-md flex items-center">
          property type
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
