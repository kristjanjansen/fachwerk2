import { ref } from "../deps/vue.js";

const state = ref({});

export const appSet = (key, value) => (state.value[key] = value);

export const appGet = (key = null) => (key ? state.value[key] : state.value);
