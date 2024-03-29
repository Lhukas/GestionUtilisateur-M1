import {createRouter, createWebHistory} from 'vue-router'
import MyView from '../views/MyView.vue'
import NewUser from '../views/NewUser.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            name: 'home',
            component: MyView
        },
        {
            path: '/new-user',
            name: 'new-user',
            component: NewUser
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router
