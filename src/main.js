import Vue from 'vue';
import App from './App.vue';
import axios from 'axios'
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios
Vue.use(NowUiKit);
Vue.use(VueClipboard)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
