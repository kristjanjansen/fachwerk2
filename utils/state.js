import {
  createApp,
  ref,
  reactive
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

const store = ref({});

export const set = (key, value) => (store.value[key] = value);

export const get = (key = null) => (key ? store.value[key] : store.value);
