import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const storage = new Vuex.Store({
  state: {
    usuario:'',
    idusr:0,
    nombre:'',
    tipo:0
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
  },
  plugins:[
    new VuexPersistence({
      storage:window.localStorage
    }).plugin
  ]
})

export default storage;