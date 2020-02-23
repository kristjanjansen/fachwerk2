import { ref } from "../deps/vue.js";

export const useFetch = src => {
  const document = ref("");
  if (src) {
    fetch("./index.md")
      .then(res => res.text())
      .then(res => {
        document.value = res;
      });
  }
  return { document };
};
