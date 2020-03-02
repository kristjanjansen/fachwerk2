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
      const component = currentOptions.editor
        ? "f-content-editor"
        : "f-content";
      return { component, content };
    },
    template: `
      <component :is="component" :content="content" />
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
