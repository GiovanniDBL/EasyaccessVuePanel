<template >
    <div >
        <sidebar></sidebar>
   <navbar></navbar>

   <div class="contenido-home container">
       
     <img src="../assets/iconoEA.png" class="logo-home" alt="logo.png">
     <p>Aenean at est tempus, gravida elit at, ultrices libero. Quisque porttitor vel elit a consequat. Morbi mattis pretium sapien id bibendum. Donec sapien dolor, aliquam sit amet enim in, ultrices feugiat est. Mauris ac gravida dolor, vitae varius tortor. Proin eu tellus odio. Maecenas malesuada eu quam et tempor. Vivamus molestie turpis vel lacus laoreet consectetur. Duis vestibulum lacus ligula, at ultrices velit commodo ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel sapien blandit, vulputate lectus a, cursus ex. Vestibulum et fermentum ex. Pellentesque mattis tempus elementum. Morbi at lacinia est. In suscipit lorem tortor, et hendrerit felis elementum eget. Vestibulum placerat malesuada eros, sit amet fringilla enim egestas nec.</p>
   </div>
   
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
  data(){
      return{
          rol: ''
      }
  },
  
  mounted(){
      if (localStorage.getItem('token')) {
          console.log('HOLA');
           this.rol = localStorage.getItem('rol');
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
    margin-bottom: 2rem;
    width: 18%;
    border-radius: 50%;
    
}
.contenido-home p{
color: #34495E;
font-size: 1.2rem;
text-align: center;
font-weight: bold;
}
</style>