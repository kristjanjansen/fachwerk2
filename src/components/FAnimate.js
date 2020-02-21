import { ref, watch } from "../deps/vue.js";
import anime from "../deps/anime.js";

import { set } from "../../fachwerk.js";

export const FAnimate = {
  help: `
Animates a value
  `,
  props: {
    set: { default: "" }
  },
  setup(props) {
    const progress = ref(0);
    anime({
      targets: progress,
      value: 100,
      duration: 2000,
      easing: "linear",
      direction: "alternate",
      loop: true
    });
    if (props.set) {
      watch(progress, progress => set(props.set, progress));
    }
    return { progress };
  },
  template: `<slot :progress="progress" />`
};
