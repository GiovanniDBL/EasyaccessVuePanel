import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap'
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import animate from 'animate.css'
import { routes } from "./router";
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(animate)
const router = new VueRouter({
    routes
})
new Vue({
    render: h => h(App),
    router,
}).$mount('#app')