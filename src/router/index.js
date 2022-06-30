import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect:'/login',
  },
  {
    path: '/login',
    name:"login",
    component: () => import("@/views/login/login.vue")
  },
  {
    path:"/organizationalStructure",
    name:"organizationalStructure",
    component:() => import("../layout/index.vue"),
    children:[
      {
        path:"enterpriseManage",
        name:"enterpriseManage",
        component:() => import("@/views/home/home.vue")
      }
    ]
  },
  {
    path:"/404",
    name:"notPage",
    component:() => import("@/views/errorPage/404.vue")
  },
  {
    path:"/:pathMatch(.*)",
    redirect:"/404"
  }
]

/**
 * 根据用户的权限不同，所能看见的页面和可操作性也不同
 * admin -> 所有页面都能看见
 * vip -> 属于vip的权限
 * svip -> 更多vip的权限
 *
 * 通过addRouter() 添加
  **/


// 准备动态添加的路由
export const DynamicRoues = [

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router


