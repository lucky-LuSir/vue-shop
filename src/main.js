import Vue from 'vue'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import {
    Loading
} from "element-ui";
import router from './router'
import store from './store'
import axios from "axios";
import BaiduMap from 'vue-baidu-map'
// import md5 from "js-md5";
import App from './App.vue'
import BASE_URL from "../public/park_BASE_URL"; //配置全局URL

Vue.prototype.$ajax = axios;

axios.defaults.baseURL = "http://47.100.79.150:8000"; //设置全局URL
axios.defaults.headers.post["Content-Type"] = "application/json";


import '@/common/css/common.css'
import '@/common/css/normalize.css'
import '@/common/css/reset.css'
import '@/fonts/iconfont.css'

Vue.use(ElementUI);

Vue.use(BaiduMap, {
    ak: '5HDI034i4pHKSRVLkbXWBHe6PahxcfnV' //这个地方是官方提供的ak密钥
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')