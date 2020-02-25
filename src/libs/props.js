export const transform2dProps = {
  position: { default: null, type: [String, Number, Array, Object] },
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
