import { onMounted, ref } from 'vue'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'
import api from '@/api/config'

export const useClientes = () => {
  const cargando = ref(true)
  const clientes = ref([])
  const cliente = ref({})
  const confirm = useConfirm()
  const labelButton = ref('Agregar Cliente')
  const labelFormCrear = ref('Crear Cliente')
  const labelFormEdit = ref('Editar Cliente')
  const labelTable = ref('Listado Clientes')
  const nameRutaAgregar = ref('clientes.crear')
  const nameRutaEditar = ref('clientes.editar')
  const router = useRouter()
  const toast = useToast()

  const obtenerClientes = async () => {
    const { data } = await api.get('/clientes')
    cargando.value = false
    clientes.value = data.clientes
  }

  const guardarCliente = async (formCliente) => {
    let response = {}
    try {
      if (!formCliente.id) {
        const { data } = await api.post('/clientes', formCliente)
        response = data
      } else {
        const { data } = await api.put(`/clientes/${formCliente.id}`, formCliente)
        response = data
      }
      if (response.ok) {
        router.push({ name: 'clientes.index' }).then(() => {
          toast.add({
            severity: 'success',
            summary: '¡Éxitoso!',
            detail: response.mensaje,
            life: 3000
          })
        })
      }
    } catch (e) {
      if (e.response.status === 400) {
        for (const key in e.response.data.errores) {
          toast.add({
            severity: 'error',
            summary: key,
            detail: e.response.data.errores[key][0],
            life: 4000
          })
        }
      } else {
        toast.add({
          severity: 'error',
          summary: '¡Error!',
          detail: e.response.data.message,
          life: 4000
        })
      }
    }
  }

  const obtenerCliente = async (id) => {
    const { data } = await api.get(`/clientes/${id}`)
    cliente.value = data.cliente
  }

  const eliminarCliente = async (id) => {
    confirm.require({
      message: '¿Seguro/a desea eliminar el cliente?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        const { data } = await api.delete(`/clientes/${id}`)
        if (data.ok) {
          toast.add({
            severity: 'success',
            summary: '¡Éxitoso!',
            detail: data.mensaje,
            life: 3000
          })
          await obtenerClientes()
        }
      }
    })
  }

  onMounted(async () => {
    await obtenerClientes()
  })

  return {
    cargando,
    cliente,
    clientes,
    eliminarCliente,
    guardarCliente,
    labelButton,
    labelFormCrear,
    labelFormEdit,
    labelTable,
    nameRutaAgregar,
    nameRutaEditar,
    obtenerCliente
  }
}
