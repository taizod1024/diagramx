import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';

// css
import 'bootstrap/dist/css/bootstrap.min.css';

// create app
createApp(App).use(router).mount('#app');
