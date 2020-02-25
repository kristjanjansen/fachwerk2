<f-math>c = \pm\sqrt{a^2 + b^2}</f-math>

<f-scene type="canvas">
  <f-box r="100" :position="[get('a'),100]" />
  <f-circle r="100" :position="[get('a'),100]" />
</f-scene>

<f-scene>
  <f-box r="100" :position="get('a')" />
  <f-circle r="100" :position="get('a')" />
</f-scene>

<f-animate set="a" />
