<template >
<div>
 <sidebar></sidebar>
   <navbar></navbar>

    <div class="container">
     
        <!-- //**** TITULO ********-->


<!-- <h2 class="titulo-verticket animated fadeIn"> <b-link to="/tickets" class="fas fa-arrow-circle-left boton-regresar"></b-link> Detalles del Ticket</h2> -->
<div class="container">
  <div class="row">
    <div class="col titulo-verticket">
       <h1><b-link to="/tickets" class="far fa-arrow-alt-circle-left boton-regresar"></b-link></h1>
    </div>
    <div class="col titulo-verticket">
     <h1>Detalles del ticket</h1>
    </div>
    <div class="col">
     
    </div>
  
  </div>
</div>
<hr>


<b-container class="bv-example-row top animated fadeIn">
  <b-row>
       <!-- //**** CARD CONTENEDOR DE INFORMACIÓN DE TICKET ********-->
    <b-col class="columna-ticket" cols="4">
    <div class="card card-border" >
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
    <b-col class="columna-notas" cols="8">
        <div class="card text-center card-border " >
  <div class="card-header"> NOTAS <i class="fas fa-plus-circle plus " v-if="rol !== 'usuario'" data-bs-toggle="modal" data-bs-target="#exampleModalVer"></i></div>
  <div class="card-body">
   
    <!-- <p class="card-text text-muted" v-for="nota in notas" :key="nota.id_nota" >{{nota.nota}}</p> -->
    <table  class="table  table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Asignado</th>
      <th scope="col">Nota</th>
      <th scope="col">Fecha</th>
      <th scope="col" v-if="rol !== 'usuario'">Eliminar</th>
    </tr>
  </thead>
  <tbody class="tbody-texto">
    <tr v-for="nota in notas" :key="nota.id_nota">
      <th scope="row">{{nota.id_nota}}</th>
      <td>{{nota.nombre}}</td>
      <td>
        <textarea name="" id="" cols="20" class="text-area-nota"  disabled rows="2" v-model="nota.nota"></textarea>
      </td>
      <td>{{fecha(nota.fecha_nota)}}</td>
      <td v-if="rol !== 'usuario'">
          <b-button variant="danger" @click="borrar(nota.id_nota)"><i class="fas fa-trash-alt"></i></b-button>
      </td>
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
        <button @click="crear()" type="submit" data-bs-dismiss="modal" class="btn btn-primary">Guardar Nota</button>
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
let urldeleteNotas = 'http://localhost:3000/notas/EliminarNota/'
import axios from 'axios'
import moment from 'moment'
import Swal from 'sweetalert2';
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
            rol: ''
            
            
            
       
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
        
     Swal.fire({
                    allowOutsideClick: false,
                    icon: 'success',
                    title: 'Nota',
                    text: 'Nota creada correctamente',
                    backdrop: `rgba(0,0,0,0.7)`,
                    timer: 1500, 
                    showConfirmButton: false,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }

                    }).then(() => {
                        this.mostrar();
                        console.log(result);
                                // this.$router.push('vertickets');
                                });
      
      });
    
      },
       // *ELIMINAR NOTAS 
       borrar(id_nota){
          Swal.fire({
            allowOutsideClick: false,
            icon: 'info',
            title: '¿Deseas eliminar este elemento?',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            showCancelButton: true,
            showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
          }).then((result)=>{
            if(result.isConfirmed){
              axios.delete(urldeleteNotas + id_nota).then(response =>{
                this.mostrar(response);
              });
              Swal.fire('Eliminado', '','success')
            }else result.isDenied
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
          this.rol = localStorage.getItem('rol');
      } else {
          this.$router.push("/");
      }
    },
   
}
</script>


<style>
.card-border{
  border: 2px solid #2471A3;
  margin-bottom: 7rem;
}

.titulo-verticket h1{
    text-transform: uppercase;
    margin-top: 2rem;
    font-weight: bold;
    font-size: 2.1rem;
    color: #1A5276;
    text-align: center
}
.boton-regresar{
  text-decoration: none;
  color:#2471A3;
  font-weight: bold;
}
.boton-regresar:hover{
 
  color:#AED6F1;
 transition: all .5s ease-in-out;
}
.datos{
   font-size: 1.2rem; 
   font-weight: bold; 
   color: #1A5276;
   
   
}
.datos span{
   font-size: 1.2rem; 
   font-weight: bold;
   color: #2874A6; 
   text-transform: capitalize;
   
   
}
.card-header{
    text-align: left;
    color:#ffffff;
    font-weight: bold;
    font-size: 1.2rem;
    background-color: #2471A3;
}
.plus{
   margin-left: 565px;
   color: #AED6F1;
   font-size: 25px;
}
.plus:hover{
  cursor: pointer;
  color:#5DADE2;
  

  transition: all .4s ease-in-out;
}
.top{
    margin-top: 5rem;
}

.tbody-texto{
  text-transform: lowercase;

}
.text-area-nota{
  text-transform: lowercase;
  background-color: #ffffff;
  border-radius: 5px;
  text-align: center;
  color: #212529;
  
}




</style>