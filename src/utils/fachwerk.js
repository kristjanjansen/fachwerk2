import { createApp, ref, onErrorCaptured } from "../deps/vue.js";
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

  app.config.errorHandler = onError;
  app.config.warnHandler = onWarning;

  app.mount("#app");
};
