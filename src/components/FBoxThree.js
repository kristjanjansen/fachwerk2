import { inject } from "../deps/vue.js";
import {
  BoxGeometry,
  Mesh,
  BoxBufferGeometry,
  EdgesGeometry,
  LineSegments,
  Group
} from "../deps/three.js";

import { stylingProps, useMaterial3d } from "../libs/styling.js";
import { transform2dProps, useTransform3d } from "../libs/transforms.js";

export const FBoxThree = {
  props: { r: { default: 1 }, ...transform2dProps, ...stylingProps },
  setup(props) {
    const scene = inject("scene");

    var group = new Group();
    const { fill, stroke } = useMaterial3d(props);

    const fillGeometry = new BoxGeometry(props.r, props.r, props.r);
    const fillBox = new Mesh(fillGeometry, fill.value);
    group.add(fillBox);

    const geometry = new BoxBufferGeometry(props.r, props.r, props.r);
    const edges = new EdgesGeometry(geometry);
    const strokeBox = new LineSegments(edges, stroke.value);
    group.add(strokeBox);

    scene.add(group);

    useTransform3d(props, group);

    return () => null;
  }
};
