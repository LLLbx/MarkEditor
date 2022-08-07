import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import {routerList} from './routerMap'

const routes: Array<RouteRecordRaw> = routerList.filter(item => item);

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;