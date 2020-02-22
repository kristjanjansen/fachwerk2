import { ref, watch } from "../deps/vue.js";

export const FEditor = {
  props: { content: { default: "", type: String } },
  setup(props, { emit }) {
    const currentContent = ref("");
    watch(
      () => props.content,
      content => {
        currentContent.value = content;
      }
    );
    watch(currentContent, currentContent => {
      emit("input:content", currentContent);
    });

    return { currentContent };
  },
  template: `
  <textarea
    v-model="currentContent"
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
      height: 80vh;
      padding: var(--base2);
    "
  />
  `
};
