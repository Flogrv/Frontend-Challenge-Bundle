import { ref, computed } from 'vue'
import { useAsyncData } from '#app'

export default function useProperties() {
  const selectedCountry = ref('All stays')
  const { data: propertiesData } = useAsyncData('properties', () => queryContent('property-listing').findOne())

  const properties = computed(() => propertiesData.value?.body || [])

  const filteredProperties = computed(() => {
    if (!properties.value) return []
    if (selectedCountry.value === 'All stays') {
      console.log("All properties:", properties.value)
      return properties.value
    }
    const filtered = properties.value.filter(property => property.location === selectedCountry.value)
    console.log(`Filtered properties for ${selectedCountry.value}:`, filtered)
    return filtered
  })

  const setSelectedCountry = (country: string) => {
    selectedCountry.value = country
    console.log("Selected country:", country)
    console.log("Filtered properties:", filteredProperties.value)
  }

  return {
    properties,
    selectedCountry,
    filteredProperties,
    setSelectedCountry
  }
}
