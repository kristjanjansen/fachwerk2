import { ref, watch } from "../deps/vue.js";

export const FEditor = {
  props: { value: { default: "", type: String } },
  setup(props, { emit }) {
    const currentValue = ref("aaaa");
    // watch(
    //   () => props.value,
    //   value => (currentValue.value = value)
    // );
    // onInput = () => {
    //   emit("input", currentValue.value);
    // };
    return { currentValue };
  },
  template: `
  <div>
    <textarea
      v-model="currentValue"
      style="
        border: none;
        color: var(--lightergray);
        background: var(--paleblue);
        font-family: var(--font-mono);
        font-size: var(--font-mono-size);
        line-height: var(--font-mono-lineheight);
        outline: none;
        resize: none;
        width: 100%;
        padding: var(--base2);
      "
    />
    <div>{{currentValue}}</div>
  </div>
  `
};
