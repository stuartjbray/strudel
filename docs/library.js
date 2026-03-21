

Pattern.prototype.mask_ = function(n) {
  return this.mask("<-@" + n + " 1>")
}


// var mask2 = (x) => x.mask("<-@1 1>")
// var mask4 = (x) => x.mask("<-@3 1>")
// var mask8 = (x) => x.mask("<-@7 1>")