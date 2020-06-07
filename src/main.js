import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

let intv = setInterval(() => {
  Vue.prototype.qApp = window.qApp;

  console.log("------尝试连接App-----");
  if (Vue.prototype.qApp) {
    console.log("App opend", window.qApp);
    clearInterval(intv);
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
}, 500);
