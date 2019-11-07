import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

//首页Item数据组件
import indexItem from '@/components/index-item/index-item.vue'
Vue.component("indexItem",indexItem);
import navBar from '@/components/mine-nav-bar/mine-nav-bar.vue'
Vue.component("navBar",navBar);
import loadAndRefreshLayout from '@/components/base/load-and-refresh-layout.vue'
Vue.component("loadAndRefreshLayout",loadAndRefreshLayout)
const app = new Vue({
    ...App
})
app.$mount()
