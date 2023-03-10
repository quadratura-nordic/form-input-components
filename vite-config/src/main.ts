import { createApp } from "vue";
import App from "./App.vue";

import Directives from "./directives";

const app = createApp(App);
Directives(app);
app.mount("#app");
