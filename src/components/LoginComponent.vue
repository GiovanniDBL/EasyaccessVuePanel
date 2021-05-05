<template>
    <div class="container">
      
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
        </div>
    </div>
    </div> 
</form>
     
      
   




   
</div>



</template>

<script>
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
            console.log('Usuario:', this.nombre);
            console.log('Contraseña',this.pass);
        }
    }
}
</script>

<style scoped>

.shadow{
    box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.555)!important;
}
</style>>

