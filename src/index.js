import "@assets/app.css";

import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import Router from 'vue-router';
import routers from '@route/index.js';
import storeModules from "@store/index.js";

import CONSTANT from "@constant/index.js";
Vue.use(CONSTANT);

// //init store
Vue.use(Vuex);
let store = new Vuex.Store({
    namespaced: true,
    modules:storeModules
});

//init router
Vue.use(Router);
const router = new Router({
    routes: routers
});

import LeComponents from "@pages/components/leComponent.min.js";
Vue.use(LeComponents);



new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app")
