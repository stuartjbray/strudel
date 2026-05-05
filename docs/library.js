var libraryLoaded = true;

const _Pattern = note("c").constructor;

_Pattern.prototype.mask2 = function() { return this.mask("<-@1 1>") }
_Pattern.prototype.mask4 = function() { return this.mask("<-@3 1>") }
_Pattern.prototype.mask8 = function() { return this.mask("<-@7 1>") }


var chordsPass = (x) => n(x).scale("c3:major").sound("piano").color("red")
var bassPass = (x)   => n(x).scale("c3:major").sound("gm_slap_bass_2:4").color("orange").gain(1.5).release(.3)
var leadPass = (x)   => n(x).scale("c3:major").sound("gm_electric_bass_pick").color("yellow").release(1)
var tunePass = (x)   => n(x).scale("c4:major").sound("gm_soprano_sax").color("green").release(.7)
var tune2Pass = (x)  => n(x).scale("c4:major").sound("gm_flute").color("blue").release(.7).vib(8).gain(.5)
var dugPass = (x)    => n(x).scale("c3:major").sound("gm_electric_guitar_clean:3").color("purple").delay("0,.1").gain(.7).release(1.2).crush(5.6)

/* 
Save to 'prebake'.

 --------------------------- Ideas for things to put in library
[?] Bank of common instrument. But don't want ANYTHING specific which might change over time and change a trock.

[] mask patterns.
[] lpf fade in/out

*/


window.registerFunc = (name, func) => {
    strudelScope[name] = func;
    window[name] = func;  
  }
  registerFunc('muffleIn', (pat,n) => pat.lpf(cosine.range(0,4000).slow(n*2)))
  registerFunc('muffleOut', (pat,n) => pat.lpf(cosine.range(4000,0).slow(n*2)))
  
