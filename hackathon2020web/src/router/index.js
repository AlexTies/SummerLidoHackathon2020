import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Activities from "../components/Activities";
import Detail from "../components/Detail";
import Rewards from "../components/Rewards";

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
      path: '/activities/:id',
      name: 'Activities',
      component: Activities
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/rewards',
      name: 'Rewards',
      component: Rewards
    }
  ]
})
