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