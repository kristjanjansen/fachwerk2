import {
  createApp,
  ref,
  compile,
  h
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

import marked from "https://unpkg.com/marked@0.8.0/lib/marked.esm.js";
import * as components from "./components/index.js";

import * as utils from "./utils/index.js";

const App = {
  setup() {
    const content = ref();
    fetch("./index.md")
      .then(res => res.text())
      .then(res => {
        content.value = {
          setup() {
            return { ...utils };
          },
          render: compile(marked(res, { breaks: true }))
        };
      });
    utils.receive("a", a => console.log(a));
    return () => (content.value ? h(content.value) : null);
  }
};

const app = createApp(App);

for (const name in components) {
  app.component(name, components[name]);
}

app.mount("#app");
