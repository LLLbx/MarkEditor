import { defineStore } from 'pinia'

type baseState = {
    fontNumber:number
}

export const baseSettingStore = defineStore('baseSettingStore',{
    state :():baseState => ({
        fontNumber:16
    }),
    getters : {
        fontSize:(state) => state.fontNumber + 'px'
    },
    persist : {
        enabled:true,
        // strategies: [
        //     {
        //       key: 'base',  //自定义 Key值
        //       storage: localStorage,  // 选择存储方式
        //     },
        //   ],
    },
})
