<template>
    <div>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid">
    <b-navbar-brand href="#"><b-button variant="dark" v-b-toggle.sidebar-menu><b-icon icon="list"></b-icon></b-button></b-navbar-brand>
    <a class="navbar-brand titulo-Nav"  href="#"><span>Panel de control </span>easy<span>access</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" to="/" href="">ACCEDER</a>
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
            <input type="text" class="form-control" id="floatingnombre" placeholder="name@example.com" required >
            <label for="floatingnombre"  class="label-login text-muted">Nombre</label>
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
}
</script>

<style>
.titulo-Nav{
  font-size: 15.8px !important;
 text-transform: uppercase;
 color: #33a3fb !important;
 font-weight: 800;
}
.titulo-Nav span{
font-size: 15.8px;
 text-transform: uppercase;
 color: white !important;
}
@media(min-width: 768px) {
  .titulo-Nav{
    /* font-size: 1.2rem !important; */
 letter-spacing: 3px;
 text-transform: uppercase;
 color: #33a3fb !important;
 font-weight: 800;
 line-height: 1px;

}
.titulo-Nav span{
  /* font-size: unset; */
 letter-spacing: 3px;
 text-transform: uppercase;
 color: white !important;
}
}
.titulo-login{
  color: #34495e;
  text-transform: uppercase;
  font-weight: bold;
  /* letter-spacing: 1.5px; */
  
}
.btn-color{
  background-color: #3498db !important;
  color: #ffffff !important;
}
.modal-header{

    background: #f2f2f2;
}
.modal-footer{
  background: #f2f2f2;
}
.btn-round {
  border-radius: 3rem !important;
}
.logo-login{
  width: 50px;
  border-radius: 50%;

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