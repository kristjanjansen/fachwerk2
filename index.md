<f-scene3>
   <f-box3
    :stroke-width="3"
    stroke="black"
    fill="red"
    x="0"
    y="0" 
    r="2"
    :rotation="get('a')"
  />
</f-scene3>

<f-slider set="a" />

<f-scene3>
   <f-box3
    :stroke-width="3"
    stroke="black"
    fill="blue"
    x="0"
    y="0" 
    r="2"
    :rotation="get('d')"
  />
</f-scene3>

<f-slider set="d" />

<f-scene-canvas>
   <f-box-canvas
    :stroke-width="3"
    stroke="black"
    fill="blue"
    x="0"
    y="0" 
    r="2"
    :rotation="get('b')"
  />
</f-scene-canvas>

<f-slider set="b" />

<f-scene-canvas>
   <f-box-canvas
    :stroke-width="3"
    stroke="black"
    fill="blue"
    x="0"
    y="0" 
    r="2"
    :rotation="get('c')"
  />
</f-scene-canvas>

<f-slider set="c" />
