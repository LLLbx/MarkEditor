import { RouteRecordRaw } from "vue-router";
import editAndShow from "@views/editAndShow/index.vue";
export const EditAndShow = '/EditAndShow';

export const routerList: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: to => {
            // 方法接收目标路由作为参数
            // return 重定向的字符串路径/路径对象
            return { path: EditAndShow }
        },
    },
    {
        path: EditAndShow,
        name: 'EditAndShow',
        component: editAndShow
    }
]
