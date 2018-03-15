function timeline(keysByNoteName, selectedKeys) {
  var enablePlayButton = true;

  document.getElementById("playButton").onclick = function() {
    enablePlayButton ? playback() : null;
  };

  selectedKeys.map((key) => {
    const note = keysByNoteName[key];
  })

  function removeHighlightColor(keys) {
    keys.map((key) => {
      document.getElementById(keysByNoteName[key].name).style.backgroundColor = null;
    });
  }

  function playback() {
    keys = Array.from(selectedKeys);

    if (keys.length === 0) return null;
    enablePlayButton = false;

    const timer = setInterval(() => {

      currentKey = keys.shift();
      const note = keysByNoteName[currentKey];

      removeHighlightColor(selectedKeys);

      document.getElementById(note.name).style.backgroundColor = "#38EEFF";

      const audio = new Audio(note.soundSrc);
      audio.play();

      if (keys.length === 0) {
        enablePlayButton = true;
        setTimeout(() => {removeHighlightColor(selectedKeys)}, 300);
        clearInterval(timer, 0);
      }
    }, 300);

  }

}
