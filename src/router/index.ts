import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AllDiagrams from '../views/AllDiagrams.vue';
import UserDiagrams from '../views/UserDiagrams.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';

/** route array */
const routes: Array<RouteRecordRaw> = [
  {
    // all diagrams
    path: '/',
    name: 'AllDiagrams',
    component: AllDiagrams,
  },
  {
    // user diagrams
    path: '/user',
    name: 'UserDiagram',
    component: UserDiagrams,
  },
  {
    // sign up
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    // sign in
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    // your diagrams
    path: '/my',
    name: 'MyDiagram',
    component: () => import('../views/MyDiagrams.vue'),
  },
  {
    // new diagrams
    path: '/new',
    name: 'NewDiagram',
    component: () => import('../views/NewDiagram.vue'),
  },
];

/** router object */
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
