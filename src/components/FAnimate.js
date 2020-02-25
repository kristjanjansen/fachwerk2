import { ref, watch } from "../deps/vue.js";
import anime from "../deps/anime.js";

import { set } from "../../fachwerk.js";

export const FAnimate = {
  props: {
    set: { default: "" }
  },
  setup(props, { emit }) {
    const progress = ref(0);
    anime({
      targets: progress,
      value: 100,
      duration: 2000,
      easing: "linear",
      direction: "alternate",
      loop: true
    });
    watch(progress, progress => {
      emit("value", progress);
      if (props.set) {
        set(props.set, progress);
      }
    });
    return () => null;
  }
};
