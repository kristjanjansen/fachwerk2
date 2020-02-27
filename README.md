## Components

### Graphics renderers

The graphics is handled by the generic `<f-scene>` component that supports following rendering modes:

| mode            | graphics | projection | implementation            |
| --------------- | -------- | ---------- | ------------------------- |
| `mode="svg"`    | vector   | 2d         | SVG                       |
| `mode="canvas"` | bitmap   | 2d         | HTML `<canvas>`           |
| `mode="three"`  | vector   | 3d         | ThreeJS rendered as SVG   |
| `mode="webgl"`  | bitmap   | 3d         | ThreeJS rendered as WebGL |

Internally `<f-scene>` is just a "proxy" component, passing the rendering duties to scene rendering components for each rendering mode, such as `<f-scene-svg>`, `<f-scene-canvas>`, `<f-scene-three>` etc.

Rendering components set up the context for particular rendering technology such as `<svg>` tag, canvas `getContext()` or ThreeJS `scene` object etc.

## Development

### Code organization

#### [./src/components](./src/components)

Public VueJS components, all loaded when framework is intialized and accessible in Markdown documents.

#### [./src/utils](./src/utils)

Public utility functions, all accessible in Markdown documents.

#### [./src/internal](./src/utils)

Internal functions used by components.

#### [./src/deps](./src/deps)

External dependencies, redirected to ESM imports from https://unpkg.com

## Testing

Fachwerk relies on number of unit tests that make sure that internal functions and public utilities work right.

### Writing tests

Tests are simple functions starting with `test_` that return `actual` and `expected` results:

```js
export const add = value => value + 1

export const test_add = {
  return [add(1), 2]
}
```

### Running tests

Test functions are picked up by test runner `/test.js` and the test return values are compared. If they equal, the test passes.

Tests can be run either from browser or command line.

For browser testing, open [/test.html](/test.html) file in local server and open Developer Tools.

For commandline testing install [Deno](https://deno.land/std/manual.md) and run the following commands on MacOS:

```js
brew install deno
deno test.js
```

For Windows support see [these instructions](https://deno.land/std/manual.md#download-and-install).

### Running tests automatically

Commandline tests are run on each commit to Gituhb repository, there is a Github action in [/.github/actions/test.yml](./.github/actions/test.yml).

## FAQ

### Why not package.json? Why not NPM?

Fachwerk fully embraces the future of Javascript modules and is very much inspired from toolless movement, such as [Deno](https://deno.land/std/manual.md) and [Pika](https://www.pika.dev/) minimalistic Javascript package management.

### Why not Typescript?

It is definitely a viable option and could provice excellent developer experience for the framework consumers. Fachwerk still prioritizes minimal tooling and accessible source code over the Typescript benefits.

Note that this could be reconsidered in the future, giving Deno is already part of the project's toolchain.
