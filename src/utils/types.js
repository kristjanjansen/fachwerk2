export const isObject = input => typeof object == "object" && Object(input);

export const isArray = input => Array.isArray(input);

export const isString = input => typeof input === "string";

export const isFunction = input => typeof input === "function";

export const toNumber = (value, def = null) => {
  const float = parseFloat(value);
  if (isNaN(float)) {
    return def;
  }
  return float;
};
