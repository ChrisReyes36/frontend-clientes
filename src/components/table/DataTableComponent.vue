<script setup>
import { useTable } from './composable/useTable'

const props = defineProps({
  labelButtonAgregar: {
    type: String,
    default: null,
    required: true
  },
  nameRutaAgregar: {
    type: String,
    default: null,
    required: true
  },
  nameRutaEditar: {
    type: String,
    default: null,
    required: true
  },
  labelTable: {
    type: String,
    default: null,
    required: true
  },
  cargando: {
    type: Boolean,
    default: true,
    required: true
  },
  data: {
    type: Array,
    default: () => [],
    required: true
  },
  columnas: {
    type: Array,
    default: () => [],
    required: true
  },
  functEliminar: {
    type: Function,
    default: () => true,
    required: true
  }
})

const { filters, goEdit } = useTable()
</script>

<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <Toolbar class="mb-4">
          <template v-slot:start>
            <div class="my-2">
              <!-- <Button
                :label="props.labelButtonAgregar"
                icon="pi pi-plus"
                class="p-button-primary mr-2"
              /> -->
              <router-link
                :to="{ name: props.nameRutaAgregar }"
                class="p-button p-button-primary mr-2"
              >
                <i class="pi pi-plus"></i>
                {{ props.labelButtonAgregar }}
              </router-link>
            </div>
          </template>
        </Toolbar>

        <DataTable
          :value="props.data"
          dataKey="id"
          :paginator="true"
          :rows="10"
          :filters="filters"
          :loading="props.cargando"
          :rowsPerPageOptions="[5, 10, 25]"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando del {first} al {last} de {totalRecords} registros"
          responsiveLayout="scroll"
        >
          <template #header>
            <div
              class="flex flex-column md:flex-row md:justify-content-between md:align-items-center"
            >
              <h5 class="m-0">{{ props.labelTable }}</h5>
              <span class="block mt-2 md:mt-0 p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters['global'].value" placeholder="Buscar..." />
              </span>
            </div>
          </template>

          <template #empty v-if="!props.cargando"> No hay registros para mostrar. </template>

          <template #loading>
            <i class="pi pi-spin pi-spinner" style="font-size: 3rem"></i>
          </template>

          <Column
            v-for="col of props.columnas"
            :key="col.field"
            :field="col.field"
            :header="col.header"
            :sortable="col.sortable"
            headerStyle="width:25%; min-width:10rem;"
          ></Column>

          <Column headerStyle="min-width:10rem;">
            <template #body="{ data }">
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-primary mr-2"
                @click="goEdit(props.nameRutaEditar, data.id)"
              />
              <Button
                icon="pi pi-trash"
                class="p-button-rounded p-button-danger mt-2"
                @click="props.functEliminar(data.id)"
              />
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>
