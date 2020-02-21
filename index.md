bitmap:

<f-slider set="a" />

<f-slider set="b" />

<f-scene vector3>
  <f-box :r="50 / 15" :scale="[get('b',0) / 100,get('b',0) / 100,get('b',0) / 100]" :rotation="get('a')" />
  <!-- <f-circle :position="[get('a'),get('a')]" r="50" /> -->
</f-scene>

bitmap:

<f-scene bitmap>
  <f-box r="50" :scale="[get('b',0) / 100,get('b',0) / 100]" :rotation="get('a')" />
  <f-circle :position="[get('a'),get('a')]" r="50" />
</f-scene>

vector:

<f-scene vector>
  <f-box r="50" :scale="[get('b',0) / 100,get('b',0) / 100]" :rotation="get('a')" />
  <f-circle :position="[get('a'),get('a')]" r="50" />
</f-scene>
