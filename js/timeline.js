function timeline(keysByNoteName, selectedKeys) {
  var enablePlayButton = true;

  document.getElementById("playButton").onclick = function() {
    enablePlayButton ? playback() : null;
  };

  selectedKeys.map((key) => {
    const note = keysByNoteName[key];
  })

  if (selectedKeys.length === 0) {
    intro = document.createElement("p");
    intro.setAttribute("class", "description");
    description = document.createTextNode(
      "Press any key on the keyboard below to get started!"
    );
    document.getElementById("main-timeline").appendChild(intro).appendChild(description);
  }

  function removeHighlightColor(keys) {
    keys.map((key) => {
      document.getElementById(keysByNoteName[key].name).style.backgroundColor = null;
    });

    for (let i = 0; i < selectedKeys.length; i++) {
      console.log(i);
      console.log(`timeline-key ${i}`);
      document.getElementById(`timeline-key ${i}`).style.backgroundColor = null;
    }
  }

  function playback() {
    keys = Array.from(selectedKeys);

    if (keys.length === 0) return null;
    enablePlayButton = false;
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
        enablePlayButton = true;
        setTimeout(() => {removeHighlightColor(selectedKeys)}, 300);
        clearInterval(timer, 0);
      }
    }, 300);

  }

}
