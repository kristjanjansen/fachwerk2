//@ts-check
import {
  computed,
  watch,
  inject
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";
import { deg2rad } from "../utils.js";

export const transform2dProps = {
  position: { default: [0, 0], type: [String, Number, Array, Object] },
  rotation: { default: 0, type: [String, Number] },
  scale: { default: [1, 1], type: [String, Number, Array, Object] },
  x: { default: null, type: [String, Number] },
  y: { default: null, type: [String, Number] }
};

export const transform3dProps = {
  position: { default: [0, 0, 0], type: [String, Number, Array, Object] },
  rotation: { default: [0, 0, 0], type: [String, Number, Array, Object] },
  scale: { default: [1, 1, 1], type: [String, Number, Array, Object] },
  x: { default: 0, type: [String, Number] },
  y: { default: 0, type: [String, Number] },
  z: { default: 0, type: [String, Number] }
};

const transform2d = props => {
  const x = props.x || props.position[0];
  const y = props.y || props.position[1];

  const scaleX = props.scale[0];
  const scaleY = props.scale[1];

  const rotation = props.rotation;

  return { x, y, scaleX, scaleY, rotation };
};

export const useTransform2d = props =>
  computed(() => {
    const { x, y, scaleX, scaleY, rotation } = transform2d(props);
    const translate = `translate(${x} ${y})`;
    const rotate = `rotate(${rotation})`;
    const scale = `scale(${scaleX} ${scaleY})`;
    return [translate, rotate, scale].join(" ");
  });

export const useTransform3d = (props, object) => {
  watch(
    () => props.rotation,
    () => {
      object.rotation.x = deg2rad(props.rotation);
      object.rotation.y = deg2rad(props.rotation);
      object.rotation.z = deg2rad(props.rotation);
    }
  );
};

export const transform2dCanvas = (props, ctx) => {
  const { x, y, scaleX, scaleY, rotation } = transform2d(props);
  ctx.translate(x, y);
  ctx.scale(2 * scaleX, 2 * scaleY);
  ctx.rotate(deg2rad(rotation));
};

export const reset2dCanvas = ctx => {
  ctx.resetTransform();
  ctx.scale(2, 2);
};
