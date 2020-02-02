import {
  inject,
  watch,
  ref,
  onMounted
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

const useSize = el => {
  const width = ref(null);
  const height = ref(null);
  onMounted(() => {
    const observer = new ResizeObserver(entries => {
      width.value = entries[0].contentRect.width;
      height.value = entries[0].contentRect.height;
    });
    observer.observe(el.value);
  });
  return { width, height };
};

export const FScene = {
  setup() {
    const svg = ref(null);
    const { width, height } = useSize(svg);
    watch(() => console.log(width.value));

    // onMounted(() => {
    //   const observer = new ResizeObserver(entries => {
    //     console.log(entries[0].contentRect);
    //   });
    //   observer.observe(svg.value);
    //   console.log(observer);
    // });
    return { svg };
  },
  template: `<div ref="svg"><svg style="display: block; width: 100%; height: auto; border: 1px solid red" width="200" height="200"><slot /></svg></div>`
};
