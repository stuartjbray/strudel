var bassPass = (x)   => stack(
  n(x).scale("c4:major").sound("supersaw").color("orange").attack(1),
  n(x).scale("c2:major").sound("supersaw").color("orange").attack(0).decay(1).sustain(0),
  ).lpf(1000).lpq(20)
