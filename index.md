<f-scene-canvas>
  <f-box-canvas :rotation="get('a')" r="100" :stroke-width="1" stroke="black" fill="red" x="0" y="0"  />
   <f-box-canvas :rotation="360 - get('a')" r="50" :stroke-width="1" stroke="black" fill="red" x="0" y="0"  />
</f-scene-canvas>

{{ get('a') }}

<f-animate set="a">
