<template>
    <div>            
        <b-nav v-if="$store.state.tipo==0" card-header tabs>
            <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
            <b-nav-item to="/" exact exact-active-class="active">Inicio</b-nav-item>
            <b-nav-item to="/registro" exact exact-active-class="active">Registro</b-nav-item>            
            <b-nav-item to="/convocatorias" exact exact-active-class="active">Convocatorias</b-nav-item>
            <b-nav-item to="/habilitados" exact exact-active-class="active">Habilitados</b-nav-item>
            <b-nav-item to="/about" exact exact-active-class="active">Acerca de...</b-nav-item>
        </b-nav>
        
        <!-- menu logueado --> 
        <b-nav v-if="$store.state.tipo==1" card-header tabs>
            <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
            <b-nav-item to="/usr" exact exact-active-class="active">Inicio</b-nav-item>
            <b-nav-item to="/usr/gestion" exact exact-active-class="active">Usuario</b-nav-item>            
            <b-nav-item to="/conv/gestion" exact exact-active-class="active">Gestion Convocatorias</b-nav-item>
            <b-nav-item to="/geshabilitados" exact exact-active-class="active">Gestion Habilitados</b-nav-item>
            <b-nav-item v-on:click="salir()">Salir</b-nav-item>
        </b-nav>
    </div>
</template>

<script>
export default {
    name: 'MenuPub',
    
    methods:{
        salir(){
            localStorage.setItem('token','');
            this.axios.defaults.headers.common.authorization = '';
            this.$store.commit('setIdusr',0);
            this.$store.commit('setUsuario','');
            this.$store.commit('setTipo',0);
            this.$store.commit('setNombre','');
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>