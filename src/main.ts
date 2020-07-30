import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible' //px转rem插件
import { Button, List, Lazyload} from 'vant';
Vue.use(List);
Vue.use(Button);

Vue.config.productionTip = false
Vue.use(Lazyload, {
  lazyComponent: true,
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
