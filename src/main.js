import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bulma/css/bulma.css";
import InputForm from "@/components/global/InputForm.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import { projectAuth } from "@/firebase/config";

let app;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(router);
    app.component("InputForm", InputForm);
    app.mount("#app");
  }
});

// const app = createApp(App);
// app.component("InputForm", InputForm);
// app.use(router);
// app.mount("#app");
