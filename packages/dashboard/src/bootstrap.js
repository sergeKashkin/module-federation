import { createApp } from 'vue';

import Dashbord from './components/Dashboard.vue';

const mount = (element) => {
  const app = createApp(Dashbord);
  app.mount(element);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");
  mount(devRoot);
}

export { mount };
