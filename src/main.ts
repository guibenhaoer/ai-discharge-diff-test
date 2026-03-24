import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
import ChartsPage from './pages/ChartsPage.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/charts', component: ChartsPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
