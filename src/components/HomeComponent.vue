<template >
    <div class="body-home">
        <sidebar></sidebar>
   <navbar></navbar>

   <div class="contenido-home container">
       
     <img src="../assets/iconoEA.png" class="logo-home" alt="logo.png">
     <p>Bienvenido</p>
     <!-- <p>Aenean at est tempus, gravida elit at, ultrices libero. Quisque porttitor vel elit a consequat. Morbi mattis pretium sapien id bibendum. Donec sapien dolor, aliquam sit amet enim in, ultrices feugiat est. Mauris ac gravida dolor, vitae varius tortor. Proin eu tellus odio. Maecenas malesuada eu quam et tempor. Vivamus molestie turpis vel lacus laoreet consectetur. Duis vestibulum lacus ligula, at ultrices velit commodo ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel sapien blandit, vulputate lectus a, cursus ex. Vestibulum et fermentum ex. Pellentesque mattis tempus elementum. Morbi at lacinia est. In suscipit lorem tortor, et hendrerit felis elementum eget. Vestibulum placerat malesuada eros, sit amet fringilla enim egestas nec.</p> -->
     
   </div>
   <div class="wave" style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fff;"></path></svg></div>
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
.body-home{
    
     background:  linear-gradient(to right, #0576e6d8, #021c79de) !important;
    background-size: cover !important;
    background-attachment: fixed !important;
    background-position: center !important;
    position: relative !important;
    height: 100vh !important;
    width: 100%;
}


@media(min-width: 768px){
    .logo-home{
    display: block;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 18%;
    border-radius: 50%;
    
}
    .contenido-home p{
color: #ffffff;
font-size: 1.8rem;
text-align: center;
font-weight: bold;
text-transform: uppercase;
}
}
@media(min-width: 1800px){
    .logo-home{
    display: block;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 20%;
    border-radius: 50%;
    
}
    .contenido-home p{
color: #ffffff;
font-size: 2.5rem;
text-align: center;
font-weight: bold;
text-transform: uppercase;
}
}

</style>