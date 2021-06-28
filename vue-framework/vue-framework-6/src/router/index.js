import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
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
        path: '/setup',
        name: 'Setup',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Setup.vue')
    },
    {
        path: '/comapi',
        name: 'ComApi',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ComApi.vue')
    },
    {
        path: '/computed',
        name: 'Computed',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Computed.vue')
    },
    {
        path: '/watch',
        name: 'Watch',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Watch.vue')
    },
    {
        path: '/lifehook',
        name: 'LifeHook',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/LifeHook.vue')
    },
    {
        path: '/rootapp',
        name: 'RootApp',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/RootApp.vue')
    },
    {
        path: '/routerapi',
        name: 'RouterApi',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/RouterApi.vue'),
        children:[
            {
                path: "page",
                component:()=>import("../views/MyPage.vue")
            },
            {
                path: "page/:id",
                component:()=>import("../views/MyPage.vue")
            },
            {
                path: "article",
                component:()=>import("../views/MyArticle.vue")
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
