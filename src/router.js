import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import StockList from "./components/StockList";
import StockBuy from "./components/StockBuy";
import StockSell from "./components/StockSell";
import StockSearch from "./components/StockSearch";
import TransactionList from "./components/TransactionList";


Vue.use(VueRouter);

// configure router
const router = new VueRouter({
    routes: [
        {
            path: '/signin',
            name: 'sign-in',
            component: SignIn
        },
        {
            path: '/signup',
            name: 'sign-up',
            component: SignUp
        },
        {
            path: '/stocks',
            name: 'stocks',
            component: StockList
        },
        {
            path: '/stock-buy',
            name: 'stock-buy',
            component: StockBuy
        },
        {
            path: '/stock-sell',
            name: 'stock-sell',
            component: StockSell
        },
        {
            path: '/stock-search',
            name: 'stock-search',
            component: StockSearch
        },
        {
            path: '/transactions',
            name: 'transactions',
            component: TransactionList
        }
    ], // short for routes: routes
    // linkActiveClass: 'active',
    // scrollBehavior: (to, from ,savedPosition) => {
    //     if (savedPosition) {
    //         return savedPosition;
    //     }
    //     if (to.hash) {
    //         return { selector: to.hash };
    //     }
    //     return { x: 0, y: 0 };
    // }
});

router.beforeEach((to, from, next) => {
    if (localStorage.getItem('authToken') !== null || to.path === '/signin') {
        next()
    } else {
        next('/signup')
    }
})

export default router;
