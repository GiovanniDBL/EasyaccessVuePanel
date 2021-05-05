import Vue from 'vue'
import Router from 'vue-router'
import TicketsComponent from './components/TicketsComponent.vue';
import VerticketsComponent from './components/VerticketsComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import HomeComponent from './components/HomeComponent.vue';



Vue.use(Router)

export const routes = [
    { path: '/tickets', component: TicketsComponent },
    { path: '/vertickets/:id', component: VerticketsComponent },
    { path: '/inicio', component: HomeComponent },
    { path: '/', component: LoginComponent },
]