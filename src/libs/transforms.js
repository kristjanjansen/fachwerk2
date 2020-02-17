//@ts-check
const transform2d = props => {
  const x = props.x || props.position[0];
  const y = props.y || props.position[1];

  const scaleX = props.scale[0];
  const scaleY = props.scale[1];

  const rotateZ = props.rotate;

  return { x, y, scaleX, scaleY, rotateZ };
};

export const transform2dSvg = props => {
  const { x, y, scaleX, scaleY, rotateZ } = transform2d(props);
  const translate = `translate(${x} ${y})`;
  const rotate = `rotate(${rotateZ})`;
  const scale = `scale(${scaleX} ${scaleY})`;

  return [translate, rotate, scale].join(" ");
};
