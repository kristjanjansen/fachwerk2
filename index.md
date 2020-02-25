<f-math>c = \pm\sqrt{a^2 + b^2}</f-math>

<f-scene v-for="type in ['svg','canvas']" :type="type">
  <f-box r="100" :rotation="get('a')" :position="[get('a'),100]" />
  <f-circle r="100" :position="[get('a'),100]" />
</f-scene>

<f-slider set="a" />
