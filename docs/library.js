var libraryLoaded = true;

const _Pattern = note("c").constructor;

_Pattern.prototype.mask2 = function() { return this.mask("<-@1 1>") }
_Pattern.prototype.mask4 = function() { return this.mask("<-@3 1>") }
_Pattern.prototype.mask8 = function() { return this.mask("<-@7 1>") }