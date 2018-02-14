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
  // new Sound(keysByNoteName[key].frequency, 'triangle')
}

function Sound(frequency, type) {
    this.osc = audioContext.createOscillator(); // Create oscillator node
    this.pressed = false; // flag to indicate if sound is playing

    /* Set default configuration for sound */
    if (typeof frequency !== 'undefined') {
        /* Set frequency. If it's not set, the default is used (440Hz) */
        this.osc.frequency.value = frequency;
    }

    /* Set waveform type. Default is actually 'sine' but triangle sounds better :) */
    this.osc.type = type || 'triangle';

    /* Start playing the sound. You won't hear it yet as the oscillator node needs to be
    piped to output (AKA your speakers). */
    this.osc.start(0);
};

Sound.prototype.play = function() {
  if (!this.pressed) {
    this.pressed = true;
    this.osc.connect(audioContext.destination);
  }
};

Sound.prototype.stop = function() {
  this.pressed = false;
  this.osc.disconnect();
};

// let canvas = document.getElementById("keyboardCanvas");
// let context = canvas.getContext("2d");
//
// let canvasPos = {
//   x: canvas.offsetLeft,
//   y: canvas.offsetTop,
// };
//
//
// let keysArray = [
//   new whiteKey(0, 0, 50, 150),
//   new whiteKey(50, 0, 50, 150),
//   new whiteKey(100, 0, 50, 150),
//   new whiteKey(150, 0, 50, 150),
//   new whiteKey(200, 0, 50, 150),
//   new whiteKey(250, 0, 50, 150),
//   new whiteKey(300, 0, 50, 150),
//   new whiteKey(350, 0, 50, 150),
//   new whiteKey(400, 0, 50, 150),
//   new whiteKey(450, 0, 50, 150),
//   new whiteKey(500, 0, 50, 150),
//   new whiteKey(550, 0, 50, 150),
//   new whiteKey(600, 0, 50, 150),
//   new whiteKey(650, 0, 50, 150),
//   new blackKey(35, 0, 30, 80),
// ];
//
// function drawKey(startX, startY, endX, endY) {
//   // context.fillRect(0,0,150,75);
//   context.beginPath();
//   context.rect(startX, startY, endX, endY);
//   context.fillStyle = "#EFEFEF";
//   context.fill();
//   context.stroke()
//   context.closePath();
// }
//
// function handleClick(cursor) {
//   if (x < cursor.x && x + width > cursor.x && y < cursor.y && y + height > cursor.y) {
//     return true;
//   }
//
//   return false;
// }
//
//
// canvas.addEventListener('click', function(e) {
//   e.preventDefault();
//   var cursor = {
//     x: e.pageX - canvasPos.x,
//     y: e.pageY - canvasPos.y,
//   }
//
//   for (var i=0; i < keysArray.length; i++) {
//     handleClick(cursor)
//   }
//
//   return false;
// });
//
//
// function blackKey(x, y, width, height) {
//   drawKey(x, y, width, height)
// }
//
// function whiteKey(x, y, width, height) {
//   drawKey(x, y, width, height)
// }
//
// keysArray.map((key) => {
//   this.whiteKey(key.startX, key.startY, key.endX, key.endY);
// });
