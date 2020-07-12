const routers = [
    {
        path: '/',
        name: 'login',
        component:() => import('@pages/views/login/login.vue')
    },
    {
        path: '/salelist',
        name: 'salelist',
        component:() => import('@pages/views/sales/list.vue'),
    },
    {
        path: '/salelist/:id/:tag',
        name: 'salesave',
        component:() => import('@pages/views/sales/save.vue')
    }
];

export default routers;