# Hello Fachwerk2

<f-slider v-on:value="v => send('a',v)" />

<f-slider set="b" />

{{ get() }}

{{ receive('a',log) }}

<f-scene>
  <f-circle :r="get('a')" />
  <f-circle :r="get('b')" />
</f-scene>

Based on Vue 3.0
