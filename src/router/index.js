import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import IndexMovies from '../views/IndexMovies.vue'
import ShowMovies from '../views/ShowMovies.vue'
import IndexSearches from '../views/IndexSearches.vue'
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";



Vue.use(VueRouter)

const routes = [

  {
    path: '/movies/:id',
    name: 'ShowMovies',
    component: ShowMovies
  },
  {
    path: '/movies',
    name: 'IndexMovies',
    component: IndexMovies
  },

  {
    path: '/searches',
    name: 'IndexSearches',
    component: IndexSearches
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path: "/signup", 
    name: "signup", 
    component: Signup 
  },
  { 
    path: "/login", 
    name: "login", 
    component: Login 
  },
  { 
    path: "/logout", 
    name: "logout", 
    component: Logout 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
