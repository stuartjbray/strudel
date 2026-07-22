window.registerFunc = (name, func) => {
    strudelScope[name] = func;
    window[name] = func;  
}

registerFunc('muffleIn', (pat,n) => pat.lpf(cosine.range(0,1500).slow(n*2)))
registerFunc('muffleOut', (pat,n) => pat.lpf(cosine.range(1500,0).slow(n*2)))
registerFunc('tinnyIn', (pat,n) => pat.hpf(cosine.range(0,1500).slow(n*2)))
registerFunc('tinnyOut', (pat,n) => pat.hpf(cosine.range(1500,0).slow(n*2)))

// commonly used mask patterns.
window.m2 = "<- 1>"; 
window.m_2 = "<1 ->"; 
window.m4 = "<-@3 1>"; 
window.m_4 = "<1@3 ->"  
window.m8 = "<-@7 1>"; 
window.m_8 = "<1@7 ->"  

// colours
window.cols = ["#ff0000","#ff8700","#ffd300","#deff0a","#a1ff0a","#0aff99","#0aefff","#147df5","#580aff","#be0aff"]

var randCol = irand(16777216).segment(8).fmap(n => '#' + Math.floor(n).toString(16).padStart(6, '0'));
