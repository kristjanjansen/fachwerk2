import { convert } from "../deps/chromatism.js";
import { getCssVariable } from "../../fachwerk.js";

export const docs_color = () => `

\`color('name')\`

Returns a color value. If \`name\` matches one of framework colors, framework color value is returned. If not, a standard CSS color name is returned.

#### Example
  
  color('red')
  color('rebeccapurple')

#### Output

<output>
{{ color('red') }}
{{ color('rebeccapurple')}}
</output>

`;

export const color = name => {
  const color = getCssVariable(`--${name}`);
  return color ? color.trim() : name.trim();
};

export function rgb2hsl(r, g = 0, b = 0, a = null, array = false) {
  return convert({ r, g, b }).hsl;
}
