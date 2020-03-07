import { ref, watch } from "../deps/vue.js";
import anime from "../deps/anime.js";

import { set } from "../../fachwerk.js";
import { dynamicProps } from "../internals/dynamic.js";

export const FAnimate = {
  props: {
    ...dynamicProps,
    duration: { default: 5000, type: [String, Number] },
    easing: { default: "linear", type: String }
  },
  setup(props, { emit }) {
    const progress = ref(0);
    anime({
      targets: progress,
      value: props.value,
      duration: props.duration,
      easing: props.easing,
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
