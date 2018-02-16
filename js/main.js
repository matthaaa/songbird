// Frequencies of two octaves in the key of C.
let keysByNoteName = {
  0: {name: 'c', soundSrc: '../assets/c_scale_audio/c1.wav'},
  1: {name: 'd', soundSrc: '../assets/c_scale_audio/d1.wav'},
  2: {name: 'e', soundSrc: '../assets/c_scale_audio/e1.wav'},
  3: {name: 'f', soundSrc: '../assets/c_scale_audio/f1.wav'},
  4: {name: 'g', soundSrc: '../assets/c_scale_audio/g1.wav'},
  5: {name: 'a', soundSrc: '../assets/c_scale_audio/a1.wav'},
  6: {name: 'b', soundSrc: '../assets/c_scale_audio/b1.wav'},
  7: {name: 'c2', soundSrc: '../assets/c_scale_audio/c2.wav'},
  8: {name: 'd2', soundSrc: '../assets/c_scale_audio/d2.wav'},
  9: {name: 'e2', soundSrc: '../assets/c_scale_audio/e2.wav'},
  10: {name: 'f2', soundSrc: '../assets/c_scale_audio/f2.wav'},
  11: {name: 'g2', soundSrc: '../assets/c_scale_audio/g2.wav'},
  12: {name: 'a2', soundSrc: '../assets/c_scale_audio/a2.wav'},
  13: {name: 'b2', soundSrc: '../assets/c_scale_audio/b2.wav'},
  14: {name: 'c3', soundSrc: '../assets/c_scale_audio/c.wav'},
};

let selectedKeys = [];
let nextKeys = Object.keys(keysByNoteName);

new keyboard(keysByNoteName, selectedKeys, nextKeys)
new timeline(keysByNoteName, selectedKeys);
