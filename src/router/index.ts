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
    meta: {
      title: 'all diagrams',
    },
  },
  {
    // user diagrams
    path: '/user',
    name: 'UserDiagram',
    component: UserDiagrams,
    meta: {
      title: 'user diagrams',
    },
  },
  {
    // sign up
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: {
      title: 'sign up',
    },
  },
  {
    // sign in
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    meta: {
      title: 'sign in',
    },
  },
  {
    // your diagrams
    path: '/my',
    name: 'MyDiagram',
    component: () => import('../views/MyDiagrams.vue'),
    meta: {
      title: 'my diagrams',
    },
  },
  {
    // new diagrams
    path: '/new',
    name: 'NewDiagram',
    component: () => import('../views/NewDiagram.vue'),
    meta: {
      title: 'new diagram',
    },
  },
];

/** router object */
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
const DEFAULT_TITLE = 'diagramx';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.afterEach((to, _from) => {
  let title = DEFAULT_TITLE;
  if (to.meta.title) {
    title += ' - ' + to.meta.title;
  }
  document.title = title;
});
export default router;
