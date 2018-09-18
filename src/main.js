import Vue from 'vue'
import App from './App.vue'
import Storage from './Storage'
import './assets/scss/App.scss'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    data: function () {
        return Storage
    }
}).$mount('#app')
