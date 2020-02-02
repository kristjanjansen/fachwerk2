import {
  inject,
  watch,
  onMounted
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

import { S } from "./FScene.js";

export const FCircle = {
  props: { r: { default: 10 } },
  setup() {
    console.log(S);
    const svgSize = inject(S);
    console.log(svgSize.value);
    watch(() => svgSize.value);
  },
  template: `<circle cx="100" cy="100" :r="r" fill="none" stroke="black"></circle>`
};
