<template>
<div>
  <sidebar></sidebar>
   <navbar></navbar>

    <div class="container animated fadeIn">
        <h1 class="titulo-tickets">Tabla de tickets</h1>
        
   

<div class="row " >


      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <input class="form-control me-2 border-primary" type="search" placeholder="Buscar" aria-label="Search">
        <button class="btn btn-outline-primary" type="submit"><i class="fas fa-search"></i></button>
       
      </ul>
    
    </div>
  </div>
</nav>

  <table  class="table table-condensed text-center table-striped" >
    
   <thead  class="table-dark">
    <tr>
      <th  scope="col">ID</th>
      <th scope="col">Cuenta</th>
      <th scope="col">Nombre</th>
      <th scope="col">Departamento</th>
      <th scope="col">Prioridad</th>
      <th scope="col">Asunto</th>
      <th scope="col">Fecha</th>
      <th scope="col" v-if="rol !== 'usuario'">Eliminar</th>
      <th scope="col">Detalles</th>
  
  
    </tr>
  </thead>
  <tbody >
    <tr v-for="ticket in datosPaginados" :key="ticket.id_reporte">
      <th  class="active">{{ticket.id_reporte}}</th>
      <td>{{ticket.cuenta}}</td>
      <td>{{ticket.nombre}}</td>
      <td>{{ticket.departamento}}</td>
      <td>{{ticket.prioridad}}</td>
      <td> {{ticket.asunto}}</td>
      <td>{{fecha(ticket.created)}}</td>
      <td v-if="rol !== 'usuario'">
          <b-button variant="danger" @click="borrar(ticket.id_reporte)"><i class="fas fa-trash-alt"></i></b-button>
      </td>
      <td><b-button v-on:click="detalles(ticket.id_reporte)" variant="primary"><i class="fas fa-file-import "></i></b-button></td>
    </tr>
  </tbody>
</table>

<!-- //* NAVEGACIÓN DE PAGINACIÓN -->

<nav aria-label="Page navigation example" class="navigation">
  <ul class="pagination justify-content-end">
    <li class="page-item ">
      <a class="page-link botones-pagination" v-on:click="getPreviousPage()"  tabindex="-1" aria-disabled="true">Anterior</a>
    </li>
    <li v-for="pagina in totalPaginas()" :key="pagina" v-on:click="getDataPagina(pagina)" class="page-item" v-bind:class="isActive(pagina)"><a class="page-link" >{{pagina}}</a></li>
    <li class="page-item">
      <a class="page-link botones-pagination" v-on:click="getNextPage()" >Siguiente</a>
    </li>
  </ul>
</nav>




</div>

    </div>
    </div>
</template>





//*SCRIPTS

<script>

// *URL DE API PARA TRAER TODOS LOS TICKETS AL PANEL
let url = 'http://localhost:3000/tickets/getReports'
let urldelete = 'http://localhost:3000/tickets/deleteReports/'
import axios from 'axios'
import Swal from 'sweetalert2';
import moment from 'moment'
import navbar from './NavbarComponent';
 import sidebar from './SidebarComponent.vue';





export default {
  
    name: 'TicketsComponent',
     components:{
    navbar,
    sidebar
  },
 
    data(){
        return{

          search: '',
         elementosPorPagina: 10,
             datosPaginados:[],
             paginaActual: 1,
             tickets: [],

            //  *Manejo de Roles
            rol: ''
          
            
          
            
        }
    },
  
    created(){
      this.mostrar();
      this.getDataPagina(1);
      },
   mounted() {
     
       if (localStorage.getItem('token')) {
          this.rol = localStorage.getItem('rol');
      } else {
          this.$router.push("/");
      }
    
   },
    methods:{
      // *SABER CUANTAS HOJAS DE PAGÍNACIÓN TENDRÉ DE NUMERO ELEMENTOS POR PAGINA
      totalPaginas(){
        return Math.ceil(this.tickets.length / this.elementosPorPagina)
      },
      //* LLAMAR DATOS DE TABLA A CADA PAGINA DE LA PAGINACIÓN
      getDataPagina(noPagina){
         axios.get(url).then(response=>{
        
              this.tickets=response.data;
              this.paginaActual = noPagina;
        this.datosPaginados = [];
        let ini = (noPagina * this.elementosPorPagina) - this.elementosPorPagina;
        let fin = (noPagina * this.elementosPorPagina);
        this.datosPaginados = this.tickets.slice(ini,fin);
            });
    
      },
      // * METODO DEL BOTON PARA REGRESAR A LA PAGINA ANTERIOR
      getPreviousPage(){
        if (this.paginaActual > 1) {
          this.paginaActual--;
        }
        this.getDataPagina(this.paginaActual);
      },
      // * METODO DEL BOTON PARA REGRESAR A LA PAGINA SIGUIENTE
      getNextPage(){
        if (this.paginaActual < this.totalPaginas()) {
          this.paginaActual++;
        }
        this.getDataPagina(this.paginaActual);
      },
      // *HACER PAGÍNACIÓN ACTIVE
      isActive(noPagina){
        //*Active
        return noPagina == this.paginaActual ? 'active':''
       
      },

      // *METODO PARA CAMBIAR EL ESTILO DE LA FECHA EN LA TABLA CON LIBRERIA MOMENT
      fecha(fecha_origen){
      return moment(fecha_origen).locale('es').format('LL');
    },
      // *MOSTRAT TODOS LOS TICKETS AL PANEL
        mostrar(){
            axios.get(url).then(response=>{
              this.tickets=response.data;
          
            });
        },
        // *BORRAR TICKETS DEL PANEL
        borrar(id_reporte){
          Swal.fire({
            title: 'Eliminar Ticket?',
            confirmButtonText: 'Confirmar',
            showCancelButton: true
          }).then((result)=>{
            if(result.isConfirmed){
              axios.delete(urldelete + id_reporte).then(response =>{
                this.mostrar(response);
              });
              Swal.fire('Eliminando', '','success')
            }else result.isDenied
          });
        },
         //* DETALLES DE TICKETS DE USUARIOS
    detalles(id){
      this.$router.push('/vertickets/' + id);
    },
        
    },
   

    
}

</script>








//*STILOS

<style>
/* body{
  background-color: black !important;
} */
.titulo-tickets{
text-transform: uppercase;
margin-top: 2rem;
margin-bottom: 2rem;
font-weight: bold;
color: #34495E;

}
.form-select{
   max-width: 100%!important;
   width: 255px  !important;
   margin-bottom: 1rem;
   /* background-color: #212529 !important; */

   /* color: #ffffff  !important; */
   text-decoration: none;
}
.buscador{
  margin-bottom: 1rem;
  width: 450px !important;
  
  
}

.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

.fast {
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.fadeIn {
    animation-name: fadeIn;
}
.page-link:hover{
  cursor: pointer; 
}
.page-link{
font-weight: bold;
}


.navigation{
  margin-bottom: 9rem !important;
}

</style>