import { ref } from "../deps/vue.js";
import { useLocalstore } from "../utils/localstore.js";

const count = ref(1);

const slideMode = useLocalstore(false, "slides");
const index = useLocalstore(0, "index");

export const state = { count, slideMode, index };
export const isSlideVisible = i => {
  if (slideMode.value === true) {
    return i === index.value;
  }
  return true;
};

export const setSlideCount = newCount => (count.value = newCount);
export const onPrevSlide = () => {
  if (slideMode.value === true && index.value > 0) {
    index.value--;
  }
};
export const onNextSlide = () => {
  if (slideMode.value === true && index.value < count.value - 1) {
    index.value++;
  }
};
export const onToggleSlideMode = () => (slideMode.value = !slideMode.value);
