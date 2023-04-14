<script setup>
import DataTableVue from '@/components/table/DataTableComponent.vue'
import { useClientes } from '../composables/useClients'
import columns from '@/services/columsTableClients'

const {
  cargando,
  clientes,
  eliminarCliente,
  labelButton,
  labelTable,
  nameRutaAgregar,
  nameRutaEditar
} = useClientes()
</script>

<template>
  <Toast />
  <ConfirmDialog />
  <DataTableVue
    :labelButtonAgregar="labelButton"
    :nameRutaAgregar="nameRutaAgregar"
    :nameRutaEditar="nameRutaEditar"
    :labelTable="labelTable"
    :cargando="cargando"
    :data="clientes"
    :columnas="columns"
    :functEliminar="eliminarCliente"
  ></DataTableVue>
</template>
