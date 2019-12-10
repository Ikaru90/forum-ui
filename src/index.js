import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Notifications from 'vue-notification'
import App from './App';
import routes from './routes';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Notifications);

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  ...App
});
