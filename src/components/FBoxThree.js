import { inject } from "../deps/vue.js";
import {
  Group,
  BoxGeometry,
  Mesh,
  EdgesGeometry,
  LineSegments
} from "../deps/three.js";

import { stylingProps, useThreeFill, useThreeStroke } from "../libs/styling.js";
import { transform2dProps, useTransform3d } from "../libs/transforms.js";

export const FBoxThree = {
  props: { r: { default: 1 }, ...transform2dProps, ...stylingProps },
  setup(props) {
    const scene = inject("scene");

    var group = new Group();

    const geometry = new BoxGeometry(props.r, props.r, props.r);

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

    useTransform3d(props, group);

    return () => null;
  }
};
