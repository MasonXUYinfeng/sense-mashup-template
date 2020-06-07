import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Cube from "./tools/cube"

Vue.config.productionTip = false;
Vue.prototype.Cube = Cube;

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
