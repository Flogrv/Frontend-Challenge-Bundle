<template>
    <div v-if="firstUser" class="flex m-auto">
        <div class="flex flex-col sm:flex-row gap-4">
            <div class="relative xs:mr-8 bottom-4 flex-shrink-0 self-start">
                <UAvatar
                    :src="firstUser.avatar_url || 'https://avatars.githubusercontent.com/u/9919?s=200&v=4'"
                    size="3xl"
                    borderRadius="none"
                    :ui="{ rounded: 'rounded-md' }"
                    :style="{
                        boxShadow: '0 0 0 8px #20293a',
                    }"
                />
            </div>
            <div class="flex flex-col lg:flex-row m-auto lg:gap-5 ml-6">
                <uiSmallCard
                    class="mt-4 m-right-2"
                    v-for="(item, index) in infoItems"
                    :key="index"
                    :title="item.title"
                    :value="getUserInfo(item.title)"
                />
            </div>
        </div>
    </div>
    <div v-else class="m-auto mt-6">
        <p>Aucun résultat de recherche disponible</p>
    </div>
    <div v-if="firstUser" class="m-auto mt-6">
        <h1 class="text-3xl">{{firstUser.login}}</h1>
        <p class="text-gray-300 mt-2">{{firstUser.bio}}</p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  searchData: Array<{
    login: string;
    avatar_url?: string;
    followers?: number;
    following?: number;
    location?: string;
  }> | null
}>();

const firstUser = computed(() => props.searchData && props.searchData.length > 0 ? props.searchData[0] : null);

const infoItems = [
    { title: "Followers", value: "followers" },
    { title: "Following", value: "following" },
    { title: "Location", value: "location" },
];

function getUserInfo(key: string) {
    if (!firstUser.value) return 'N/A';
    return firstUser.value[key.toLowerCase() as keyof typeof firstUser.value]?.toString() || 'N/A';
}
</script>
