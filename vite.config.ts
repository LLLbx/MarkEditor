import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx()],
  //base:'./',
  resolve : {
    alias : {
      "@store":pathResolve('src') + '/store',
      "@":pathResolve('src'),
      "@views":pathResolve('src') + '/views',
    },
    // alias:[
    //   {
    //     find: "@store",
    //     replacement: pathResolve('src') + '/store',
    //   },
    //   {
    //     find: "@views",
    //     replacement: pathResolve('src') + '/views',
    //   },
    // ],
    extensions: [".js", ".ts", ".tsx", ".jsx",".vue"],
  },
  css: {
    preprocessorOptions: {
        less: {
            modifyVars: {
                
            },
            javascriptEnabled: true,
        },
    },
},
})
