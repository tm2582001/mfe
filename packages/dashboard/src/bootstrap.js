import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";
import PrimeVue from "primevue/config";
import Checkbox from "primevue/checkbox";

const mount = (el) => {
  const app = createApp(Dashboard);
  app.use(PrimeVue, { ripple: true });

  // ✅ Register Checkbox component
  app.component("Checkbox", Checkbox);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
