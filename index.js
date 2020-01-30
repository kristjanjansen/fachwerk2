import {
  createApp,
  ref,
  compile
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

import marked from "https://unpkg.com/marked@0.8.0/lib/marked.esm.js";
import * as components from "./components/index.js";

const App = {
  setup() {
    const md = ref("");
    fetch("./index.md")
      .then(res => res.text())
      .then(res => {
        md.value = res;
      });
    return () =>
      md.value ? compile(marked(md.value, { breaks: true }))() : null;
  }
};

const app = createApp(App);

for (const name in components) {
  app.component(name, components[name]);
}

app.mount("#app");
