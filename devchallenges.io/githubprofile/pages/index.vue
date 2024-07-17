<template>
    <AppHeader @search-results="handleSearchResults" />
    <UContainer class="px-11 max-w-4xl sm:px-10">
        <AppMain :searchData="searchData" />
        <RepoCardcontainer :searchData="searchData"/>
        <AppFooter />
    </UContainer>
</template>

<script setup lang="ts">
const searchData = ref<any>(null);
function handleSearchResults(results: any) {
  searchData.value = results;
  console.log('Résultats de recherche reçus dans le grand-parent:', results);
}
</script>

