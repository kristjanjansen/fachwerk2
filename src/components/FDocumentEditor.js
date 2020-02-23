import { ref, watch, onMounted } from "../deps/vue.js";

export const FDocumentEditor = {
  props: { content: { default: "", type: String } },
  setup(props, { emit }) {
    const editor = ref(null);
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
    onMounted(() => {
      editor.value.onkeydown = function(e) {
        if (e.keyCode === 9) {
          const val = this.value;
          const start = this.selectionStart;
          const end = this.selectionEnd;
          this.value = val.substring(0, start) + "  " + val.substring(end);
          this.selectionStart = this.selectionEnd = start + 2;
          return false;
        }
      };
    });
    return { currentContent, editor };
  },
  template: `
  <textarea
    ref="editor"
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
