function timeline(keysByNoteName, selectedKeys) {
  var enablePlayBack = true;

  document.getElementById("loop").onclick = function() {
    enablePlayBack ? playLoop() : null;
  };

  document.getElementById("playButton").onclick = function() {
    enablePlayBack ? playback() : null;
  };

  selectedKeys.map((key) => {
    const note = keysByNoteName[key];
  })

  function removeHighlightColor(keys) {
    keys.map((key) => {
      document.getElementById(keysByNoteName[key].name).style.backgroundColor = null;
    });

    for (let i = 0; i < selectedKeys.length; i++) {
      document.getElementById(`timeline-key ${i}`).style.backgroundColor = null;
    }
  }

  function playback() {
    keys = Array.from(selectedKeys);

    if (keys.length === 0) return null;
    enablePlayBack = false;
    let timelineKeyIndex = 0;

    const timer = setInterval(() => {

      currentKey = keys.shift();
      const note = keysByNoteName[currentKey];

      removeHighlightColor(selectedKeys);

      document.getElementById(note.name).style.backgroundColor = "#38EEFF";
      document.getElementById(`timeline-key ${timelineKeyIndex}`).style.backgroundColor = "#38EEFF";

      timelineKeyIndex++

      const audio = new Audio(note.soundSrc);
      audio.play();

      if (keys.length === 0) {
        enablePlayBack = true;
        setTimeout(() => {removeHighlightColor(selectedKeys)}, 300);
        clearInterval(timer, 0);
      }
    }, 300);

  }

  function playLoop() {

  }

}
