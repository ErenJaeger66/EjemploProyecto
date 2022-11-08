<template>
    <div class="container">
        <h1>Lista de Convocatorias Habilitadas</h1>
        <b-table striped hover :items="convocatorias"></b-table>
    </div>
</template>

<script>
export default {
    name: "ListConvocatorias",
    data() {
      return {
        convocatorias: [
          
        ]
      }
    },
    mounted(){
        this.axios.get('/convocatoria/listar')
        .then(r =>{
            console.log(r.data);
            this.convocatorias=r.data.data;
        })
    }
}
</script>

<style lang="scss" scoped>

</style>