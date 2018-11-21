import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const HomeLayout = Vue.component('HomeLayout',require('./components/layout/homelayout.vue'));
const Search = Vue.component('Search',require('./components/home/search.vue'));

const routes = [
    {
        path: '/',
        component: HomeLayout,
        children:[
            {
                name: 'Search',
                path: '/',
                component: Search
            }
        ]
      }
]

const router = new VueRouter({mode: 'history', routes: routes});
export default router
