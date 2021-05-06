<template>
    <div >
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div class="container-fluid">
    <a class="navbar-brand titulo-Navv"  ><span>Panel de control </span>easy<span>access</span></a>
    </div>
</nav>
<form v-on:submit.prevent="login">
 <div class="animated fadeIn top ">
    <div class="modal-dialog shadow">
        <div class="modal-content">
        <div class="modal-header ">
        <div class="form-title text-center">
            <h5 class="modal-title titulo-login " id="exampleModalLabel">Iniciar Sesión </h5>
            </div>
        </div>
            <div class="modal-body"> 
            <form>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" name="nombre" id="floatingnombre" placeholder="name@example.com" v-model="nombre" required >
                <label for="floatingnombre"  class="label-login text-muted">Nombre</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" name="pass"  id="floatingpass" placeholder="name@example.com" v-model="pass" required >
                <label for="floatingpass"  class="label-login text-muted">Contraseña</label>
            </div>
            </form>
        </div>
        <div class="modal-footer d-flex justify-content-center">
            <button type="submit" class="btn btn-block  btn-color  btn-round">INGRESAR</button>
        </div>

        <!-- <div class="alert alert-danger" role="alert" v-if="error">
            {{error_msg}}
       </div> -->
        </div>
    </div>
    </div> 
</form>
     
      
   




   
</div>



</template>

<script>

let LoginUrl = 'http://localhost:3000/user/loginpanel';
import axios from 'axios';
import Swal from 'sweetalert2';


export default {
    name: 'LoginComponent',
    data: function(){
        return{
            nombre: "",
            pass: "",
            error: false,
            error_msg: "",
        }
    },
    methods:{
        login(){
           let json = {
              "nombre": this.nombre,
              "pass": this.pass
           };
          axios.post(LoginUrl, json).then(data =>{
              console.log(data);

              if (data.status == 200) {
 
                    Swal.fire({
                    allowOutsideClick: false,
                    icon: 'success',
                    title: 'Usuario',
                    text: this.error_msg = data.data.message,
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
                        // localStorage.token = data.data.token;
                        localStorage.setItem('token', data.data.token)
                        localStorage.setItem('nombre', data.data.nombre)
                        localStorage.setItem('rol', data.data.role)
                                this.$router.push('inicio');
                                });
                             

                    }else{
                        this.error = true;
                        this.error_msg = data.data.message;

                    Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: this.error_msg = data.data.message,
                    backdrop: `rgba(0,0,0,0.7)`,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }

                    });
              }
          
          })

        }
    },

}
</script>

<style scoped>

.shadow{
    box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.555)!important;
}
@media(min-width: 768px) {
  .titulo-Navv{
    /* font-size: 1.2rem !important; */
 letter-spacing: 3px;
 text-transform: uppercase;
 color: #33a3fb !important;
 font-weight: 800;


}
.titulo-Navv span{
  /* font-size: unset; */
 letter-spacing: 3px;
 text-transform: uppercase;
 color: white !important;
}
}

.btn-color{
  background-color: #3498db !important;
  color: #ffffff !important;
}
.btn-color:hover{
  background-color: #2a638a !important;
  transition: all .4s ease-in-out;
}
.btn-round {
  border-radius: 3rem !important;
}
.logo-login{
  width: 50px;
  border-radius: 50%;

}
</style>>

