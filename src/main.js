/* eslint-disable vue/multi-word-component-names */
/* eslint-disable vue/no-reserved-component-names */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import Button from 'primevue/button'
import Card from 'primevue/card'
import Column from 'primevue/column'
import ConfirmationService from 'primevue/confirmationservice'
import ConfirmDialog from 'primevue/confirmdialog'
import DataTable from 'primevue/datatable'
import Dialog from 'primevue/dialog'
import DialogService from 'primevue/dialogservice'
import InputText from 'primevue/inputtext'
import InputMask from 'primevue/inputmask'
import InputNumber from 'primevue/inputnumber'
import ProgressSpinner from 'primevue/progressspinner'
import Textarea from 'primevue/textarea'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Toolbar from 'primevue/toolbar'

import '@/assets/styles.scss'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  ripple: true
})
app.use(ToastService)
app.use(DialogService)
app.use(ConfirmationService)

app.component('Button', Button)
app.component('Card', Card)
app.component('Column', Column)
app.component('ConfirmDialog', ConfirmDialog)
app.component('DataTable', DataTable)
app.component('Dialog', Dialog)
app.component('InputText', InputText)
app.component('InputMask', InputMask)
app.component('InputNumber', InputNumber)
app.component('ProgressSpinner', ProgressSpinner)
app.component('Textarea', Textarea)
app.component('Toast', Toast)
app.component('Toolbar', Toolbar)

app.mount('#app')
