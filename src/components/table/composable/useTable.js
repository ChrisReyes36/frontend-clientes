import { FilterMatchMode } from 'primevue/api'
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

export const useTable = () => {
  const router = useRouter()
  const filters = ref({})

  onBeforeMount(() => {
    initFilters()
  })

  const initFilters = () => {
    filters.value = {
      global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    }
  }

  return {
    filters,
    goEdit: (name, id) => {
      router.push({ name, params: { id } })
    }
  }
}
