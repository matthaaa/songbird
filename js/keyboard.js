let audioContext = new (window.AudioContext || window.webkitAudioContext)();

document.getElementById("c").onclick = function() {playKey(0)};
document.getElementById("d").onclick = function() {playKey(1)};
document.getElementById("e").onclick = function() {playKey(2)};
document.getElementById("f").onclick = function() {playKey(3)};
document.getElementById("g").onclick = function() {playKey(4)};
document.getElementById("a").onclick = function() {playKey(5)};
document.getElementById("b").onclick = function() {playKey(6)};
document.getElementById("c2").onclick = function() {playKey(7)};
document.getElementById("d2").onclick = function() {playKey(8)};
document.getElementById("e2").onclick = function() {playKey(9)};
document.getElementById("f2").onclick = function() {playKey(10)};
document.getElementById("g2").onclick = function() {playKey(11)};
document.getElementById("a2").onclick = function() {playKey(12)};
document.getElementById("b2").onclick = function() {playKey(13)};
document.getElementById("c3").onclick = function() {playKey(14)};

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

function playKey(key) {
  console.log(key);
  console.log(keysByNoteName[key].frequency);
  var audio = new Audio(keysByNoteName[key].soundSrc);
  audio.play();
}
