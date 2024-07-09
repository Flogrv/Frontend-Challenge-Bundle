<script setup lang="ts">
const loading = ref(false)
const selected = ref()

async function search (q: string) {
    loading.value = true

    const users = await $fetch<any[]>('https://jsonplaceholder.typicode.com/users', { params: { q, } })

    loading.value = false
    const limitedUsers = users.slice(0, 8)

    return limitedUsers
}
</script>

<template>
  <UInputMenu
    v-model="selected"
    :search="search"
    :loading="loading"
    search-lazy
    :debounce="300"
    icon="i-heroicons-magnifying-glass-20-solid"
    placeholder="Search for a user..."
    option-attribute="name"
    trailing-icon="none"
    by="id"
    class="w-full max-w-4xl"
    size="xl"
  >
    <template #option="{ option: user }">
      <div class="flex items-center">
        <UAvatar v-if="user.avatar" :src="user.avatar" size="sm" class="mr-2" />
        <span>{{ user.name }}</span>
      </div>
    </template>
  </UInputMenu>
</template>


