import {
  ref,
  watch
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

import * as animeModule from "https://unpkg.com/animejs@3.1.0/lib/anime.es.js";
const anime = animeModule.default;

import { set } from "../utils/index.js";

export const FAnimate = {
  setup() {
    const progress = ref(0);
    anime({
      targets: progress,
      value: 100,
      duration: 1000,
      easing: "linear"
    });
    watch(progress, progress => set("a", progress));
    return { progress };
  },
  template: `<div>{{ progress }}</div>`
};
