<f-slider set="b" />

<f-scene3>
  <f-box3 :rotation="get('b')" />
</f-scene3>

<f-slider set="a" />

<f-canvas>
  <f-canvas-circle :r="get('a')" />
</f-canvas>
