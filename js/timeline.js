function timeline(keysByNoteName, selectedKeys) {
  document.getElementById("playButton").onclick = function() {playback()};
  var timelineCanvas = document.getElementById("timelineCanvas");
  var context = timelineCanvas.getContext("2d")

  function drawCircle(keysArray, key, note) {
    context.beginPath();
    context.arc((keysArray.lastIndexOf(key) * 40 + 20), (17 * key + 20), 5, 0, Math.PI*10);
    context.fillStyle = "#000000";
    context.fill();
    context.closePath();
  }

  function drawBlueCircle(keysArray, key, note) {
    context.beginPath();
    context.arc((keysArray.lastIndexOf(key) * 40 + 20), (17 * key + 20), 6, 0, Math.PI*10);
    context.fillStyle = "#38EEFF";
    context.fill();
    context.closePath();
  }

  // function drawNotes() {
    selectedKeys.map((key) => {
      const note = keysByNoteName[key]
      drawCircle(selectedKeys, key, note);
    })
  // }

  function playback() {
    keys = Array.from(selectedKeys);
    playedNotes = [];

    if (keys.length === 0) return null;

    const timer = setInterval(() => {

      playedNotes.push(keys.shift());
      noteIdx = playedNotes.length - 1;

      const key = playedNotes[noteIdx];
      const note = keysByNoteName[key];

      // drawCircle(playedNotes,key, note);

      const audio = new Audio(note.soundSrc);
      audio.play();

      drawBlueCircle(playedNotes, key, note);

      if (keys.length === 0) {
        clearInterval(timer, 0);
      }
    }, 300);
  }
}
