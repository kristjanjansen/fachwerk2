import { convert } from "https://cdn.pika.dev/chromatism@^3.0.0";

export function rgb2hsl(r, g = 0, b = 0, a = null, array = false) {
  return convert({ r, g, b }).hsl;
}
