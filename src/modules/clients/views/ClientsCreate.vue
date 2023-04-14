<script setup>
import FormComponent from '@/components/form/FormComponent.vue'
import { useClientes } from '../composables/useClients'

const { labelFormCrear, cliente, guardarCliente } = useClientes()
</script>

<template>
  <Toast />
  <FormComponent
    :labelForm="labelFormCrear"
    :formData="cliente"
    :functGuardar="guardarCliente"
  ></FormComponent>
</template>
