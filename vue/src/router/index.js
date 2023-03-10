import {createRouter, createWebHistory} from 'vue-router';
import AuthLayout from '../components/authLayout/AuthLayout.vue'
import Register from '../components/authLayout/Registration.vue';
import Login from '../components/authLayout/Login.vue';
import NotFound from '../components/NotFound.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import Vaults from '../views/Vaults.vue';
import VaultItemView from '../components/vault/VaultModal.vue';
import Tools from '../views/Tools.vue';
import PasswordGenerator from '../components/Tools/Generator.vue';
import store from '../store';


const routes = [
    {
        path: "/",
        redirect: "/vaults",
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
            {path: '/vaults', name: 'Vaults', component: Vaults},
            {path: '/tools', name: 'PasswordGenerator', component: Tools,},
            {path: 'vault/item/add', name:'VaultItemAdd', component: VaultItemView},
            {path: 'vault/item/edit:', name:'VaultItemEdit', component: VaultItemView},
        ],
      },
    {
        path: "/auth",
        redirect: "/login",
        name: "Auth",
        component: AuthLayout,
        meta: {isGuest: true},
        children: [
            {
            path: "/login",
            name: "Login",
            component: Login,
            },
            {
            path: "/register",
            name: "Register",
            component: Register,
            },
        ],
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound',component: NotFound }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });


router.beforeEach((to, from, next) => {
if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "Login" });
} else if (store.state.user.token && to.meta.isGuest) {
    next({ name: "Dashboard" });
} else {
    next();
}
});

export default router;
