import { createApp, ref, compile, h } from "../deps/vue.js";
import marked from "../deps/marked.js";

import { components, utils, componentCss } from "../../fachwerk.js";

export const fachwerk = () => {
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
      return () => (content.value ? h(content.value) : null);
    }
  };

  const app = createApp(App);

  for (const name in components) {
    app.component(name, components[name]);
  }

  componentCss(components);

  app.mount("#app");
};
