import { createApp, provide } from "../deps/vue.js";

import {
  useFetch,
  components,
  componentCss,
  onError,
  onWarning
} from "../../fachwerk.js";

export const fachwerk = (options = {}) => {
  const customOptions = {
    file: "./index.md",
    components: {},
    utils: {},
    ...options
  };

  const App = {
    setup() {
      provide("customUtils", customOptions.utils);
      const { content } = useFetch(customOptions.file);
      return { content };
    },
    template: `
      <f-content :content="content" />
    `
  };

  const app = createApp(App);

  Object.entries({
    ...components,
    ...customOptions.components
  }).forEach(([name, component]) => app.component(name, component));

  componentCss(components);

  // app.config.errorHandler = onError;
  // app.config.warnHandler = onWarning;

  app.mount("#app");
};
