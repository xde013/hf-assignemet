import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vue2Filters from 'vue2-filters'

// Vue Components for routes config
import TopicList from './components/TopicList.vue';

// Call some nifty plugins
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vue2Filters);

 // let app = new Vue({
 //   el: '#app',
 //   render: h => h(App)
 // })

const routes = [
 	{path: '/', component: TopicList}
 	// Many routes to come soon 
 	// {path: '/topic/:id', TopicDetail},
 	// {path: '/me', UserDetail},
]	

const router = new VueRouter({
  routes // short for `routes: routes`
})


// Took few days to add 'Vue.util.extend'
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');



