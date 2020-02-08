import {
  ref,
  watch
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

import * as animeModule from "https://unpkg.com/animejs@3.1.0/lib/anime.es.js";
const anime = animeModule.default;

import { set } from "../../fachwerk.js";

export const FAnimate = {
  props: {
    set: { default: "" }
  },
  setup(props) {
    const progress = ref(0);
    anime({
      targets: progress,
      value: 360,
      duration: 10000,
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
