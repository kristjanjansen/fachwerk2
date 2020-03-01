<f-slider set="a" />

<f-scene v-for="type in ['svg','canvas','three','webgl']" :type="type" :width="200" :height="200">
<f-square r="50" position="100 100" :rotation="get('a')" />
</f-scene>
