//@ts-check
import {
  computed,
  inject
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

import {
  BoxGeometry,
  MeshLambertMaterial,
  MeshBasicMaterial,
  DoubleSide,
  Mesh,
  BoxBufferGeometry,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments
} from "https://unpkg.com/three@0.113.2/build/three.module.js";

export const stylingProps = {
  stroke: { default: "black", type: [String] },
  strokeWidth: { default: 3, type: [String, Number] },
  fill: { default: "none", type: [String, Number] },
  opacity: { default: 1, type: [String, Number] },
  fillOpacity: { default: 1, type: [String, Number] },
  strokeOpacity: { default: 1, type: [String, Number] }
};

export const useStyling2d = props => {
  const svgUnit = inject("svgUnit");
  return computed(() => {
    const fill = props.fill;
    const stroke = props.stroke;
    const strokeWidth = parseFloat(props.strokeWidth) * svgUnit.value;
    return { fill, stroke, strokeWidth };
  });
};

export const styling2dCanvas = (props, ctx) => {
  ctx.fillStyle = props.fill;
  ctx.strokeStyle = props.stroke;
  ctx.lineWidth = props.strokeWidth;
};

export const useMaterial3d = props => {
  const fill = computed(() => {
    return new MeshBasicMaterial({
      color: props.fill,
      opacity: props.opacity,
      side: DoubleSide
    });
  });
  const stroke = computed(() => {
    return new LineBasicMaterial({
      color: props.stroke,
      linewidth: props.strokeWidth,
      linecap: "round",
      linejoin: "round",
      opacity: props.opacity,
      side: DoubleSide
    });
  });
  return { fill, stroke };
};
