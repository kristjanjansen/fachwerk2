Creating a tween
This simplest way create a tween is to use shifty.tween:

import { tween } from 'shifty';

tween({
from: { x: 0, y: 50 },
to: { x: 10, y: -30 },
duration: 1500,
easing: 'easeOutQuad',
step: state => console.log(state)
}).then(
() => console.log('All done!')
);
You can also instantiate a shifty.Tweenable to reuse tweens and have more control over the animation:

import { Tweenable } from 'shifty';

const tweenable = new Tweenable();

tweenable.setConfig({
from: { x: 0, y: 50 },
to: { x: 10, y: -30 },
duration: 1500,
easing: 'easeOutQuad',
step: state => console.log(state)
});

// tweenable.tween() could be called again later
tweenable.tween().then(() => console.log('All done!'));

HTML BabelResult
EDIT ON
const tweenable = new shifty.Tweenable();
const pre = document.querySelector('pre');

tweenable.setConfig({
from: { x: 0, y: 50 },
to: { x: 10, y: -30 },
duration: 1500,
easing: 'easeOutQuad',
step: state =>
pre.innerHTML += `${JSON.stringify(state)}\n`
});

// tweenable.tween() could be called again later
tweenable.tween().then(
() => pre.innerHTML += 'All done!'
);
View Compiled
Resources1×0.5×0.25×Rerun
