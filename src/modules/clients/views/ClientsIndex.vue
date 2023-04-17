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
  >
    <template v-slot:columnas-formateadas>
      <Column
        field="sueldo"
        header="Sueldo"
        :sortable="true"
        headerStyle="width:25%; min-width:10rem;"
      >
        <template #body="{ data }"> ${{ data.sueldo }} </template>
      </Column>
    </template>
  </DataTableVue>
</template>
