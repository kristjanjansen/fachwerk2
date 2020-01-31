# Hello Fachwerk2

<f-slider set="a" />

<f-slider set="b" />

{{ get() }}

<f-scene>
  <f-circle :r="get('a')" />
  <f-circle :r="get('b')" />
</f-scene>

Based on Vue 3.0
