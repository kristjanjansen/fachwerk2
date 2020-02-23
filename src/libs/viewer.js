import { ref } from "../deps/vue.js";
import { useLocalstore } from "../utils/localstore.js";

const count = ref(1);
const slideMode = ref(false);
const index = ref(0);

export const state = { count, slideMode, index };
export const isSlideVisible = i => {
  if (slideMode.value === true) {
    return i === index.value;
  }
  return true;
};

export const setSlideCount = newCount => (count.value = newCount);
export const onPrevSlide = () => index.value--;
export const onNextSlide = () => index.value++;
export const onToggleSlideMode = () => (slideMode.value = !slideMode.value);
