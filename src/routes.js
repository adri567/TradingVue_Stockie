import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from './components/Main.vue'
import AboutUs from './components/AboutUs.vue'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/AboutUs',
        component: AboutUs
    }
]

export const router = new VueRouter({
    mode: 'history',
    routes
})

