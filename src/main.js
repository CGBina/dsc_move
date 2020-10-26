import Vue from 'vue'
import App from './App.vue'

//导入路由模块
import router from "./router/index.js"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import LyTab from "ly-tab"

import store from "@/vuex/store.js"

Vue.use(LyTab)
Vue.use(MintUI)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')