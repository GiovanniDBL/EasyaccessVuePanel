<template>
<div class="body-tickets">
  <sidebar></sidebar>
   <navbar></navbar>

    <div class="container animated fadeIn">
        <!-- <h1 class="titulo-tickets">Tabla de tickets</h1> -->
      

  <div class="row">
    <div class="col-8 "></div>
    <div class="col-4"><nav class="navbar navbar-expand-lg top-nav-buscador ">
  <div class="container-fluid">
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <input class="form-control me-2 border-dark" type="search" placeholder="Buscar..." aria-label="Search">
        <button class="btn btn-secondary" type="submit"><i class="fas fa-search"></i></button>
       
      </ul>
    
    </div>
  </div>
</nav></div>
  </div>

   

<div class="row " >

<div class="card card-table-tickets-bottom shadow-tabla-tickets">
      <!-- <nav class="navbar navbar-expand-lg top-nav-buscador ">
  <div class="container-fluid">
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <input class="form-control me-2 border-dark" type="search" placeholder="Buscar..." aria-label="Search">
        <button class="btn btn-outline-dark" type="submit"><i class="fas fa-search"></i></button>
       
      </ul>
    
    </div>
  </div>
</nav> -->
  <div class="card-body">
    <table  class="table table-condensed table-hover text-center table-striped" >
    
   <thead  class="">
    
    <tr>
      <th  scope="col">ID</th>
      <!-- <th scope="col">Multimedia</th> -->
      <th scope="col">Nombre</th>
      <th scope="col">Destinatario</th>
      <th scope="col">Prioridad</th>
      <th scope="col">Asunto</th>
      <th scope="col">Fecha</th>
      <th scope="col" v-if="rol !== 'usuario'">Eliminar</th>
      <th scope="col">Detalles</th>
  
  
    </tr>
  </thead>
  <tbody  >
    <tr v-for="ticket in datosPaginados" :key="ticket.id_reporte">
      <th  class="active">{{ticket.id_ticket}}</th>
      <!-- <td>{{ticket.multimedia}}</td> -->
      <td>{{ticket.nombre}}</td>
      <td>{{ticket.departamento}}</td>
      <td>{{ticket.prioridad}}</td>
      <td> {{ticket.asunto}}</td>
      <td>{{fecha(ticket.created)}}</td>
      <td v-if="rol !== 'usuario'">
          <b-button variant="danger" @click="borrar(ticket.id_ticket)"><i class="fas fa-trash-alt"></i></b-button>
      </td>
      <td><b-button v-on:click="detalles(ticket.id_ticket)" variant="primary"><i class="fas fa-file-import "></i></b-button></td>
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

    </div>
     <div class="wave" style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fff;"></path></svg></div>
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
              // this.getDataPagina(this.paginaActual);
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
        borrar(id_ticket){
          Swal.fire({
            title: 'Eliminar Ticket?',
            confirmButtonText: 'Confirmar',
            showCancelButton: true
          }).then((result)=>{
            if(result.isConfirmed){
              axios.delete(urldelete + id_ticket).then(() =>{
                this.getDataPagina(this.paginaActual)
                // this.mostrar(response);
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
.body-tickets{
     background:  linear-gradient(to right, #0576e6d8, #021c79de) !important;
    background-size: cover !important;
    background-attachment: fixed !important;
    background-position: center !important;
    position: relative !important;
    height: 100% !important;

    /* width: 100%; */
}
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
  /* margin-bottom: 9rem !important; */
}
.card-table-tickets-bottom{
  margin-bottom: 20rem;
  margin-top: 2rem;
}
.top-nav-buscador{
  margin-top: 5rem;
  
}
.shadow-tabla-tickets{
   box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.555)!important;
}

</style>