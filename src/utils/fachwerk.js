import { createApp, ref, compile, h } from "../deps/vue.js";
import marked from "../deps/marked.js";

import { components, get, componentCss } from "../../fachwerk.js";

// export const fachwerk = () => {
//   const App = {
//     setup() {
//       const content = ref();
//       fetch("./index.md")
//         .then(res => res.text())
//         .then(res => {
//           content.value = {
//             setup() {
//               return { ...utils };
//             },
//             render: compile(marked(res, { breaks: true }))
//           };
//         });
//       return () => (content.value ? h(content.value) : null);
//     }
//   };

export const fachwerk = () => {
  const App = {
    // setup() {
    //   const markdown = ref("");
    //   fetch("./index.md")
    //     .then(res => res.text())
    //     .then(res => {
    //       markdown.value = res;
    //     });
    //   return { markdown };
    //},
    setup() {
      return { get };
    },
    template: `
    <f-fetch src="index.md" v-slot="{value}">
      <f-content :markdown="value" />
    </f-fetch>
    `
  };

  const app = createApp(App);

  for (const name in components) {
    app.component(name, components[name]);
  }

  componentCss(components);

  app.mount("#app");
};
