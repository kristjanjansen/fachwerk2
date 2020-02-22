import { ref } from "../deps/vue.js";
import { set } from "../../fachwerk.js";

export const FFetch = {
  props: {
    src: {
      required: true,
      type: String
    },
    set: {
      default: null,
      type: String
    }
  },
  setup(props) {
    const content = ref("");
    fetch(props.src)
      .then(res => res.text())
      .then(res => {
        content.value = res;
        if (props.set) {
          set(props.set, content.value);
        }
      });
    return { content };
  },
  template: `<slot :value="content" />`
};
