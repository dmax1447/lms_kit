import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
const base = 'kit'

function buildNav(routerRoutes, base) {
  const routes = routerRoutes
    .filter(v => v.meta?.isNavRoute)
    .map(({path, name, meta}) => ({path: `/${base}${path}`, name, meta}))
  return {
    routes,
    base
  }
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import(/* webpackChunkName: "about" */ '../views/TableView.vue'),
    meta: { title: 'Таблица', isNavRoute: true },
  },
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormElementsView.vue'),
    meta: { title: 'Элементы формы', isNavRoute: true },
  },
  {
    path: '/fl',
    name: 'fl',
    component: () => import(/* webpackChunkName: "about" */ '../views/FrontLibsView.vue'),
    meta: { title: 'Front-libs', isNavRoute: true },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: 'kit',
  routes
})

const nav = buildNav(routes, base)

export default router
export { nav }
