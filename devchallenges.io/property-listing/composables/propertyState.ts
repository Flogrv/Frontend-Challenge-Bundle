// composables/usePropertyState.ts
import { ref, computed, reactive } from 'vue'
import { useAsyncData, queryContent } from '#imports'

const state = reactive({
  selectedCountry: 'All stays',
  propertiesData: null as any,
  properties: computed(() => state.propertiesData?.body || []),
  filteredProperties: computed(() => {
    if (!state.properties) return []
    if (state.selectedCountry === 'All stays') {
      return state.properties
    }
    const filtered = state.properties.filter(property => property.location === state.selectedCountry)
    return filtered
  })
})

export function usePropertyState() {
  if (!state.propertiesData) {
    const { data } = useAsyncData('properties', () => queryContent('property-listing').findOne())
    state.propertiesData = data
  }

  const setSelectedCountry = (country: string) => {
    state.selectedCountry = country
  }

  return {
    selectedCountry: computed(() => state.selectedCountry),
    properties: computed(() => state.properties),
    filteredProperties: computed(() => state.filteredProperties),
    setSelectedCountry
  }
}
