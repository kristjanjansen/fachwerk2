import { ref } from "../deps/vue.js";

export const useFetch = src => {
  const data = ref("");
  if (src) {
    fetch("./index.md")
      .then(res => res.text())
      .then(res => {
        data.value = res;
      });
  }
  return { data };
};
