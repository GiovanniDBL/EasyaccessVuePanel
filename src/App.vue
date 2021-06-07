<template>
  <div id="app">
 <!-- <sidebar></sidebar>
   <navbar></navbar> -->
    



   <router-view></router-view>


  
  </div>
</template>

<script>
//  import navbar from './components/NavbarComponent.vue';
//  import sidebar from './components/SidebarComponent.vue';

export default {
  name: 'App',
  // components:{
  //   navbar,
  //   sidebar
  // }
}
</script>

<style>
body{
  /* overflow: hidden; */
  font-family: 'Roboto', sans-serif !important;

  
}
.centrar-logo{
  display: block;
  margin: 0 auto;
  margin-top: 2rem;
}
h1{
  text-align: center;
}
/* ::-webkit-scrollbar {
    display: none  !important;
} */



</style>
