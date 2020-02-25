<f-scene>
  <f-box r="100" :position="[get('a'),100]" />
</f-scene>

<f-scene>
  <f-box r="100" :rotation="get('a')" />
</f-scene>

<f-animate set="a" />
