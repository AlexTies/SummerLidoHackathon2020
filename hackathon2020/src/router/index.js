import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Activities from "../components/Activities";
import Detail from "../components/Detail";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/activities',
      name: 'Activities',
      component: Activities
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
