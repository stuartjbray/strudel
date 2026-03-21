// Jungle/DnB - busy, syncopated, amen-style
var jungle = stack(
  sound("bd").struct("1 0 0 1 0 0 1 0 0 1 0 0 1 0 0 0"),
  sound("sd").struct("0 0 0 0 1 0 0 0 0 0 0 0 1 0 1 0").room(".3"),
  sound("hh").struct("1 0 1 1 0 1 1 0 1 0 1 1 0 1 0 1").gain(".6 1 .7 .8"),
  sound("oh").struct("0 0 0 1 0 0 0 1 0 0 0 1 0 0 1 0").gain(".5"),
)
// Afrobeats - heavy on the offbeats, percussion-led
var afrobeats = stack(
  sound("bd").struct("1 0 0 1 0 1 0 0 1 0 0 1 0 0 1 0"),
  sound("sd").struct("0 0 1 0 0 0 0 1 0 0 1 0 0 0 0 1").room(".2"),
  sound("hh").struct("1 1 0 1 1 0 1 0 1 1 0 1 1 0 1 0").gain(".7 .5 1 .6"),
  sound("rim").struct("0 1 0 0 1 0 1 0 0 1 0 0 1 0 0 1").gain(".6"),
)
$:afrobeats

// UK Garage - skippy bd, stuttered hh
var ukg = stack(
  sound("bd").struct("1 0 0 1 0 0 0 0 <1 0> 0 0 1 0 0 0 0"),
  sound("sd").struct("0 0 0 0 1 0 0 0 0 0 0 0 1 0 0 0"),
  sound("hh").struct("1 0 1 1 0 1 0 1 1 0 1 1 0 1 0 1").gain("1 .4 .7 .5"),
  sound("oh").struct("0 0 0 0 0 0 1 0 0 0 0 0 0 0 1 0").gain(".8"),
)

// Reggaeton - dembow pattern
var reggaeton = stack(
  sound("bd").struct("1 0 0 0 0 0 1 0 1 0 0 0 0 0 1 0"),
  sound("sd").struct("0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 1").room(".1"),
  sound("hh").struct("1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0").gain(".5 1 .5 .8"),
  sound("rim").struct("0 0 1 0 0 0 1 0 0 0 1 0 0 0 1 0").gain(".7"),
)

// Samba - triplet feel squeezed into 16 steps
var samba = stack(
  sound("bd").struct("1 0 0 1 0 0 1 0 0 0 1 0 1 0 0 0"),
  sound("rim").struct("0 1 0 0 1 0 0 1 0 1 0 0 0 1 0 1").gain(".8"),
  sound("hh").struct("1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0").gain(".4 .8"),
  sound("sd").struct("0 0 0 0 0 0 1 0 0 0 0 0 0 0 1 0").room(".4"),
)

// Techno - industrial, relentless, alternating OH
var techno = stack(
  sound("bd").struct("1 0 0 0 1 0 0 0 1 0 0 0 1 0 0 0"),
  sound("sd").struct("0 0 0 0 1 0 0 0 0 0 0 0 1 0 0 0").room(".5 .1"),
  sound("hh").struct("0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1").gain(".6 1 .6 .8"),
  sound("rim").struct("0 0 0 1 0 0 0 0 0 0 0 1 0 0 0 0").gain(".5").room(".8"),
)

// Bossa Nova - syncopated, light
var bossanova = stack(
  sound("bd").struct("1 0 0 1 0 0 1 0"),
  sound("rim").struct("0 1 0 0 1 1 0 1").gain(".5 .8 .5 .7").room(".3"),
  sound("hh").struct("1 0 1 0 1 0 1 0").gain(".4 .7"),
  sound("sd").struct("0 0 0 1 0 0 0 0").room(".4").gain(".6"),
)

// Grime - sparse, heavy bd, snappy snare
var grime = stack(
  sound("bd").struct("1 0 0 0 0 1 0 0 <1 0> 0 1 0 0 0 0 0"),
  sound("sd").struct("0 0 0 0 1 0 0 0 0 0 0 0 1 0 0 1").room(".15"),
  sound("hh").struct("1 1 0 1 0 1 1 0 1 1 0 1 0 1 1 0").gain(".5 1 .3 .7"),
  sound("rim").struct("0 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0").gain(".6"),
)

// New Orleans Second Line - swung, snare-heavy
var secondline = stack(
  sound("bd").struct("1 0 1 0 0 0 1 0 1 0 0 1 0 0 1 0"),
  sound("sd").struct("0 0 0 1 0 1 0 0 0 0 1 0 1 0 0 1").room(".2"),
  sound("rim").struct("0 1 0 0 1 0 0 1 0 1 0 0 0 1 0 0").gain(".7"),
  sound("hh").struct("1 0 0 1 0 0 1 0 1 0 0 1 0 0 1 0").gain(".5 .9"),
)

// Footwork - chaotic bd, Chicago style
var footwork = stack(
  sound("bd").struct("1 1 0 0 1 0 1 0 0 1 0 1 1 0 0 1"),
  sound("sd").struct("0 0 0 0 1 0 0 0 0 0 0 0 1 0 1 0"),
  sound("hh").struct("1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0").gain(".4 .9 .4 .7"),
  sound("rim").struct("0 0 1 1 0 0 0 1 0 0 1 0 0 1 0 0").gain(".6"),
)