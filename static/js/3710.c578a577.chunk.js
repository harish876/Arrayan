"use strict";(self.webpackChunkarrayan=self.webpackChunkarrayan||[]).push([[3710],{3710:function(e,i,a){a.r(i),a.d(i,{updateLife:function(){return d}});var n=a(4709),t=0,u=-1,l=0,r=0;function d(e,i,a){if(e.life){var d=e.life,f=!1;if(e.spawning){if(d.delayTime+=i.value,!(d.delayTime>=e.life.delay))return;f=!0,e.spawning=!1,d.delayTime=t,d.time=t}if(d.duration!==u&&!e.spawning&&(f?d.time=t:d.time+=i.value,!(d.time<d.duration)))if(d.time=t,e.life.count>l&&e.life.count--,e.life.count!==l){var o=(0,n.Cs)(r,a.width),s=(0,n.Cs)(r,a.width);e.position.x=(0,n.vd)(o),e.position.y=(0,n.vd)(s),e.spawning=!0,d.delayTime=t,d.time=t,e.reset();var p=e.options.life;p&&(d.delay=(0,n.Gu)(p.delay.value)*n.X5,d.duration=(0,n.Gu)(p.duration.value)*n.X5)}else e.destroy()}}}}]);
//# sourceMappingURL=3710.c578a577.chunk.js.map