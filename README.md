# Fachwerk

## Getting started

To get started you will need a single HTML file and a Markdown file:

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fachwerk</title>
    <link
      rel="stylesheet"
      href="https://fachwerk.github.io/fachwerk/fachwerk.css"
    />
  </head>
  <body>
    <div id="app"></div>
    <script type="module">
      import { fachwerk } from "https://fachwerk.github.io/fachwerk/fachwerk";
      fachwerk();
    </script>
  </body>
</html>
```

**index.md**

```md
# Hello world!
```

## Components

All Fachwerk components are prefixed with `f-` and are loaded automatically when the framework starts.

### Graphics scene

The graphics is handled by the generic `<f-scene>` component that supports following rendering modes:

| mode                      | graphics  | technology                |
| ------------------------- | --------- | ------------------------- |
| `<f-scene mode="svg">`    | 2D vector | SVG                       |
| `<f-scene mode="canvas">` | 2D bitmap | HTML `<canvas>`           |
| `<f-scene mode="three">`  | 3D vector | ThreeJS rendered as SVG   |
| `<f-scene mode="webgl">`  | 3D bitmap | ThreeJS rendered as WebGL |  |

Internally, `<f-scene>` is just a _polymorphic_ wrapper component, passing the rendering duties to technology-specific component, such as `<f-scene-svg>`, `<f-scene-canvas>`, `<f-scene-three>` etc.

### Graphics elements

Fachwerk offers a set of graphics elements/primitives such as `<f-circle>`, `<f-square>` etc. Similar to their parent `<f-scene>` component, each graphics component is a _polymorphic_ component, being aware of their parent type to pick the correct rendering subcomponent:

When writing the following code:

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

#### f-slider

The simplest way to create a dynamic variable is to use `<f-slider>` component with `set` prop:

```vue
<f-slider set="a" />
```

To get the live value, use the `get()` function to print out the value.

```vue
<output>{{ get("a") }}</output>
```

It is more useful to use `get()` function inside components, for example:

```vue
<f-scene>
  <f-square
    r="100"
    position="100 100"
    :rotation="get('a')"
  />
</f-scene>
```

Most components that generate data accept `set=""` as a prop, but there also a `set()` function for cases you want to do something custom.

#### f-animate

Another way of adjusting live variables is to _animate_, _interpolate_ or _tween_ from one value to another during a certain duration.

```vue
<f-animate set="b" />

<output>b is currently {{ get("b") }}</output>

<f-scene>
  <f-square
    r="100"
    position="100 100"
    :rotation="get('b')"
  />
</f-scene>
```

### Events

In addition to the live variables, Fachwerk also provides way to send and receive global events.

To send an event, use `send()` function:

```vue
<button v-on:click="send('click!')">Click me</button>
```

To receive an event, use `receive()` function:

```vue
{{ receive("click!", () => set("clicked", true)) }}

<output>{{ get('clicked') ? 'Clicked!' : 'Waiting for a click'}}</output>
```

### Math

`<f-math>` allows to write math equations in classic [LaTeX](https://en.wikibooks.org/wiki/LaTeX/Mathematics) format. It uses a [KaTeX](https://github.com/Khan/KaTeX) library under the hood.

```vue
<f-math>b = a^2</f-math>
```

The true power of the framework emerges when math functions are combined with live variables:

```vue
<f-slider set="a" />

<f-math>b = {{ get('a',0) }}^2 = {{ get('a',0) ** 2 }}</f-math>
```

## Framework architecture

### Markdown compiler

`<f-compiler>`

The heart of Fachwerk lies on a very simple idea:

**Take a Markdown file, add some VueJS components and live compile them into Vue template**.

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

In the production version [./src/components/FCompiler.js](./src/components/FCompiler.js) is a little more sophisticated, including error handling and injecting utility functions, but the basic idea remains the same.

### Content display

`<f-content>` is working on top of `<f-compiler>`. It accepts `content` prop for Markdown content, parses it via `parseContent()` into pages separated by `---` divider.

Pages can be optionally divided into grid regions, separated by `-` dividers.

Then each region and page is looped over and rendered by `<f-compiler>`.

### Code editing

`<f-editor>` is a simple code editor, a styled `<textarea>` with proper <kbd>tab</kbd> key handling. It is designed for quick livecode snippets editing, not for serious coding work.

There is a separate initiative to intergrate Fachwerk with Monaco code editor from VSCode.

### Content editor and preview

`<f-content-editor>` is a simple two-pane coding environment combining `<f-editor>` code editing and `<f-content>` content viewer.

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

There are also utility functions for getting and setting CSS variables, `getCssVariable()` and `setCssVariable()` respectively.

### Code organization

[./src/components](./src/components)

Public VueJS components, all loaded when the framework is initialized and accessible in Markdown documents.

[./src/utils](./src/utils)

Public utility functions, accessible in Markdown documents.

[./src/internal](./src/utils)

Internal functions used by components.

[./src/deps](./src/deps)

External dependencies redirected to ESM imports from https://unpkg.com

## Testing

Fachwerk relies on a suite of unit tests that verify that utility and internal functions work right.

### Writing tests

Tests are simple functions starting with `test_` that return `actual` and `expected` results:

```js
export const add = value => value + 1

export const test_add = {
  return [add(1), 2]
}
```

### Running tests

Test functions are picked up by test runner `/test.js` that compare the values returned. If they equal, the test passes. If they are not equal, the test fails.

Tests can be run either from the browser or command line.

**For browser testing**, open [/test.html](/test.html) file in local server and open Developer Tools.

**For command line testing** you will need to install [Deno](https://deno.land/std/manual.md) and run the following commands on MacOS:

```js
brew install deno
deno test.js
```

For Windows support, see [these Deno installation instructions](https://deno.land/std/manual.md#download-and-install).

### Running tests automatically

Commandline tests run on each commit to Github repository, there is a Github action in [/.github/actions/test.yml](./.github/actions/test.yml).

## FAQ

### Why not package.json? Why not npm?

Fachwerk fully embraces the future of Javascript modules and is very much inspired by toolless movement and products such as [Deno](https://deno.land/std/manual.md) and [Pika](https://www.pika.dev/) minimalistic Javascript package management.

### What about versioning the releases?

During the initial development, the development happens in the latest `master` branch. In the future, a simple versioning system could be introduced.

### Why not Typescript?

It is a viable option and could provide excellent developer experience for the framework consumers. Fachwerk still prioritizes minimal tooling and directly accessible source code over the Typescript benefits.

Note that this could be reconsidered in the future, giving Deno is already part of the project toolchain.
