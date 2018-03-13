function timeline(keysByNoteName, selectedKeys) {
  var enablePlayButton = true;

  document.getElementById("playButton").onclick = function() {
    enablePlayButton ? playback() : null;
  };

  // function drawCircle(keysArray, key, note) {
  //   context.beginPath();
  //   context.arc((keysArray.lastIndexOf(key) * 53 + 20), timelineCanvas.height - (17 * key + 20), 5, 0, Math.PI*10);
  //   context.fillStyle = "#000000";
  //   context.fill();
  //   context.closePath();
  // }
  //
  // function drawBlueCircle(keysArray, key, note) {
  //   context.beginPath();
  //   context.arc((keysArray.lastIndexOf(key) * 53 + 20), timelineCanvas.height - (17 * key + 20), 6, 0, Math.PI*10);
  //   context.fillStyle = "#38EEFF";
  //   context.fill();
  //   context.closePath();
  // }

  selectedKeys.map((key) => {
    const note = keysByNoteName[key]

    // Add note to the DOM
    // note = document.createTextNode(selectedKeys[key]);
    // document.getElementById("main-timeline").appendChild(note);
  })

  function playback() {
    keys = Array.from(selectedKeys);
    playedNotes = [];

    if (keys.length === 0) return null;
    enablePlayButton = false;

    const timer = setInterval(() => {

      playedNotes.push(keys.shift());
      noteIdx = playedNotes.length - 1;

      const key = playedNotes[noteIdx];
      const note = keysByNoteName[key];

      // drawCircle(playedNotes,key, note);

      const audio = new Audio(note.soundSrc);
      audio.play();

      // drawBlueCircle(playedNotes, key, note);

      if (keys.length === 0) {
        enablePlayButton = true;
        clearInterval(timer, 0);
      }
    }, 300);
  }
}
