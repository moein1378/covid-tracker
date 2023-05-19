import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/mainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/indexPage.vue'),
      },
      {
        path: '/country-covid-info/:code',
        alias: '/state-covid-info/:code',
        //name:'CountryCovidInfo',
        component: () => import('../pages/covidInfo.vue'),
        // children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    name: 'notFound',
    component: () => import('src/pages/errorNotFound.vue'),
  },
];

export default routes;
