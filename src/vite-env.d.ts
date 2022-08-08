/// <reference types="vite/client" />
import {APP} from "vue"
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $test: any
  }
}
