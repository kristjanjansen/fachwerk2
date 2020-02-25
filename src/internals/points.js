import { computed } from "../deps/vue.js";
import { parseCoords } from "../utils/coordinates.js";

export const points2dProps = {
  x: { default: null, type: [String, Number] },
  y: { default: null, type: [String, Number] },
  points: { default: null, type: [String, Number, Array, Object] }
};

export const points3dProps = {
  x: { default: null, type: [String, Number] },
  y: { default: null, type: [String, Number] },
  z: { default: null, type: [String, Number] },
  points: { default: null, type: [String, Number, Array, Object] }
};

export const usePoints = props => {
  return computed(() => {
    if (props.points) {
      return parseCoords(props.points);
    }
    if (props.x || props.y || props.z) {
      return parseCoords([props.x || 0, props.y || 0, props.z || 0]);
    }
    return parseCoords([0, 0, 0]);
  });
};

export const test_usePoints_default_2d_props = () => {
  return [usePoints(points2dProps).value, [[0, 0, 0]]];
};
