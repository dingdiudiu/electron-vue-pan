import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
/* eslint-disable */

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'landing-page',
            redirect: '/home/all/table',
            component: require('@/components/LandingPage').default,
            children: [
                {
                    path: 'all/table',
                    name: 'all',
                    component: require('@/components/v-bigIconList/v-bigIconList').default
                },
                {
                    path: 'all/bar',
                    name: 'all',
                    component: require('@/basic/v-table/v-table').default
                },
                {
                    path: 'uploading',
                    name: 'uploading',
                    component: require('@/components/uploading/uploading').default
                },
                {
                    path: 'downloading',
                    name: 'downloading',
                    component: require('@/components/downloading/downloading').default
                },
                {
                    path: 'downloaded',
                    name: 'downloaded',
                    component: require('@/components/downloaded/downloaded').default
                }
            ]
        },
        {
            path: '/floating/window',
            name: 'floating-window',
            component: require('@/components/floatingWindow/floatingWindow').default
        }
    ]
});
