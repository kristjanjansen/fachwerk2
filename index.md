<f-math>c = \pm\sqrt{a^2 + b^2}</f-math>

<div style="display: grid; grid-template-columns: 1fr 1fr;">
<f-scene v-for="type in ['svg','canvas','three','webgl']" :type="type">
  <f-box r="100" :rotation="get('a')" :position="[get('a'),100]" />
  <f-circle r="100" :position="[get('a'),100]" />
</f-scene>
</div>

<f-slider set="a" />
