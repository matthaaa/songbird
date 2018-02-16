// Frequencies of two octaves in the key of C.
let keysByNoteName = {
  0: {name: 'c', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809534/c1.wav'},
  1: {name: 'd', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809535/d1.wav'},
  2: {name: 'e', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809535/e1.wav'},
  3: {name: 'f', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809535/f1.wav'},
  4: {name: 'g', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809536/g1.wav'},
  5: {name: 'a', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809534/a1.wav'},
  6: {name: 'b', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809534/b1.wav'},
  7: {name: 'c2', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809535/c2.wav'},
  8: {name: 'd2', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809535/d2.wav'},
  9: {name: 'e2', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809535/e2.wav'},
  10: {name: 'f2', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809535/f2.wav'},
  11: {name: 'g2', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809535/g2.wav'},
  12: {name: 'a2', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809534/a2.wav'},
  13: {name: 'b2', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809534/b2.wav'},
  14: {name: 'c3', soundSrc: 'http://res.cloudinary.com/instagraph/video/upload/v1518809534/c.wav'},
};

let selectedKeys = [];
let nextKeys = Object.keys(keysByNoteName);

new keyboard(keysByNoteName, selectedKeys, nextKeys)
new timeline(keysByNoteName, selectedKeys);
