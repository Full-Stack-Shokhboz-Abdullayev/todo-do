import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import VueFeather from "vue-feather";

// Make BootstrapVue available throughout your project

const app = createApp(App);
app.use(store);
app.use(router);
app.component("vue-feather", VueFeather);

app.config.performance = true;

app.mount("#app");
