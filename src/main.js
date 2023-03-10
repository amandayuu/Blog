import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import VueBasicAlert from "vue-basic-alert";
// https://vuejsexamples.com/basic-vue-alert-component-for-basic-use-cases/

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faChevronDown);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
