export const FSlider = {
  props: { value: { default: 0 } },
  setup(props, { emit }) {
    const onInput = e => emit("value", parseFloat(e.target.value));
    return { onInput };
  },
  template: `<input
    type="range"
    :value="value"
    @input="onInput"
  />`
};
