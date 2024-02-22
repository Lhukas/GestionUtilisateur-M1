import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/lara-light-green/theme.css'

const app = createApp(App)
app.use(PrimeVue);
app.use(router);


app.mount('#app')
