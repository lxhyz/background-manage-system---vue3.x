import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/router/premission.js"
import "@/assets/css/iconfont.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as echarts from "echarts";

let app =createApp(App)

// Vue.prototype.$echarts = echarts;  // vue2写法
app.config.globalProperties.$echarts = echarts  // vue3写法


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store).use(router).use(ElementPlus).mount('#app')
