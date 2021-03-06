import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router=new VueRouter({
  routes: [
  	{
      path: '/',
      component: require('../views/discover')
    },
    {
      path: '/discover',
      component: require('../views/discover')
    },
    {
      path: '/bookcase',
      component: require('../views/bookcase')
    },

  ]
})
export default router;
