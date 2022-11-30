import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Flowchart',
      component: () => import("@/views/drage/flow"),
      meta: {
        needCache: false,
        hideRouter: true //不需要展示到左边菜单栏中
      }
    }
  ]
})
