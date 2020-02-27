import { inject } from "../deps/vue.js";

import {
  Group,
  PlaneGeometry,
  Mesh,
  EdgesGeometry,
  LineSegments
} from "../deps/three.js";

import {
  stylingProps,
  useThreeFill,
  useThreeStroke,
  transformThreeProps,
  useThreeTransform
} from "../internals/index.js";

export const FBoxThree = {
  props: { r: { default: 1 }, ...transformThreeProps, ...stylingProps },
  setup(props) {
    const scene = inject("scene");

    var group = new Group();

    const geometry = new PlaneGeometry(props.r, props.r, props.r);

    if (props.fill !== "none") {
      const fill = useThreeFill(props);
      const fillObject = new Mesh(geometry, fill.value);
      group.add(fillObject);
    }

    if (props.stroke !== "none") {
      const edges = new EdgesGeometry(geometry);
      const stroke = useThreeStroke(props);
      const strokeObject = new LineSegments(edges, stroke.value);
      group.add(strokeObject);
    }

    scene.add(group);

    useThreeTransform(props, group);

    return () => null;
  }
};
