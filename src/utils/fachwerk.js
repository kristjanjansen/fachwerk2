import { createApp } from "../deps/vue.js";
import {
  useFetch,
  components,
  componentCss,
  onError,
  onWarning
} from "../../fachwerk.js";

export const fachwerk = () => {
  const App = {
    setup() {
      const { document } = useFetch("index.md");
      return { document };
    },
    template: `
      <f-document-viewer :document="document" />
    `
  };

  const app = createApp(App);

  for (const name in components) {
    app.component(name, components[name]);
  }

  componentCss(components);

  app.config.errorHandler = onError;
  app.config.warnHandler = onWarning;

  app.mount("#app");
};
