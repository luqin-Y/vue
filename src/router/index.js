import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import M1 from '@/components/M1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/m1',
      name: 'M1',
      component: M1
    }

  ]
})