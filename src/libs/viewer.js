import { ref } from "../deps/vue.js";

export const state = ref({ slides: false, count: 1, index: 0 });

export const isSlideVisible = index => {
  if (state.value.slides) {
    return index == state.value.index;
  }
  return true;
};

export const setSlideCount = count => (state.value.count = count);
export const onPrevSlide = () => state.value.index--;
export const onNextSlide = () => state.value.index++;
export const onToggleSlideMode = () =>
  (state.value.slides = !state.value.slides);
