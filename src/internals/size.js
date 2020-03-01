import { computed } from "../deps/vue.js";

export const sizeProps = {
  width: { default: 300, type: [String, Number] },
  height: { default: null, type: [String, Number] }
};

export const useSize = props => {
  const width = computed(() => props.width);
  const height = computed(() => props.height || props.width);
  const viewBox = computed(() => `0 0 ${props.width} ${props.height}`);
  return { width, height, viewBox };
};
