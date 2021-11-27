import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import MenuItems from '../views/MenuItems.vue'
import MenuItem from '../views/MenuItem.vue'
import Checkout from '../views/Checkout.vue'
import Order from '../views/Order.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/menu',
        name: 'Categories',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Categories
    },
    {
        path: '/menu/:id/show',
        name: 'menu-item',
        component: MenuItems
    },
    {
        path: '/product/:id/show',
        name: 'single-product',
        component: MenuItem
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
    },

    {
        path: '/order',
        name: 'Order',
        component: Order
    },
                 {
        path: '/catlog',
        name: 'Catlog',
        component: Catlog
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
