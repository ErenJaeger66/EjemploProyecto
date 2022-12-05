<template>
    <div class="container">
        <h1>Gestión de Convocatorias</h1>
        <b-button variant="primary" @click="nuevo()"><b-icon-plus-circle></b-icon-plus-circle></b-button>

        <!--Para ventana modal-->
        <b-modal id="modal-2" title="Agregar Convocatoria" no-close-on-esc no-close-on-backdrop>
            <b-container fluid>
                <b-form @submit="guardar()" @reset="cerrar()">
                    <b-form-group id="input-group-0" label="Número de Convocatoria:" label-for="input-0">
                        <b-form-input id="input-0" v-model="form.numero" type="text"
                        placeholder="Ingrese Número de Convocatoria" required>                            
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-1" label="Semestre:" label-for="input-1">
                        <b-form-input id="input-1" v-model="form.semestre" type="text"
                        placeholder="Ingrese Semestre" required>                            
                        </b-form-input>
                    </b-form-group>
                    
                    <b-form-group id="input-group-2" label="Fecha de Publicación:" label-for="input-2">
                        <b-form-input id="input-2" v-model="form.fecpublicacion" type="date" required>                            
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Fecha Limite:" label-for="input-3">
                        <b-form-input id="input-3" v-model="form.feclimite" type="date" required>
                        </b-form-input>
                    </b-form-group>
                </b-form>                
            </b-container>
            <template #modal-footer="{}">
                <b-button size="sm" variant="danger" @click="cerrar()">Cancelar</b-button>
                <b-button size="sm" variant="success" @click="guardar()">Guardar</b-button>
            </template>
        </b-modal>

        <!--Tabla-->
        <b-table striped hover :items="usuarios" :fields="campos" stacked="md" show-empty small>
          <template #cell(actions)="row">
            <b-button variant="primary" size="sm" @click="modificar(row.item)" class="mr-1">Modificar</b-button>
            <b-button variant="danger" size="sm" @click="borrar(row.item)" class="mr-1">Borrar</b-button>
          </template>>
        </b-table>
    </div>
</template>

<script>
export default {
    name: "GestionConvocatoria",
    data() {
      return {
        usuarios: [],
        campos:[
            {key:"numero", label:"Numero de Convocatoria"},
            {key:"semestre", label:"Semestre"},
            {key:"fecpublicacion", label:"Fecha de Publicación"},
            {key:"feclimite", label:"Fecha Limite"},
            {key:"actions", label:"Opciones"}
        ],        
        form:{
            id:0,
            numero:"",
            semestre:"",
            fecpublicacion:"",
            feclimite:""
        },
        accion:0
      }
    },
    methods:{
        modificar(item){
            this.form=item;
            this.accion=1;
            this.$root.$emit("bv::show::modal","modal-2");
        },
        async borrar(item){
            await this.axios.post('/convocatoria/borrar',item);
            this.cargar();
        },
        nuevo(){
            this.accion=0;
            this.$root.$emit("bv::show::modal","modal-2");
        },
        cerrar(){
            this.$root.$emit('bv::hide::modal','modal-2');
        },
        async guardar(){
            if(this.accion==0)
            await this.axios.post('/convocatoria/agregar', this.form);
            else
            await this.axios.post('/convocatoria/modificar', this.form);
            this.$root.$emit('bv::hide::modal','modal-2');
            this.cargar();
        },
        async cargar(){
            await this.axios.get('/convocatoria/listar')
            .then(r =>{this.usuarios=r.data.data;})
        }
    },
    mounted(){
        this.cargar();
    },
    beforeMount() {
        if(!this.$store.state.tipo==1) this.$router.push('/');
    }
}
</script>

<style lang="scss" scoped>

</style>