import { set as storeSet, toNumber } from "../../fachwerk.js";
import { dynamicProps } from "../internals/dynamic.js";

export const FSlider = {
  props: { ...dynamicProps, value: { default: 0, type: [String, Number] } },
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
    :step="integer ? 1 : step ? step : 0.01"
  />`
};
