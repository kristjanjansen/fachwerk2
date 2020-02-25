<f-slider set="a" />

<f-slider set="b" />

<div style="display: flex">
<f-scene v-for="type in ['svg','canvas','svg3','webgl']" :type="type">
  <f-box
    fill="red"
    stroke="none"
    r="100"
    :scale="[get('b',0) / 100,get('b',0) / 100]"
    :rotation="get('a')"
  />
   <f-circle
    x="100"
    y="100"
    :position="[get('a'),get('a')]"
    :rotation="get('a')"
    fill="yellow"
    r="50"
  />
</f-scene>
</div>

<f-scene>
  <f-box r=>
</f-scene>

Hello
booo

---

Haaa

-

Bamm
!

<f-scene>
<f-box :position="[get('a',100]" r="100" />
</f-scene>

<f-slider set="a" />
