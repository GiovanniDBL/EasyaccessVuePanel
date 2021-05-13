<template >
<div>
 <sidebar></sidebar>
   <navbar></navbar>

    <div class="container">
     
        <!-- //**** TITULO ********-->


<h2 class="titulo-verticket animated fadeIn"> <b-link to="/tickets" class="fas fa-arrow-circle-left boton-regresar"> </b-link> Detalles del Ticket</h2>


<b-container class="bv-example-row top animated fadeIn">
  <b-row>
       <!-- //**** CARD CONTENEDOR DE INFORMACIÓN DE TICKET ********-->
    <b-col class="columna-ticket">
    <div class="card" >
    <div class="card-header "><i class="fas fa-info-circle"></i> DATOS DEL TICKET</div>
    <div class="card-body">
 
    <div class="form-group">
            <label class="datos" >Nombre: <span>{{ticket.nombre}}</span></label>
      </div>
      <div class="form-group">
            <label class="datos">Fecha: <span>{{fecha(ticket.created)}}</span></label>
      </div>
      <div class="form-group">
            <label class="datos">Cuenta: <span>{{ticket.cuenta}}</span></label>
      </div>
      <div class="form-group">
            <label class="datos">Prioridad: <span>{{ticket.prioridad}}</span></label>
      </div>
      <div class="form-group">
            <label class="datos">E-mail: <span>{{ticket.email}}</span></label>
      </div>
      <div class="form-group">
            <label class="datos">Para: <span>{{ticket.departamento}}</span></label>
      </div>
      <div class="form-group">
            <label class="datos">Asunto: <span>{{ticket.asunto}}</span></label>
      </div>
      <hr>
      <div class="form-group">
          <label class="datos">Mensaje</label>
  <textarea class="form-control" disabled placeholder="Mensaje del ticket"  style="height: 150px" v-model="ticket.reporte" ></textarea>
      </div>
    

  </div>
</div>
    </b-col>



   <!-- //**** CARD CONTENEDOR DE NOTAS DE TICKET ********-->
    <b-col class="columna-notas">
        <div class="card text-center " >
  <div class="card-header"> NOTAS <i class="fas fa-plus-circle plus" data-bs-toggle="modal" data-bs-target="#exampleModalVer"></i></div>
  <div class="card-body">
   
    <!-- <p class="card-text text-muted" v-for="nota in notas" :key="nota.id_nota" >{{nota.nota}}</p> -->
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Asignado</th>
      <th scope="col">Nota</th>
      <th scope="col">Fecha</th>
    </tr>
  </thead>
  <tbody class="tbody-texto">
    <tr  v-for="nota in notas" :key="nota.id_nota">
      <th scope="row">{{nota.id_nota}}</th>
      <td>{{nota.nombre}}</td>
      <td>{{nota.nota}}</td>
      <td>{{fecha(nota.fecha_nota)}}</td>
    </tr>
  
  </tbody>
</table>
    
  </div>
</div>
    </b-col>


    

  </b-row>
</b-container>




<!-- //**** MODAL O FORMULARIO QUE SE MUESTRA AL QUERER HACER UNA NOTA ********-->

 <div class="modal fade" id="exampleModalVer" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Nueva Nota</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit="crear()" method="POST">
       
          <div class="mb-3">
    
            <label for="id" class="col-form-label">ID Reporte</label>
            <input type="text" class="form-control" id="id" name="id_reporte" disabled v-model="crearnota.id_reporte" >
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">De:</label>
            <input type="text" class="form-control" id="recipient-name" name="nombre" disabled  v-model="crearnota.nombre" >
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Mensaje:</label>
            <textarea class="form-control" name="nota" id="message-text" v-model="crearnota.nota"></textarea>
          </div>
        
        </form>
      </div>
      <div class="modal-footer">
        <button @click="crear()" type="submit" class="btn btn-primary">Guardar Nota</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
        <!-- <button type="button" class="btn btn-dark">Ver todas las notas</button> -->
      </div>
    </div>
  </div>
</div>







    </div>

    </div>
</template>



//* SCRIPTS DEL COMPONENTE

<script>
import navbar from './NavbarComponent';
 import sidebar from './SidebarComponent.vue';
let urlverTickets = 'http://localhost:3000/tickets/verTickets/'
let urlverNotas  = 'http://localhost:3000/notas/TraerNotas/'
let urlcrearNotas = 'http://localhost:3000/notas/CrearNota'
import axios from 'axios'
import moment from 'moment'
export default {
    name: 'VerticketsComponent',
    components:{
    navbar,
    sidebar
  },
    data:function(){
      return{
        tickedID: null,
         ticket:{
                id_reporte:null,
                cuenta:'',
                nombre:'',
                departamento:'',
                prioridad:'',
                reporte:'',
                multimedia:'',
                asunto:'',
                created:'',
                email:'',
               
                
            },
            notas:[],
            crearnota:{
              nombre:'',
              id_reporte: '',
              nota:'',  
            },
                 // *ROLES
            nombre: '',
            
            
            
       
      }
    },
    methods:{
      // *METODO PARA CAMBIAR EL ESTILO DE LA FECHA EN LA TABLA
      fecha(fecha_origen){
      return moment(fecha_origen).locale('es').format('LL');
    },
     mostrar(){
        // *TRAER LAS NOTAS CON ID DE REPORTES
      axios.get(urlverNotas + this.tickedID).then(response =>{

        console.log(response); 
        this.notas = response.data;
      });
      },
      // *CREAR NOTAS
     crear(){
       let parametros ={nombre: this.crearnota.nombre, id_reporte: this.crearnota.id_reporte, nota: this.crearnota.nota}
      axios.post(urlcrearNotas, parametros).then(result =>{
      this.mostrar();
      console.log(result);
      
      });
    
      },
     
    },
    mounted:function(){
      // *DATOS CREARNOTA
this.crearnota.id_reporte = this.$route.params.id;
this.crearnota.nombre = localStorage.getItem('nombre');


      // *TRAER DETALLES DE LOS TICKETS
      this.tickedID = this.$route.params.id;
      console.log(this.tickedID);
      axios.get(urlverTickets + this.tickedID).then(datos =>{
        console.log(datos);

        this.ticket.nombre = datos.data[0].nombre;
        this.ticket.created = datos.data[0].created;
        this.ticket.cuenta = datos.data[0].cuenta;
        this.ticket.prioridad = datos.data[0].prioridad;
        this.ticket.departamento = datos.data[0].departamento;
        this.ticket.asunto = datos.data[0].asunto;
        this.ticket.reporte = datos.data[0].reporte;
        this.ticket.email = datos.data[0].email;
        // console.log(this.ticket);
      });
      
this.mostrar();

     

          // *ROLES
       if (localStorage.getItem('token')) {
          this.nombre = localStorage.getItem('nombre');
      } else {
          this.$router.push("/");
      }
    },
   
}
</script>


<style>

.titulo-verticket{
    text-transform: uppercase;
    margin-top: 2rem;
    font-weight: bold;
    color: #34495E;
    text-align: center;

}
.datos{
   font-size: 1.2rem; 
   font-weight: 800; 
   color:#34495E;
}
.datos span{
   font-size: 1.2rem; 
   font-weight: 400; 
   text-transform: capitalize;
   
}
.card-header{
    text-align: left;
    color:#34495E;
    font-weight: bold;
    font-size: 1.2rem;
}
.plus{
   margin-left: 400px;
}
.plus:hover{
  color:tomato;
  transition: all .5s ease-in-out;
}
.top{
    margin-top: 5rem;
}
.boton-regresar{
  text-decoration: none;
  color: #33a3fb;
  

}
.tbody-texto{
  text-transform: lowercase;

}



</style>