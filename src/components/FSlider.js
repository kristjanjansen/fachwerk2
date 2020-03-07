import { set as storeSet, toNumber } from "../../fachwerk.js";
import { dynamicProps } from "../internals/dynamic.js";

export const FSlider = {
  props: { ...dynamicProps },
  setup(props, { emit }) {
    const onInput = e => {
      const currentValue = toNumber(e.target.value);
      emit("value", currentValue);
      if (props.set) {
        storeSet(props.set, currentValue);
      }
    };
    return { onInput };
  },
  template: `<input
    type="range"
    :value="value"
    @input="onInput"
    :min="from"
    :max="to"
    :step="float ? 0.01 : step ? step : 1"
  />`
};
