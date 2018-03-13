// Frequencies of two octaves in the key of C.
let keysByNoteName = {
  0: {name: 'c3', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809534/c1.wav'},
  1: {name: 'd3', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809535/d1.wav'},
  2: {name: 'e3', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809535/e1.wav'},
  3: {name: 'f3', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809535/f1.wav'},
  4: {name: 'g3', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809536/g1.wav'},
  5: {name: 'a4', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809534/a1.wav'},
  6: {name: 'b4', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809534/b1.wav'},
  7: {name: 'c4', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809535/c2.wav'},
  8: {name: 'd4', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809535/d2.wav'},
  9: {name: 'e4', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809535/e2.wav'},
  10: {name: 'f4', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809535/f2.wav'},
  11: {name: 'g4', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809535/g2.wav'},
  12: {name: 'a5', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809534/a2.wav'},
  13: {name: 'b5', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809534/b2.wav'},
  14: {name: 'c5', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809534/c.wav'},
};

let selectedKeys = [];
let nextKeys = Object.keys(keysByNoteName);

new keyboard(keysByNoteName, selectedKeys, nextKeys)
new timeline(keysByNoteName, selectedKeys);
