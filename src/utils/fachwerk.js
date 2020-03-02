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
    components: {},
    ...options
  };

  const App = {
    setup() {
      const { content } = useFetch(currentOptions.file);
      return { content };
    },
    template: `
      <f-content :content="content" />
    `
  };

  const app = createApp(App);

  Object.entries({
    ...components,
    ...currentOptions.components
  }).forEach(([name, component]) => app.component(name, component));

  componentCss(components);

  // app.config.errorHandler = onError;
  // app.config.warnHandler = onWarning;

  app.mount("#app");
};
