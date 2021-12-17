import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import UserDiagram from '../views/ListDiagram.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ListDiagram',
    component: UserDiagram,
  },
  {
    path: '/user',
    name: 'UserDiagram',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/UserDiagram.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
