<template>
    <div>
   <sidebar></sidebar>
   <navbar></navbar>
 

   
 <div class="animated fadeIn top ">
    <div class="modal-dialog shadow">
        <div class="modal-content">
        <div class="modal-header ">
        
            <h5 class="modal-title titulo-login " id="exampleModalLabel">Datos del usuario</h5>
           
        </div>
            <div class="modal-body text-center contenido-perfil"> 
            <img src="../assets/iconoEA.png" class="logo-sidebar" alt="">
                 <div class="mb-3">
                <label for="" class="form-label">Nombre: <span>{{nombre}}</span></label>
                 </div>
                 <div class="mb-3">
                <label for="" class="form-label">Permisos: <span>{{rol}}</span></label>
                 </div>
           
        </div>
        
        </div>
    </div>
    </div> 


    </div>
</template>

<script>
 import navbar from './NavbarComponent';
 import sidebar from './SidebarComponent.vue';
export default {
    name: 'MiPerfilComponent',
    components:{
    navbar,
    sidebar
  },
  data(){
      return{
        nombre: '',
        rol: ''
      }
    },
  mounted(){
      if (localStorage.getItem('token')) {
          this.nombre = localStorage.getItem('nombre');
          this.rol = localStorage.getItem('rol');
      } else {
          this.$router.push("/");
      }
    }
}
</script>

<style>
.modal-header{
    justify-content: center;
}

.contenido-perfil label{
    margin-top: 1rem;
letter-spacing: 1px;
 text-transform: uppercase;
 color: #34495E !important;
 font-weight: 800;
}
.contenido-perfil span{
 letter-spacing: 1px; 
 text-transform: uppercase;
 color: #34495E !important;
}
</style>