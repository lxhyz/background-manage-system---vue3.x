import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import 'element-plus/dist/index.css'
import SvgIcon from "@/icons/index"
import '@/router/premission'
import i18n from "@/i18n"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import fiilters from "@/utils/filters"


let app = createApp(App)
fiilters(app)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(store).use(router).use(SvgIcon).use(i18n).mount('#app')
