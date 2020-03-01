<f-slider set="a" />

<f-scene type="three" width="400" height="400">
  <f-square r="100" position="200 200" :rotation="get('a')" />
    <f-circle r="100" position="200 200" :rotation="get('a')" />
</f-scene>

<f-scene type="canvas" width="400" height="400">
  <f-square r="100" position="200 200" :rotation="get('a')" />
    <f-circle  r="100" position="200 200" :rotation="get('a')" />
</f-scene>

<f-scene type="svg" width="400" height="400">
  <f-square r="100" position="200 200" :rotation="get('a')" />
  <f-circle  r="100" position="200 200" :rotation="get('a')" />
</f-scene>
