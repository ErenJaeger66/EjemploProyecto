import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario:'',
    idusr:0,
    nombre:'',
    tipo:0
  },
  getters: {
  },
  mutations: {
    setUsuario(state,value){
      state.usuario=value      
    },
    setIdusr(state,value){
      state.idusr=value      
    },
    setNombre(state,value){
      state.nombre=value      
    },
    setTipo(state,value){
      state.tipo=value      
    }
  }
})
