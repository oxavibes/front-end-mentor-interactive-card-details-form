import { createApp } from "vue";
import { VueRestrictedInputDirective } from "vue-restricted-input";

import App from "./App.vue";

import "@/assets/css/sanitize.css";
import "@/assets/css/base.css";

const app = createApp(App);

app.directive("mask", VueRestrictedInputDirective);
app.mount("#app");
