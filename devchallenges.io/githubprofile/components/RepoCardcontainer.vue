<template>
    <div v-if="firstUser" class="flex flex-wrap gap-9 mt-8">
        <RepoCard 
            v-for="repo in firstUser.top_repos" 
            :key="repo.name"
            :name="repo.name"
            :stars="repo.stars"
            :description="repo.description"
        />
    </div>
    <div v-else>

    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  searchData: Array<{
    login: string;
    top_repos: Array<{
      name: string;
      stars: number;
      url: string;
      updatetime: string;
      description: string;
    }>;
  }> | null
}>();

const firstUser = computed(() => {
    return props.searchData && props.searchData.length > 0 ? props.searchData[0] : null;
});
</script>
