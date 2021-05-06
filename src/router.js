import Vue from 'vue'
import Router from 'vue-router'
import TicketsComponent from './components/TicketsComponent.vue';
import VerticketsComponent from './components/VerticketsComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import MiperfilComponent from './components/MiperfilComponent.vue';



Vue.use(Router)

export const routes = [
    { path: '/inicio', component: HomeComponent },
    { path: '/tickets', component: TicketsComponent },
    { path: '/vertickets/:id', component: VerticketsComponent },
    { path: '/perfil', component: MiperfilComponent },
    { path: '/', component: LoginComponent },
]