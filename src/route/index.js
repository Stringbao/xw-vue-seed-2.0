const routers = [
    {
        path: '/',
        name: 'login',
        component:() => import('@pages/views/login/login.vue')
    }
];

export default routers;