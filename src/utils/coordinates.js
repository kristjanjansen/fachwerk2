import {
  toNumber,
  isObject,
  isString,
  isArray,
  isNumber,
  isBoolean,
  isNull
} from "./types.js";

import { padArrayRight } from "./array.js";

export const normalizeDefault = arr => {
  if (arr == null) {
    return [0, 0, 0];
  }
  return padArrayRight(arr, 3, 0).map(value => toNumber(value));
};

export const normalizeScale = arr => {
  if (arr === null || arr.length === 0) {
    return [1, 1, 1];
  }
  if (arr.length == 1) {
    return [arr[0], arr[0], arr[0]];
  }
  return normalizeDefault(arr);
};

export const normalizeRotation3 = arr => {
  if (arr === null) {
    return [[1, 1, 1]];
  }
  if (arr.length == 1) {
    return [0, 0, arr[0]];
  }
  return normalizeDefault(arr);
};

export const coordsTextToArray = (text, normalizer) => {
  if (text.trim().length === 0) {
    return [normalizer(null)];
  }
  return text
    .split(",")
    .map(t =>
      t
        .trim()
        .replace(/\s+/g, " ")
        .split(" ")
        .map(value => toNumber(value))
    )
    .map(normalizer);
};

export const coordsNumberToArray = (number, normalizer) => {
  return [normalizer([number])];
};

export const coordsArrayToArray = (arr, normalizer) => {
  const containsArrays = arr.length && arr.filter(a => isArray(a)).length;
  const coords = arr.map(a => {
    if (isArray(a)) {
      return normalizer(a);
    }
    if (isString(a)) {
      if (a.split(/\s+/g).length > 1) {
        return coordsTextToArray(a, normalizer)[0];
      }
      return containsArrays ? normalizer([a]) : makeNumber(a);
    }
    if (isNumber(a)) {
      return containsArrays ? normalizer([a]) : a;
    }
    if (isObject(a)) {
      return coordsObjectToArray(a, normalizer)[0];
    }
    if (isBoolean(a)) {
      return containsArrays ? normalizer([0]) : 0;
    }
    if (isNull(a)) {
      return containsArrays ? normalizer([0]) : 0;
    }
    return a;
  });
  if (isArray(coords[0])) {
    return coords;
  }
  return [normalizer(coords)];
};

export const coordsObjectToArray = (obj, normalizer = normalizeDefault) => {
  if (
    obj.hasOwnProperty("x") &&
    obj.hasOwnProperty("y") &&
    obj.hasOwnProperty("z")
  ) {
    return [normalizer([obj.x, obj.y, obj.z])];
  }
  if (
    obj.hasOwnProperty("x") &&
    obj.hasOwnProperty("y") &&
    !obj.hasOwnProperty("z")
  ) {
    return [normalizer([obj.x, obj.y, 0])];
  }
  if (
    obj.hasOwnProperty("x") &&
    !obj.hasOwnProperty("y") &&
    obj.hasOwnProperty("z")
  ) {
    return [normalizer([obj.x, 0, obj.z])];
  }
  if (
    !obj.hasOwnProperty("x") &&
    obj.hasOwnProperty("y") &&
    obj.hasOwnProperty("z")
  ) {
    return [normalizer([obj.x, 0, obj.z])];
  }
  if (
    obj.hasOwnProperty("x") &&
    !obj.hasOwnProperty("y") &&
    !obj.hasOwnProperty("z")
  ) {
    return [normalizer([obj.x, 0, 0])];
  }
  if (
    !obj.hasOwnProperty("x") &&
    obj.hasOwnProperty("y") &&
    !obj.hasOwnProperty("z")
  ) {
    return [normalizer([0, obj.y, 0])];
  }
  if (
    !obj.hasOwnProperty("x") &&
    !obj.hasOwnProperty("y") &&
    obj.hasOwnProperty("z")
  ) {
    return [normalizer([0, 0, obj.z])];
  }
  return [normalizer([])];
};

export const parseCoords = (c, normalizer = normalizeDefault) => {
  if (isString(c)) {
    return coordsTextToArray(c, normalizer);
  }
  if (isNumber(c)) {
    return coordsNumberToArray(c, normalizer);
  }
  if (isArray(c)) {
    return coordsArrayToArray(c, normalizer);
  }
  if (isObject(c)) {
    return coordsObjectToArray(c, normalizer);
  }
  return null;
};

// Strings

export const test_string_empty_to_coordinates = () => {
  return [parseCoords(" "), [[0, 0, 0]]];
};

export const test_string_empty_to_scale_coordinates = () => {
  return [parseCoords(" ", normalizeScale), [[1, 1, 1]]];
};

export const test_string_0_to_coordinates = () => {
  return [parseCoords("0"), [[0, 0, 0]]];
};

export const test_string_0_to_scale_coordinates = () => {
  return [parseCoords("0", normalizeScale), [[0, 0, 0]]];
};

export const test_string_1_to_coordinates = () => {
  return [parseCoords("1"), [[1, 0, 0]]];
};

export const string_1_1_to_coordinates = () => {
  const expected = [[1, 1, 0]];
  const actual = parseCoords("1 1");
  return [expected, actual];
};

export const string_1_1_a_spaced_to_coordinates = () => {
  const expected = [[1, 1, 0]];
  const actual = parseCoords("1  1        a");
  return [expected, actual];
};

export const string_1_1_a_1_spaced_to_coordinates = () => {
  const expected = [[1, 1, 0]];
  const actual = parseCoords("1  1        a 1");
  return [expected, actual];
};

export const string_1_and_1_to_coordinates = () => {
  const expected = [
    [1, 0, 0],
    [1, 0, 0]
  ];
  const actual = parseCoords("1,1");
  return [expected, actual];
};

export const string_1_and_1_in_array_to_coordinates = () => {
  const expected = [[1, 1, 0]];
  const actual = parseCoords(["1", "1"]);
  return [expected, actual];
};

export const string_1_1_and_1_1_in_array_to_coordinates = () => {
  const expected = [
    [1, 1, 0],
    [1, 1, 0]
  ];
  const actual = parseCoords(["1 1", "1 1"]);
  return [expected, actual];
};

export const string_1_and_1_spaced_to_coordinates = () => {
  const expected = [
    [1, 0, 0],
    [1, 0, 0]
  ];
  const actual = parseCoords("1 ,   1");
  return [expected, actual];
};

export const string_1_1_and_1_1_to_coordinates = () => {
  const expected = [
    [1, 1, 0],
    [1, 1, 0]
  ];
  const actual = parseCoords("1 1, 1 1");
  return [expected, actual];
};

export const string_1_1_1_to_coordinates = () => {
  const expected = [[1, 1, 1]];
  const actual = parseCoords("1 1 1");
  return [expected, actual];
};

export const string_1_1_1_1_to_coordinates = () => {
  const expected = [[1, 1, 1]];
  const actual = parseCoords("1 1 1 1");
  return [expected, actual];
};

export const string_1_1_1_and_1_1_1_to_coordinates = () => {
  const expected = [
    [1, 1, 1],
    [1, 1, 1]
  ];
  const actual = parseCoords("1 1 1, 1 1 1");
  return [expected, actual];
};

export const string_1_1_1_1_and_1_1_1_1_to_coordinates = () => {
  const expected = [
    [1, 1, 1],
    [1, 1, 1]
  ];
  const actual = parseCoords("1 1 1 1, 1 1 1 1");
  return [expected, actual];
};

// Test numbers

export const test_number_0_to_coordinates = () => {
  return [parseCoords(0), [[0, 0, 0]]];
};

export const test_number_1_to_coordinates = () => {
  return [parseCoords(1), [[1, 0, 0]]];
};

export const test_number_2_to_coordinates = () => {
  return [parseCoords(2), [[2, 0, 0]]];
};

export const test_number_1_to_scale_coordinates = () => {
  return [parseCoords(1, normalizeScale), [[1, 1, 1]]];
};

export const test_number_2_to_scale_coordinates = () => {
  return [parseCoords(2, normalizeScale), [[2, 2, 2]]];
};

export const test_number_01_to_coordinates = () => {
  return [parseCoords(0.1), [[0.1, 0, 0]]];
};

export const test_number_1_in_array_to_coordinates = () => {
  return [parseCoords([1]), [[1, 0, 0]]];
};

export const test_number_1_in_array_array_to_coordinates = () => {
  return [parseCoords([[1]]), [[1, 0, 0]]];
};

export const test_number_1_1_in_array_to_coordinates = () => {
  return [parseCoords([1, 1]), [[1, 1, 0]]];
};

export const test_number_1_1_in_array_array_to_coordinates = () => {
  return [parseCoords([[1, 1]]), [[1, 1, 0]]];
};

export const test_array_number_1_1_1_in_array_to_coordinates = () => {
  return [parseCoords([1, 1, 1]), [[1, 1, 1]]];
};

export const test_number_1_1_1_in_array_array_to_coordinates = () => {
  return [parseCoords([[1, 1, 1]]), [[1, 1, 1]]];
};

export const test_number_1_1_1_1_in_array_array_to_coordinates = () => {
  return [parseCoords([[1, 1, 1, 1]]), [[1, 1, 1]]];
};

export const test_array_number_1_1_1_to_coordinates = () => {
  return [parseCoords([1, 1, 1]), [[1, 1, 1]]];
};

export const test_array_number_1_1_1_1_to_coordinates = () => {
  return [parseCoords([1, 1, 1, 1]), [[1, 1, 1]]];
};

// Test objects

export const test_object_0_to_coordinates = () => {
  return [parseCoords({ x: 0 }), [[0, 0, 0]]];
};

export const test_object_string_1_to_coordinates = () => {
  return [parseCoords({ x: "1" }), [[1, 0, 0]]];
};

export const test_object_number_1_to_coordinates = () => {
  return [parseCoords({ x: "1" }), [[1, 0, 0]]];
};

export const test_object_number_1_1_to_coordinates = () => {
  return [parseCoords({ x: 1, y: 1 }), [[1, 1, 0]]];
};

export const test_object_number_1_1_1_to_coordinates = () => {
  return [parseCoords({ x: 1, y: 1, z: 1 }), [[1, 1, 1]]];
};

export const test_object_number_1_1_1_gibberish_to_coordinates = () => {
  return [parseCoords({ x: 1, y: 1, z: 1, a: 1 }), [[1, 1, 1]]];
};

export const test_object_number_01_to_coordinates = () => {
  return [parseCoords({ x: "0.1" }), [[0.1, 0, 0]]];
};

export const test_object_number_1_in_array_to_coordinates = () => {
  return [parseCoords([{ x: 1 }]), [[1, 0, 0]]];
};

export const test_object_number_1_1_in_array_to_coordinates = () => {
  return [
    parseCoords([{ x: 1 }, { x: 1 }]),
    [
      [1, 0, 0],
      [1, 0, 0]
    ]
  ];
};

export const test_object_number_1_1_1_in_array_to_coordinates = () => {
  return [
    parseCoords([{ x: 1 }, { x: 1 }, { x: 1 }]),
    [
      [1, 0, 0],
      [1, 0, 0],
      [1, 0, 0]
    ]
  ];
};

export const test_object_number_1_1_1_1_in_array_to_coordinates = () => {
  return [
    parseCoords([{ x: 1 }, { x: 1 }, { x: 1 }, { x: 1 }]),
    [
      [1, 0, 0],
      [1, 0, 0],
      [1, 0, 0],
      [1, 0, 0]
    ]
  ];
};

// SKIP
// export const test_object_everything_in_array_to_coordinates = () => {
//   return [
//     parseCoords([
//       { x: 1, y: "1", z: false },
//       { x: 1, y: 1, z: null, a: 1 }
//     ]),
//     [
//       [1, 1, 0],
//       [1, 1, 0]
//     ]
//   ];
// };

export const test_array_number_1_1_1_in_array_array_to_coordinates = () => {
  return [parseCoords([[1, 1, 1]]), [[1, 1, 1]]];
};

// Mixed coordinate values

export const test_array_array_number_string_1_1_to_coordinates = () => {
  return [parseCoords([[1, "1"]]), [[1, 1, 0]]];
};

export const test_array_1_sting_1_to_coordinates = () => {
  return [
    parseCoords([[1], "1"]),
    [
      [1, 0, 0],
      [1, 0, 0]
    ]
  ];
};

export const test_array_1_number_1_to_coordinates = () => {
  return [
    parseCoords([[1], 1]),
    [
      [1, 0, 0],
      [1, 0, 0]
    ]
  ];
};

export const test_array_1_object_1_to_coordinates = () => {
  return [
    parseCoords([[1], { x: 1 }]),
    [
      [1, 0, 0],
      [1, 0, 0]
    ]
  ];
};
