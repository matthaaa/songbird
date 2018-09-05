// **************************************************
// TODO: Separate and categorize variables and methods
//       to follow best practices and clean up code.
// **************************************************

function timeline(keysByNoteName, selectedKeys) {
  let enablePlayBack = true;
  let currentlyPlaying = false;
  let playbackInterval = 300;
  //
  // document.getElementById("loop").onclick = function() {
  //   console.log("loop");
  //   if (currentlyPlaying) {
  //     stopPlayback();
  //   } else if (enablePlayBack) {
  //     playLoop();
  //   } else {
  //     return null;
  //   }
  // };

  document.getElementById("playButton").onclick = function() {
    enablePlayBack ? playback() : null;
  };

  selectedKeys.map((key) => {
    const note = keysByNoteName[key];
  })

  const removeHighlightColor = (keys) => {
    keys.map((key) => {
      let keyName = keysByNoteName[key].name;
      document.getElementById(keyName).style.backgroundColor = null;
    });

    for (let i = 0; i < selectedKeys.length; i++) {
      document.getElementById(`timeline-key ${i}`).style.backgroundColor = null;
    }
  }

  const playback = () => {
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
        setTimeout(() => {removeHighlightColor(selectedKeys)}, playbackInterval);
        clearInterval(timer, 0);
      }
    }, playbackInterval);

  }

  const playLoop = () => {
    // currentlyPlaying = true;
    // const loopInterval = playbackInterval * selectedKeys.length;
    // const timer = setInterval(() => {
    //   playback();
    // }, loopInterval);
  }

  const stopPlayback = () => {
  }

}
