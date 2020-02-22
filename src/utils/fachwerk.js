import { createApp, ref } from "../deps/vue.js";
import { useFetch, components, componentCss } from "../../fachwerk.js";

export const fachwerk = () => {
  const App = {
    setup() {
      const { data } = useFetch("index.md");
      return { data };
    },
    template: `
      <f-document-editor :content="data" />
    `
  };

  const app = createApp(App);

  for (const name in components) {
    app.component(name, components[name]);
  }

  componentCss(components);

  app.config.errorHandler = () => null;
  app.config.warnHandler = () => null;

  app.mount("#app");
};
