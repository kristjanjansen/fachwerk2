import { createApp } from "../deps/vue.js";

import {
  useFetch,
  components,
  componentCss,
  onError,
  onWarning
} from "../../fachwerk.js";

export const fachwerk = (options = {}) => {
  const currentOptions = {
    file: "./index.md",
    ...options
  };

  const App = {
    setup() {
      const { content } = useFetch(currentOptions.file);
      return { content };
    },
    template: `
      <f-content-editor :content="content" />
    `
  };

  const app = createApp(App);

  for (const name in components) {
    app.component(name, components[name]);
  }

  componentCss(components);

  // app.config.errorHandler = onError;
  // app.config.warnHandler = onWarning;

  app.mount("#app");
};
