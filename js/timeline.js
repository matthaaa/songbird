function timeline(keysByNoteName, selectedKeys) {
  var enablePlayButton = true;

  document.getElementById("playButton").onclick = function() {
    enablePlayButton ? playback() : null;
  };

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
