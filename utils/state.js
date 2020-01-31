import { ref } from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

const state = ref({});

export const set = (key, value) => (state.value[key] = value);

export const get = (key = null) => (key ? state.value[key] : state.value);
