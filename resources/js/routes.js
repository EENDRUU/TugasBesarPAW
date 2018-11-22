import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const HomeLayout = Vue.component('HomeLayout',require('./components/layout/homelayout.vue'));
const Search = Vue.component('Search',require('./components/home/search.vue'));
const LoginPelamar = Vue.component('LoginPelamar',require('./components/home/login_pelamar.vue'));
const Index = Vue.component('Index',require('./components/home/index.vue'));
const Register = Vue.component('Register',require('./components/home/register.vue'));
const RegisterPelamar = Vue.component('RegisterPelamar',require('./components/home/registrasi_pelamar.vue'));
const RegisterPerusahaan = Vue.component('RegisterPerusahaan',require('./components/home/registrasi_perusahaan.vue'));

const routes = [
    {
        path: '/',
        component: HomeLayout,
        children:[
            {
                name: 'Index',
                path: '/',
                component: Index
            },
            {
                name: 'Search',
                path: '/search',
                component: Search
            },
            {
                name: 'LoginPelamar',
                path: '/loginpelamar',
                component: LoginPelamar
            },
            {
                name: 'Register',
                path: '/register',
                component: Register
            },
            {
                name: 'RegisterPelamar',
                path: '/registerpelamar',
                component: RegisterPelamar
            },
            {
                name: 'RegisterPerusahaan',
                path: '/registerperusahaan',
                component: RegisterPerusahaan
            },
        ]
      }
]

const router = new VueRouter({mode: 'history', routes: routes});
export default router
