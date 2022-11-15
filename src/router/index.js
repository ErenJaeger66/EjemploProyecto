import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import PagInicio from '@/components/PagInicio.vue'
import RegistroPost from '@/components/RegistroPost.vue'
import ListHabilitados from '@/components/ListHabilitados.vue'
import ListConvocatorias from '@/components/ListConvocatorias.vue'
import BienvenidoUsuario from '@/components/BienvenidoUsuario.vue'
import GestionUsuario from '@/components/GestionUsuario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PagInicio',
    component: PagInicio
  },
  {
    path: '/registro',
    name: 'registropost',
    component: RegistroPost
  },
  {
    path: '/convocatorias',
    name: 'ListConvocatorias',
    component: ListConvocatorias
  },
  {
    path: '/habilitados',
    name: 'ListHabilitados',
    component: ListHabilitados
  },
  {
    path: '/about',
    name: 'about',    
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/registrocompleto',
    name: 'registrocompleto',
    component: () => import('../views/RegistroCompleto.vue')
  },
  {
    path: '/usr',
    name: 'bienvenidoUsr',
    component: BienvenidoUsuario
  },
  {
    path: '/usr/gestion',
    name: 'gestionusuario',
    component: GestionUsuario
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
