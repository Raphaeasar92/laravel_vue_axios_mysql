import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import LoginComponent from './pages/Login/LoginComponent'
import HomeComponent from './pages/Home/HomeComponent'
import ClientsComponent from './pages/Clients/ClientsComponent'
import ProductsComponent from './pages/Products/ProductsComponent'

const app = createApp(App)

app.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8000/api';

const routes = [
    { path: '/', name: 'login', component: LoginComponent },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/clients', name: 'clients', component: ClientsComponent },
    { path: '/products', name: 'products', component: ProductsComponent },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router)

app.mount('#app')