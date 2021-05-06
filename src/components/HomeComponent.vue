<template>
    <div>
        <sidebar></sidebar>
   <navbar></navbar>
        <h1>Bienvenido</h1>
     <img src="../assets/logo.png" class="logo-home" alt="logo.png">
    </div>
</template>

<script>
 import navbar from './NavbarComponent';
 import sidebar from './SidebarComponent.vue';
export default {
    name: 'HomeComponent',
    components:{
    navbar,
    sidebar
  },
  
  mounted(){
      if (localStorage.getItem('token')) {
          console.log('HOLA');
      } else {
          this.$router.push("/");
      }
  }
}
</script>

<style>
.logo-home{
    display: block;
    margin: 0 auto;
    margin-top: 2rem;
    
}
</style>