<script setup lang="ts">
import { ref } from 'vue';
const loading = ref(false);
const selected = ref();
const emit = defineEmits(['search-results']);

async function search(q: string): Promise<any[]> {
    loading.value = true;
    try {
        const data = await $fetch<any[]>("/api/github-search", {
            params: { q },
        });
        emit('search-results', data);
        return data;
    } catch (error) {
        console.error("Erreur lors de la recherche d'utilisateurs:", error);
        return [];
    } finally {
        loading.value = false;
    }
}
</script>

<template>
    <div class="w-full custom-bg">
        <UInputMenu
            v-model="selected"
            :search="search"
            :loading="loading"
            search-lazy
            :debounce="300"
            icon="i-heroicons-magnifying-glass-20-solid"
            placeholder="username"
            option-attribute="login"
            trailing-icon="none"
            by="id"
            :ui="{
                rounded: 'rounded-xl',
            }"
            :uiMenu="{
                rounded: 'rounded-xl',
            }"
            size="xl"
            height="h-[50px]"
            class="focus:ring-2 focus:ring-blue-950"
        >
            <template #option="{ option: user }">
                <div class="flex items-center square-avatar space-x-4">
                    <UAvatar
                        v-if="user.avatar_url"
                        :src="user.avatar_url"
                        size="2xl"
                        borderRadius="none"
                        :ui="{ rounded: 'rounded-md' }"
                    />
                    <span class="text-2xl text-center">{{ user.login }}</span>
                    <span> </span>
                </div>
            </template>
        </UInputMenu>
    </div>
</template>
