export const isObject = input =>
  typeof input === "object" &&
  !isArray(input) &&
  Object.prototype.toString.call(input) !== "[object Date]";

export const isBoolean = input => typeof input === typeof true;

export const isNull = input => input === null && typeof input === "object";

export const isArray = input => Array.isArray(input);

export const isNumber = input => typeof input === "number";

export const isString = input => typeof input === "string";

export const isFunction = input => typeof input === "function";

export const toNumber = (value, def = null) => {
  const float = parseFloat(value);
  if (isNaN(float)) {
    return def;
  }
  return float;
};

export const test_isObject_object = () => [isObject({ x: 1 }), true];

export const test_isObject_array = () => [isObject([1]), false];

export const test_isObject_date = () => [isObject(new Date()), false];
