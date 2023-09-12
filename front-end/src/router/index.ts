import { createRouter, createWebHistory } from 'vue-router'
import AuthService from "@/services/AuthService";
import {useUserStore} from "@/stores/userStore";

//Components
import HomeView from '../views/HomeView.vue'
import {NavigationEnum} from "@/Enum/NavigationEnum";
import {useAuthenticateStore} from "@/stores/authStore";
import {storeToRefs} from "pinia";
//


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{
        sidebar:false,
        navbar:false
      },
      component: HomeView
    },
    // { path: '/', redirect: { name: 'home' } },
    // {
    //   path: '/dashboard',
    //   component: DashboardView,
    //   children: [
    //     { path: '/', redirect: { name: 'DashboardHome' } },
    //     { path: 'home', name: 'DashboardHome', component:  Dashboard}
    //   ]
    // },
    {
      path: NavigationEnum.DASHBOARD.link,
      name: NavigationEnum.DASHBOARD.name,
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: NavigationEnum.NOTIFICATION.link,
      name: NavigationEnum.NOTIFICATION.name,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NotificationsView.vue')
    },
    {
      path: NavigationEnum.ACCOUNT.link,
      name: NavigationEnum.ACCOUNT.name,
      component: () => import('../views/AccountView.vue')
    },
    {
      path: NavigationEnum.GAMES.link,
      name: NavigationEnum.GAMES.name,
      component: () => import('../views/GamesView.vue')
    },
    {
      path: NavigationEnum.DOCUMENTATION.link,
      name: NavigationEnum.DOCUMENTATION.name,
      component: () => import('../views/DocumentationView.vue')
    },
    {
      path: NavigationEnum.COMPONENTS.link,
      name: NavigationEnum.COMPONENTS.link,
      component: () => import('../views/ComponentsView.vue')
    },
    {
      path: NavigationEnum.HELP.link,
      name: NavigationEnum.HELP.name,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HelpView.vue')
    },
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/DashboardView.vue')
    // },

  ]
});

//TODO set global loading to wait for the back end to check for the token and not showing a page for like 5ms and then redirect to home
router.beforeEach( async (to, from, next) => {
  if (to.name != 'home') {
    await AuthService.checkAuthenticated().then(res => {
      const userStore = useUserStore();
      const authStore = useAuthenticateStore();
      const { setUser } = userStore;
      const { user } = storeToRefs(userStore);
      const { setIsAuthenticated, checkIfAuthenticated } = authStore;
      if (res.data.success) {
        if (!checkIfAuthenticated()) {
          setIsAuthenticated(true)
        }
        if (user !== res.data.data){
          setUser(res.data.data);
        }
        next();
        return false;
      } else {
        setUser(null);
        next({name: 'home'});
        return false;
      }
    });
  }
  return next();
});

export default router
