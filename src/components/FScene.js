import { h } from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

import { FSceneCanvas } from "./FSceneCanvas.js";
import { FScene2 } from "./FScene2.js";
import { FScene3 } from "./FScene3.js";

export const FScene = (props, context) => {
  return h(FScene3, { props, ...context }, context.slots);
};

import { FBoxCanvas } from "./FBoxCanvas.js";
import { FBox2 } from "./FBox2.js";
import { FBox3 } from "./FBox3.js";

export const FBox = (props, context) => {
  return h(FBox3, { props, ...context }, context.slots);
};
