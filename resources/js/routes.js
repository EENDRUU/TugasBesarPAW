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
const DetailPekerjaan = Vue.component('DetailPekerjaan',require('./components/home/detailPekerjaan.vue'));

const routes = [
    {
        path: '/',
        component: HomeLayout,
        children:[
            {
                name: 'Index',
                path: '/',
                component: Index,
                props: true
            },
            {
                name: 'Search',
                path: '/search',
                component: Search,
                props: true
            },
            {
                name: 'LoginPelamar',
                path: '/loginpelamar',
                component: LoginPelamar,
                props: true
            },
            {
                name: 'Register',
                path: '/register',
                component: Register,
                props: true
            },
            {
                name: 'RegisterPelamar',
                path: '/registerpelamar',
                component: RegisterPelamar,
                props: true
            },
            {
                name: 'RegisterPerusahaan',
                path: '/registerperusahaan',
                component: RegisterPerusahaan,
                props: true
            },
            {
                name: 'LoginPerusahaan',
                path: '/login_perusahaan',
                component: LoginPerusahaan,
                props: true
            },
            {
                name: 'EditLowongan',
                path: '/editLowongan',
                component: EditLowongan,
                props: true
            },
            {
                name: 'EditPelamar',
                path: '/editPelamar',
                component: EditPelamar,
                props: true
            },
            {
                name: 'TambahPelamar',
                path: '/TambahPelamar',
                component: TambahPelamar,
                props: true
            },
            {
                name: 'TambahLowongan',
                path: '/TambahLowongan',
                component: TambahLowongan,
                props: true
            },
            {
                name: 'DetailPekerjaan',
                path: '/detailPekerjaan',
                component: DetailPekerjaan,
                props: true
            },
        ]
      }
]

const router = new VueRouter({mode: 'history', routes: routes});
export default router
