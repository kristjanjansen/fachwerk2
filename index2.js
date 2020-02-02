import {
  createApp,
  provide,
  inject
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

const ThemeSymbol = Symbol();

const Ancestor = {
  setup() {
    provide("ThemeSymbol", "dark");
  },
  template: `<div>b<slot /></div>`
};

const Middle = {
  template: `<div>m<slot /></div>`
};

const Descendent = {
  setup() {
    const theme = inject("ThemeSymbol'", "light" /* optional default value */);
    return {
      theme
    };
  },
  template: `<div>c{{ theme }}</div>`
};

const App = {
  components: { Ancestor, Middle, Descendent },
  template: `<ancestor>a<middle><descendent /></middle></ancestor>`
};

createApp(App).mount("#app");
