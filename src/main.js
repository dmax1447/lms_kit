import Vue from 'vue';
import VueI18n from "vue-i18n";
import VueWait from 'vue-wait'
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';
import router from './router'
import ru from './locales/ru.json'
import './assets/stylesheets/application.scss'


const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ru: {
    courses: ru
  }
}

// Create VueI18n instance with options


Vue.config.productionTip = false;
Vue.use(VueI18n)
Vue.use(VueWait)
const i18n = new VueI18n({
  locale: 'ru', // set locale
  messages, // set locale messages
})


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
    wait: new VueWait(),

  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
