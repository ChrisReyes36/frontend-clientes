<script setup>
import FormComponent from '@/components/form/FormComponent.vue'
import { onMounted } from 'vue'
import { useClientes } from '../composables/useClients'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const { labelFormEdit, cliente, guardarCliente, obtenerCliente } = useClientes()

onMounted(async () => {
  await obtenerCliente(props.id)
})
</script>

<template>
  <Toast />
  <FormComponent
    :labelForm="labelFormEdit"
    :formData="cliente"
    :functGuardar="guardarCliente"
  ></FormComponent>
</template>
