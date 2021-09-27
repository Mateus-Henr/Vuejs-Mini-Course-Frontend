import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import money from "v-money";
import "@/assets/css/style.css";

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .use(money, { precision: 2, decimal: ",", thousands: "." }) // Formatting for R$
  .mount("#app");
