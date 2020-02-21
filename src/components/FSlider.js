import { set as storeSet } from "../../fachwerk.js";

export const FSlider = {
  props: { value: { default: 0 }, set: { default: "" } },
  setup({ set }, { emit }) {
    const onInput = e => {
      const value = parseFloat(e.target.value);
      emit("value", value);
      if (set) {
        storeSet(set, value);
      }
    };
    return { onInput };
  },
  template: `<input
    type="range"
    :value="value"
    @input="onInput"
    max="200"
    step="0.01"
  />`
};
