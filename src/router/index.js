import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import index from '../views/index.vue'
import quote from '../views/quote.vue'
import register from '../views/register.vue'
import user from '../views/user.vue'
import About from '../views/About.vue'
import contact from '../views/contact.vue'
import gallery from '../views/gallery.vue'
import support from '../views/support.vue'
import cart from '../views/cart.vue'
import detail from '../views/detail.vue'
import order from '../views/order.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/index',
    },           
    {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [{
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/quote',
            name: 'quote',
            component: quote
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/user',
            name: 'user',
            component: user
        },
        {
            path: '/About',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: gallery
        },
        {
            path: '/support',
            name: 'support',
            component: support
        },
        {
            path: '/cart',
            name: 'cart',
            component: cart
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail
        },
        {
            path: '/order',
            name: 'order',
            component: order
        },
    ]
}, ]

const router = new VueRouter({
    routes
})

export default router