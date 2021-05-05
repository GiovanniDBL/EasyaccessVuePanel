<template>
  <div>
    
    <b-sidebar id="sidebar-menu" aria-labelledby="sidebar-menu-title" no-header shadow
     bg-variant="dark" text-variant="light" backdrop backdrop-variant="dark">
      <template #default="{ hide }">
        
        <div class="p-3">
          <div class="d-flex align-items-center flex-column">
            <img src="../assets/iconoEA.png" class="logo-sidebar" alt="">
          <!-- <b-avatar variant="primary" text="EA" class="mb-3 mt-3" size="5rem"></b-avatar> -->
          <h4 id="sidebar-no-header-title" >EASYACCESS </h4>
          <div class="divider-menu"></div>
          </div>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item to="/inicio" active @click="hide"><b-icon icon="house-door" variant="light" font-scale="1.5" ></b-icon> INICIO</b-nav-item>
              <b-nav-item to="/tickets"  @click="hide"><b-icon icon="receipt-cutoff" variant="light" font-scale="1.5" ></b-icon> TICKETS</b-nav-item>
              <b-nav-item to="/perfil"  @click="hide"><b-icon icon="person" variant="light" font-scale="1.5" ></b-icon> MI PERFIL</b-nav-item>
              <b-nav-item   @click="hide"><b-icon icon="door-closed" variant="light" font-scale="1.5" ></b-icon> CERRAR SESIÓN</b-nav-item>
             
            </b-nav>
          </nav>
          <b-button  variant="info" block @click="hide">Cerrar Ventana</b-button>
          
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
    name: 'SidebarComponent',
}
</script>


<style>

/* Diseño  sidebar links e items**/

.nav-item > .nav-link{
    color: #FFFFFF;
}
.nav-item > .nav-link:hover{
    color: #CCC;
}
.divider-menu{
  border: 1px solid #FFFFFF;
  width: 100%;
}

/* LOGO SIDEBAR */

.logo-sidebar{
  border-radius: 50%;
  width: 90px;
  height: 90px;
}

</style>