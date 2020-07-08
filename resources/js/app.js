// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import {
//   Col,
//   Row,
//   Container,
//   Header,
//   Footer,
//   Main,
//   Aside,
//   Menu,
//   Submenu,
//   MenuItem,
//   Dropdown,
//   DropdownMenu,
//   DropdownItem,
//   Card,
//   Form,
//   FormItem,
//   Dialog,
//   Input,
//   Table,
//   TableColumn,
//   Checkbox,
//   CheckboxGroup,
//   Button,
//   Select
// } from 'element-ui'
import less from 'less'
import VueParticles from 'vue-particles'
// import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import ELEMENT from 'element-ui'
import axios from 'axios'
Vue.use(ELEMENT);
// Vue.use(Col);
// Vue.use(Row);
// Vue.use(Container);
// Vue.use(Header);
// Vue.use(Footer);
// Vue.use(Main);
// Vue.use(Aside);
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(Dropdown);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
// Vue.use(Card);
// Vue.use(Form);
// Vue.use(FormItem);
// Vue.use(Dialog);
// Vue.use(Input);
// Vue.use(Table);
// Vue.use(TableColumn);
// Vue.use(Checkbox);
// Vue.use(CheckboxGroup);
// Vue.use(Button);
// Vue.use(Select);
Vue.use(less);
Vue.use(VueParticles);

/**
 * 不显示生产模式的消息
 * 开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。
 * 而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。
 * 此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。
 */
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  components: { App },
  template: '<App />'
});
