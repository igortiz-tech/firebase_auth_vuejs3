import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Dashboard.vue';
import User from '../views/User.vue';


const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/user',
        name: 'User',
        component: User,
        meta: {
            requiresAuth: true
        }
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    let user = JSON.parse(localStorage.getItem('user'));
    let hasUser = user != null;
    if(to.meta.requiresAuth) {
        if(!hasUser){
            next({
                name: "login"
            })
        } else {
            next()
        }

    } else {
        next()
    }
})

// router.beforeEach((to, from, next) => {
//     if (to.matched.some((record) => record.meta.requiresAuth)) {
//         if (isAuthenticated()) {
//             next()
//             return
//         }
//         next('/login')
//     }
//     next()
// })


export default router      
