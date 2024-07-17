export function useGithubSearch() {
  const loading = ref(false)
  const searchResults = ref([])

  async function search(q: string) {
    loading.value = true
    try {
      const data = await $fetch<any[]>('/api/github-search', {
        params: { q },
      })
      searchResults.value = data
      return data
    } catch (error) {
      console.error("Erreur lors de la recherche d'utilisateurs:", error)
      return []
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    searchResults,
    search
  }
}
