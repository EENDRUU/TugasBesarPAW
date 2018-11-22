import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const HomeLayout = Vue.component('HomeLayout',require('./components/layout/homelayout.vue'));
const Search = Vue.component('Search',require('./components/home/search.vue'));
const LoginPelamar = Vue.component('LoginPelamar',require('./components/home/login_pelamar.vue'));
const LoginPerusahaan = Vue.component('LoginPerusahaan',require('./components/home/login_perusahaan.vue'));
const Index = Vue.component('Index',require('./components/home/index.vue'));
const Register = Vue.component('Register',require('./components/home/register.vue'));
const RegisterPelamar = Vue.component('RegisterPelamar',require('./components/home/registrasi_pelamar.vue'));
const RegisterPerusahaan = Vue.component('RegisterPerusahaan',require('./components/home/registrasi_perusahaan.vue'));
const EditLowongan = Vue.component('EditLowongan',require('./components/home/editLowongan.vue'));
const EditPelamar = Vue.component('EditPelamar',require('./components/home/editPelamar.vue'));
const TambahPelamar = Vue.component('TambahPelamar',require('./components/home/tambahPelamar.vue'));
const TambahLowongan = Vue.component('TambahLowongan',require('./components/home/tambahLowongan.vue'));

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
            {
                name: 'LoginPerusahaan',
                path: '/login_perusahaan',
                component: LoginPerusahaan
            },
            {
                name: 'EditLowongan',
                path: '/editLowongan',
                component: EditLowongan
            },
            {
                name: 'EditPelamar',
                path: '/editPelamar',
                component: EditPelamar
            },
            {
                name: 'TambahPelamar',
                path: '/TambahPelamar',
                component: TambahPelamar
            },
            {
                name: 'TambahLowongan',
                path: '/TambahLowongan',
                component: TambahLowongan
            },
        ]
      }
]

const router = new VueRouter({mode: 'history', routes: routes});
export default router
