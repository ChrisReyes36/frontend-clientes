<script setup>
import { ref } from 'vue'

import AppMenuItem from './AppMenuItem.vue'

const model = ref([
  {
    label: 'Inicio',
    items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', path: '/', to: 'home' }]
  },
  {
    label: 'Clientes',
    icon: 'pi pi-fw pi-briefcase',
    items: [
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Listar Clientes',
            icon: 'pi pi-fw pi-list',
            path: '/clientes',
            to: 'clientes.index'
          },
          {
            label: 'Crear Cliente',
            icon: 'pi pi-fw pi-plus-circle',
            path: '/clientes/crear',
            to: 'clientes.crear'
          }
        ]
      }
    ]
  }
])
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
      <li v-if="item.separator" class="menu-separator"></li>
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>
