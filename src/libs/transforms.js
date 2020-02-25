import { computed, watch } from "../deps/vue.js";
import { deg2rad, scale } from "../../fachwerk.js";
import { parseCoords, normalizeScale } from "../../fachwerk.js";

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
  x: { default: null, type: [String, Number] },
  y: { default: null, type: [String, Number] },
  z: { default: null, type: [String, Number] }
};

// export const transform2d = props => {
//   const position = parseCoords(props.position)[0];
//   const rotation2 = parseCoords(props.rotation)[0];
//   const scale = parseCoords(props.scale, normalizeScale)[0];

//   const x = 0;
//   const y = 0;
//   const scaleX = 1;
//   const scaleY = 1;
//   const rotation = 0;

//   return { x, y, scaleX, scaleY, rotation };
// };

export const transform2d = props => {
  let positionOrXYZ = props.position;

  if (props.x || props.y || props.z) {
    positionOrXYZ = [props.x || 0, props.y || 0, props.z || 0];
  }
  const position = parseCoords(positionOrXYZ)[0];
  const rotation = parseCoords(props.rotation)[0];
  const scale = parseCoords(props.scale, normalizeScale)[0];

  return { position, rotation, scale };
};

export const useSvgTransform = props => {
  return computed(() => {
    const { position, rotation, scale } = transform2d(props);
    const positionStr = `translate(${position[0]} ${position[1]})`;
    const rotationStr = `rotate(${rotation[0]})`;
    const scaleStr = `scale(${scale[0]} ${scale[1]})`;

    return [positionStr, rotationStr, scaleStr].join(" ");
  });
};

export const useTransform3d = (props, object) => {
  watch(
    () => props.position,
    () => {
      object.position.x = scale(props.x, 0, 200, -100, 100);
      object.position.y = scale(props.y, 0, 200, 100, -100);
      object.rotation.z = deg2rad(props.rotation);
    }
  );
  watch(
    () => props.rotation,
    () => {
      object.rotation.x = deg2rad(props.rotation);
      object.rotation.y = deg2rad(props.rotation);
      object.rotation.z = deg2rad(360 - props.rotation);
    }
  );
  // watch(
  //   () => props.scale,
  //   () => {
  //     object.scale.x = props.scale[0];
  //     object.scale.y = props.scale[1];
  //     object.scale.z = props.scale[2];
  //   }
  // );
};

export const transform2dCanvas = (props, ctx) => {
  const { position, rotation, scale } = transform2d(props);
  ctx.translate(position[0], position[1]);
  ctx.rotate(deg2rad(rotation[0]));
  ctx.scale(scale[0], scale[1]);
};

export const reset2dCanvas = ctx => {
  ctx.resetTransform();
};
