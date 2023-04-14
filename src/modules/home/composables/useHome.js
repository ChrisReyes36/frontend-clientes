import { onMounted, ref } from 'vue'
import api from '@/api/config'

export const useInicio = () => {
  const contador = ref(0)

  const obtenerContadorClientes = async () => {
    const { data } = await api.get('/clientes')
    contador.value = data.clientes.length
  }

  onMounted(async () => {
    await obtenerContadorClientes()
  })

  return {
    contador
  }
}
