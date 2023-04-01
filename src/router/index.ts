import { createRouter, createWebHistory } from 'vue-router'
import AuthService from "@/services/AuthService";
import {useUserStore} from "@/stores/userStore";

//Components
import HomeView from '../views/HomeView.vue'
import Dashboard from "@/components/Dashboard/Dashboard.vue";
import DashboardView from "@/views/DashboardView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/DashboardView.vue')
    // },
    { path: '/', redirect: { name: 'home' } },
    { path: '/dashboard', component: DashboardView, children: [
        { path: '/', redirect: { name: 'DashboardHome' } },
          { path: 'home', name: 'DashboardHome', component:  Dashboard}
      ]
    }
  ]
});

router.beforeEach( async (to, from, next) => {
  if (to.name != 'home') {
    await AuthService.checkAuthenticated().then(res => {
      const userStore = useUserStore();
      const { setUser, checkIfUserNull } = userStore;
      if (res.data.success) {
        if (checkIfUserNull()) { //pb if changing data
          setUser(res.data.data);
        }
        next();
      } else {
        setUser(null);
        next({name: 'home'});
      }
    });
  }
  return next();
});

export default router
