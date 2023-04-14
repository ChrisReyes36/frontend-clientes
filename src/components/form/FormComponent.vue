<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  labelForm: {
    type: String,
    default: null,
    required: true
  },
  formData: {
    type: Object,
    default: () => {},
    required: true
  },
  functGuardar: {
    type: Function,
    default: () => true,
    required: true
  }
})

const form = ref({})

watch(
  () => props.formData,
  (newForm) => {
    form.value = newForm
    form.value.sueldo = parseFloat(form.value.sueldo)
  }
)

const cancelar = () => {
  router.push({ name: 'clientes.index' })
}
</script>

<template>
  <div class="col-12">
    <div class="card">
      <h5>{{ props.labelForm }}</h5>
      <div class="p-fluid formgrid grid">
        <div class="field col-12 md:col-6">
          <label for="nombre">Nombre</label>
          <InputText id="nombre" v-model.trim="form.nombre" type="text" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="apellidos">Apellidos</label>
          <InputText id="apellidos" v-model.trim="form.apellidos" type="text" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="edad">Edad</label>
          <InputText id="edad" v-model.trim="form.edad" type="text" />
        </div>
        <div class="field col-12 md:col-6">
          <label for="address">sueldo</label>
          <InputNumber
            id="sueldo"
            v-model.trim="form.sueldo"
            mode="currency"
            locale="en-US"
            :min="0"
            :step="0.01"
            :minFractionDigits="2"
            :maxFractionDigits="2"
            showButtons
            buttonLayout="horizontal"
            incrementButtonClass="p-button-info"
            decrementButtonClass="p-button-info"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            inputId="currency-us"
            currency="USD"
          />
        </div>
        <div class="field col-12 p-0 mt-3 flex justify-content-end">
          <div class="col-1">
            <Button label="Cancelar" class="p-button-danger" @click="cancelar" />
          </div>
          <div class="col-1">
            <Button label="Guardar" class="p-button-primary" @click="props.functGuardar(form)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
