import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import UserDiagram from '../views/ListDiagram.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';

const routes: Array<RouteRecordRaw> = [
  {
    // all diagrams
    path: '/',
    name: 'ListDiagram',
    component: UserDiagram,
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
    path: '/user',
    name: 'UserDiagram',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "userdiagram" */ '../views/UserDiagram.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
