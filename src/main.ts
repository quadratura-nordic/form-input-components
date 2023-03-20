import { createApp } from "vue";
import App from "./App.vue";
// import "../lib/themes/modern.scss";
// import "../lib/themes/fullBorder.scss";

import Directives from "./directives";

const app = createApp(App);
Directives(app);
app.mount("#app");
