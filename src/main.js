import Vue from 'vue';
import VueI18n from "vue-i18n";
import VueWait from 'vue-wait'
import VueAxios from 'vue-axios'
import dayjs from "dayjs";
import singleSpaVue from 'single-spa-vue';
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import vClickOutside from 'v-click-outside'
import adaptive from "@/plugins/adaptive";
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

import App from './App.vue';
import router from './router'
import store from "./store";
import ru_module from './locales/ru_module.json'
import ru_global from './locales/ru_global.json'
import './assets/stylesheets/application.scss'
import axios from "axios";
const AuthTokenKeycloak = localStorage.getItem('auth._token.keycloak')
axios.defaults.headers.common['Authorization'] = AuthTokenKeycloak


const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ru: {
    ...ru_global,
    courses: ru_module
  }
}

Object.defineProperties(Vue.prototype, {
  $dayjs: {
    get() {
      return dayjs
    }
  },
  $adaptive: {
    get() {
      return adaptive
    }
  }
})


Vue.config.productionTip = false;
Vue.use(VueI18n)
Vue.use(VueWait)
Vue.use(PerfectScrollbar)
Vue.use(vClickOutside)
Vue.use(VueAxios, {$axios: axios})
const i18n = new VueI18n({
  locale: 'ru', // set locale
  messages, // set locale messages
})
window.$i18n = i18n

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render(h) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecycle-props
          // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
          /*
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
          */
        },
      });
    },
    i18n,
    router,
    store,
    wait: new VueWait(),

  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
