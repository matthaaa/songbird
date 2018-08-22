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

  const renderIntroMessage = () => {
    intro = document.createElement("p");
    intro.setAttribute("id", "description");
    description = document.createTextNode(
      "Press any key on the keyboard below to get started!"
    );
    intro.appendChild(description);

    if (selectedKeys.length === 0) {
      document.getElementById("main-timeline").appendChild(intro);
    } else if (document.getElementById("description")) {
      document.getElementById("main-timeline").removeChild(
        document.getElementById("description")
      );
    }
  }

  renderIntroMessage();

  const updateActionButtons = (keys) => {
    if (keys.length === 0) {
      document.getElementById("undo").style.backgroundColor = "rgba(0,0,0,.0975)";
      document.getElementById("playButton").style.backgroundColor = "rgba(0,0,0,.0975)";
      document.getElementById("clear").style.backgroundColor = "rgba(0,0,0,.0975)";
      document.getElementById("undo").style.cursor = "not-allowed";
      document.getElementById("playButton").style.cursor = "not-allowed";
      document.getElementById("clear").style.cursor = "not-allowed";
    } else {
      document.getElementById("undo").style.backgroundColor = null;
      document.getElementById("playButton").style.backgroundColor = null;
      document.getElementById("clear").style.backgroundColor = null;
      document.getElementById("undo").style.cursor = "pointer";
      document.getElementById("playButton").style.cursor = "pointer";
      document.getElementById("clear").style.cursor = "pointer";
    }
  }

  updateActionButtons(selectedKeys);

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
    console.log("stop");
  }

}
