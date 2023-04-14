export default {
  name: 'clientes',
  component: () =>
    import(/* webpackChunkName: "layout" */ '@/modules/clients/layout/ClientsLayout.vue'),
  children: [
    {
      path: '',
      name: 'clientes.index',
      component: () =>
        import(/* webpackChunkName: 'clientes' */ '@/modules/clients/views/ClientsIndex.vue')
    },
    {
      path: 'crear',
      name: 'clientes.crear',
      component: () =>
        import(/* webpackChunkName: "clientes.crear" */ '@/modules/clients/views/ClientsCreate.vue')
    },
    {
      path: ':id/editar',
      name: 'clientes.editar',
      component: () =>
        import(/* webpackChunkName: "clientes.editar" */ '@/modules/clients/views/ClientsEdit.vue'),
      props: (route) => ({
        id: route.params.id
      })
    }
  ]
}
