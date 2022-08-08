import {App} from 'vue'

export default {
    install:(app:App,options:any) => {
        app.config.globalProperties.$test = (key:any) => {
            console.log(key,'key');
            
            console.log(options,'plugins');
            return key
        }

        app.provide('test',options)
    }
}