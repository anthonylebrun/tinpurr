import Vue from 'vue'
import Router from 'vue-router'
import Pick from './views/Pick'
import Faves from './views/Faves'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pick',
      component: Pick
    },
    {
      path: '/heart/:sessionId',
      name: 'faves',
      component: Faves,
      props: true
    }
  ]
})
