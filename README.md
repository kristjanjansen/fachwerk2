## Components

### Graphics

The graphics is handled by the generic `<f-scene>` component that supports following rendering modes:

| mode                      | graphics | projection | implementation            |
| ------------------------- | -------- | ---------- | ------------------------- |
| `<f-scene mode="svg">`    | vector   | 2d         | SVG                       |
| `<f-scene mode="canvas">` | bitmap   | 2d         | HTML `<canvas>`           |
| `<f-scene mode="three">`  | vector   | 3d         | ThreeJS rendered as SVG   |
| `<f-scene mode="webgl">`  | bitmap   | 3d         | ThreeJS rendered as WebGL |

Internally, `<f-scene>` is just a wrapper component, passing the rendering duties to scene rendering components for each rendering mode, such as `<f-scene-svg>`, `<f-scene-canvas>`, `<f-scene-three>` etc.

Each rendering component sets up the context for particular rendering technology such as `<svg>` tag, canvas `getContext()`, ThreeJS `scene` object etc.

### Graphics primitives

Fachwerk offers a set of components for graphics primitives such as `<f-circle>`, `<f-square>` etc. Similar to the scene component above, each primitive is a _polymorphic_ component, a wrapper passing the rendering to the underlying render-specific component.

Graphics primitives components are aware which scene type is their parent and they pick the correct rendering component accordingly.

When writing the following code,

```html
<f-scene mode="svg">
  <f-square />
</f-scene>
```

it will be rendered as:

```html
<f-scene-svg>
  <f-square-svg />
</f-scene-svg>
```

### Live variables

Fachwerk supports live variables, they can be easily set and used to create dynamic experiences.

The simplest way to create a dynamic variable is to use `<f-slider>` component with `set` prop:

```html
<f-slider set="a" />
```

To get the live value, use the `get()` function to print out the value.

```handlebars
{{ get("a") }}
```

It is more useful to use `get()` function inside components, for example:

```html
<f-scene>
  <f-square :rotation="get('a')" />
</f-scene>
```

<!-- f-animate -->

<!-- set() -->

### Math

`<f-math>` allows to write math equations in classic [LaTeX](https://en.wikibooks.org/wiki/LaTeX/Mathematics) format. It uses a [KaTeX](https://github.com/Khan/KaTeX) library under the hood.

```html
<f-math>b = a^2</f-math>
```

The true power of the framework appears when math functions are combined with live variables:

```html
<f-slider set="a" />

<f-math>b = {{ get('a',0) }}^2 = {{ get('a',0) ** 2 }}</f-math>
```

## Development

### Architecture

The heart of Fachwerk lies on a very simple idea: **live-compile a Markdown file as a VueJS template**.

In VueJS 3.x code it can be expressed as:

```js
import {
  compile,
  createApp
} from "https://unpkg.com/vue@3.0.0-alpha.4/dist/vue.esm.js";

import marked from "https://unpkg.com/marked@0.8.0/lib/marked.esm.js";

const markdown = `
# Hello

<sample-component />
`;

const FCompiler = {
  components: { SampleComponent: { template: "world" } },
  setup() {
    const template = marked(markdown);
    return () => compile(template)();
  }
};

createApp(FCompiler).mount("#app");
```

In the production version [./src/components/FCompiler.js](./src/components/FCompiler.js) is a little more complicated, including error handling and utility functions, but the basic idea remains the same.

### Code organization

[./src/components](./src/components)

Public VueJS components, all loaded when the framework is initialized and accessible in Markdown documents.

[./src/utils](./src/utils)

Public utility functions, all accessible in Markdown documents.

[./src/internal](./src/utils)

Internal functions used by components.

[./src/deps](./src/deps)

External dependencies redirected to ESM imports from https://unpkg.com

### CSS and styling

Global CSS resides in `/fachwerk.css` file and relies heavily on CSS variables.

Component CSS is stored as an `css` attribute on each component:

```js
const ExampleComponent = {
  template: `<div class="ExampleComponent">Hello</div>`,
  css: {
    .ExampleComponent {
      color: var(--red);
    }
  }
}
```

In `utils/css.js` there is a function `componentCss()` that gets the `css` attribute values from all components, merges them into a single CSS string and injects it to HTML `<style>` tag:

```js
import { components } from "https://fachwerk.github.io/fachwerk/fachwerk.js";

componentCss(components);
```

## Testing

Fachwerk relies on unit tests that make sure that internal functions and public utilities work right.

### Writing tests

Tests are simple functions starting with `test_` that return `actual` and `expected` results:

```js
export const add = value => value + 1

export const test_add = {
  return [add(1), 2]
}
```

### Running tests

Test functions are picked up by test runner `/test.js`, where return values are compared. If they equal, the test passes. If they are not equal, the test fails.

Tests can be run either from the browser or command line.

For browser testing, open [/test.html](/test.html) file in local server and open Developer Tools.

For command line testing, you will need to install [Deno](https://deno.land/std/manual.md) and run the following commands on MacOS:

```js
brew install deno
deno test.js
```

For Windows support, see [these instructions](https://deno.land/std/manual.md#download-and-install).

### Running tests automatically

Command line tests run on each commit to Github repository, there is a Github action in [/.github/actions/test.yml](./.github/actions/test.yml).

## FAQ

### Why not package.json? Why not NPM?

Fachwerk fully embraces the future of Javascript modules and is very much inspired by toolless movement and products such as [Deno](https://deno.land/std/manual.md) and [Pika](https://www.pika.dev/) minimalistic Javascript package management.

### Why not Typescript?

It is a viable option and could provide excellent developer experience for the framework consumers. Fachwerk still prioritizes minimal tooling and directly accessible source code over the Typescript benefits.

Note that this could be reconsidered in the future, giving Deno is already part of the project's toolchain.
