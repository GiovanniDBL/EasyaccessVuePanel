<template>
    <div>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid">
    <b-navbar-brand href="#"><b-button variant="dark" v-b-toggle.sidebar-menu ><b-icon icon="list"></b-icon></b-button></b-navbar-brand>
    <a class="navbar-brand titulo-Nav"  href="#"><span>Panel de control </span>easy<span>access</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item ">
          <a class="nav-link active navbar-nombre" aria-current="page" title="usuario"  >Bienvenido | <span>{{nombre}}</span> </a>
        </li>
        
      </ul>
   
    </div>
  </div>
</nav>

<div class="modal fade  "  id="exampleModalSesion" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content border-info">
      <div class="modal-header  animated fadeIn ">
<div class="form-title text-center">
  
        <h5 class="modal-title titulo-login " id="exampleModalLabel">Iniciar Sesión </h5>
</div>
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>
      </div>
      <div class="modal-body animated fadeIn">
         
        <form>
         
        
        
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingname" placeholder="name@example.com" required >
            <label for="floatingname"  class="label-login text-muted">Nombre</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control"  id="floatingcontraseña" placeholder="name@example.com" required >
            <label for="floatingcontraseña"  class="label-login text-muted">Contraseña</label>
          </div>
        </form>
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button type="button" class="btn btn-block  btn-color  btn-round">INGRESAR</button>
      </div>
    </div>
  </div>
</div>

</div>
</template>

<script>
export default {
    name: 'NavbarComponent',
    data(){
      return{
        nombre: ''
      }
    },
    mounted(){
      if (localStorage.getItem('token')) {
          this.nombre = localStorage.getItem('nombre');
      } else {
          this.$router.push("/");
      }
    }
}
</script>

<style>

@media(min-width: 768px) {
  .titulo-Nav{
    /* font-size: 1.2rem !important; */
 letter-spacing: 3px;
 text-transform: uppercase;
 color: #33a3fb !important;
 font-weight: 800;
 /* line-height: 1px; */

}
.titulo-Nav span{
  /* font-size: unset; */
 letter-spacing: 3px;
 text-transform: uppercase;
 color: white !important;
}
}
.navbar-nombre{
letter-spacing: 1px;
 text-transform: uppercase;
 color: #33a3fb !important;
 font-weight: 800;
 /* line-height: 1px; */
}
.navbar-nombre span{
 letter-spacing: 1px; 
 text-transform: uppercase;
 color: white !important;
}
.titulo-login{
  color: #34495e;
  text-transform: uppercase;
  font-weight: bold;
  /* letter-spacing: 1.5px; */
  
}

.modal-header{

    background: #f2f2f2;
}
.modal-footer{
  background: #f2f2f2;
}


.sesion{
  font-weight: bold;
  text-align: center;
  font-size: 1.2rem;
  /* margin-left: 300%; */

}
.modal{
  background-color: #000000d7   !important;
}

</style>