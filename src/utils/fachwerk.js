import { createApp, ref, onErrorCaptured } from "../deps/vue.js";
import { useFetch, components, componentCss } from "../../fachwerk.js";

export const fachwerk = () => {
  const App = {
    setup() {
      onErrorCaptured((a, b, c) => console.log("ROOT", a, b, c));
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

  app.config.errorHandler = (a, b, c) => console.log("ERROR", a, b, c);
  app.config.warnHandler = (a, b, c) => console.log("WARN", a, b, c);
  app.mount("#app");
};
