import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import BaseIcon from "@/components/BaseIcon.vue"

Vue.config.productionTip = false

// globally register baseicon component
// so we can use baseicon throughout our entire application
Vue.component("BaseIcon", BaseIcon)

new Vue({
  router,
  store,
  render: function(h) {
    return h(App)
  }
}).$mount("#app")
