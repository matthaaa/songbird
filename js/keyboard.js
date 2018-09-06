// **************************************************
// TODO: Separate and categorize variables and methods
//       to follow best practices and clean up code.
// **************************************************

function keyboard(
  keysByNoteName,
  selectedKeys,
  nextKeys,
) {
  // ==================================================
  // Initialize function
  // ==================================================
  let allKeys, timelineNotes;

  // ==================================================
  // Initialize function
  // ==================================================
  const init = (keysByNoteName) => {
    document.getElementById("clear").onclick = function() {clearKeys()};
    document.getElementById("undo").onclick = function() {removeLastKey()};
    buildKeyboard(keysByNoteName);

    // Define allKeys and timelineNotes variables AFTER html keyboard is
    // built.
    defineAllKeys();
    defineTimelineNotes();
  }

  const buildKeyboard = (keysByNoteName) => {
    for (let i = 0; i < Object.keys(keysByNoteName).length; i++) {

      let keyObject = keysByNoteName[i];

      // Render the main keyboard.
      let div = document.createElement("div");
      div.setAttribute("id", keyObject.name);
      div.setAttribute("data-index", String(i));
      div.setAttribute("class", "white-key initial-valid-key");

      keyName = document.createTextNode(keysByNoteName[i].name[0].toUpperCase());
      document.getElementById("playable-keyboard").appendChild(div).appendChild(keyName);

      document.getElementById(keyObject.name).onclick = function() {
        nextKeys.includes(i) ? playKey(i) : null;
      }
    }
  }

  const defineAllKeys = () => {
    allKeys = document.querySelectorAll(".white-key");
  }

  const defineTimelineNotes = () => {
    timelineNotes = document.getElementById("main-timeline");
  }

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

  const highlightNextKeys = (nextKeys) => {
    console.log(nextKeys);
    console.log(allKeys);
    allKeys.forEach((key) => {
      if (nextKeys.includes(Number(key.dataset.index))) {
        key.classList = "white-key valid-key";
      } else {
        key.classList = "white-key invalid-key";
      }
    });
  }

  const addKeysToNextKeys = (keys) => {
    keys.forEach(key => {
      if (key >= 0) {
        nextKeys.push(key);
      }
    });
  }

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

  // TODO: This should be in a separate file.
  const updateNextKeys = (keyId=7) => {
    nextKeys = [];
    lastKey = selectedKeys[selectedKeys.length - 1];
    secondLastKey = selectedKeys[selectedKeys.length - 2];

    addKeysToNextKeys([(keyId)]);

    if (secondLastKey === keyId && lastKey === keyId + 1) {
      addKeysToNextKeys([(keyId + 2)])
    }

    if (secondLastKey === keyId && lastKey === keyId - 1) {
      addKeysToNextKeys([(keyId - 2)])
    }

    if (lastKey === keyId - 2) {
      addKeysToNextKeys([
        (keyId - 1),
        (keyId - 3),
      ])
    }

    if (lastKey === keyId - 3) {
      addKeysToNextKeys([
        (keyId),
        (keyId + 1),
        (keyId - 7),
      ])
    }

    if (lastKey === keyId) {
      addKeysToNextKeys([
        (keyId),
        (keyId + 1),
        (keyId - 1),
        (keyId + 2),
        (keyId - 2),
        (keyId + 4),
        (keyId - 4),
        (keyId + 5),
        (keyId - 5),
      ]);
    }

    if (lastKey === keyId + 2) {
      addKeysToNextKeys([
        (keyId),
        (keyId + 1),
        (keyId - 1),
      ]);
    }

    if (lastKey === keyId - 1) {
      addKeysToNextKeys([
        (keyId + 2),
        (keyId - 2),
      ]);
    }

    if (lastKey === keyId + 1) {
      addKeysToNextKeys([
        (keyId + 3),
        (keyId - 2),
      ]);
    }

    if (lastKey === keyId + 4) {
      addKeysToNextKeys([
        (keyId - 1),
        (keyId - 2),
      ]);
    }

    if (lastKey === keyId + 3) {
      addKeysToNextKeys([
        (keyId - 2),
        (keyId + 5),
      ]);
    }

    if (lastKey === keyId + 5) {
      if (secondLastKey === keyId + 3) {
        addKeysToNextKeys([
          (keyId + 4),
        ]);
      } else {
        addKeysToNextKeys([
          (keyId + 3),
          (keyId + 4),
        ]);
      }
    }

    if (lastKey === keyId + 4) {
      addKeysToNextKeys([
        (keyId + 5),
        (keyId + 2),
      ]);
    }

    if (lastKey === keyId - 3) {
      addKeysToNextKeys([
        (keyId),
      ]);
    }

    if (
      lastKey === keyId - 1 && secondLastKey === keyId + 1 ||
      lastKey === keyId + 1 && secondLastKey === keyId - 1
    ) {
      addKeysToNextKeys([
        (keyId),
      ]);
    }

    highlightNextKeys(nextKeys);
  }

  // allKeys.forEach((key) => (
  //   key.addEventListener("mouseup", handleKeyPress)
  // ));

  // const timelineCanvas = document.getElementById("timelineCanvas");
  // const context = timelineCanvas.getContext("2d")

  // ==================================================
  // Play function
  // ==================================================
  const playKey = (key) => {
    if (selectedKeys.length === 13) {
      return null;
    }

    let audio = new Audio(keysByNoteName[key].soundSrc);
    selectedKeys.push(key);
    audio.play();

    // Add note to the Timeline
    let p = document.createElement("p");
    p.id = `timeline-key ${selectedKeys.lastIndexOf(key)}`;
    note = document.createTextNode(keysByNoteName[key].name.toUpperCase());

    document.getElementById("main-timeline").appendChild(p).appendChild(note);

    updateNextKeys();
    renderIntroMessage();
    updateActionButtons(selectedKeys);
  }

  // ==================================================
  // Clear function
  // ==================================================
  const clearKeys = () => {
    for (let i = 0; i < selectedKeys.length; i++) {
      timelineNotes.removeChild(timelineNotes.lastChild);
    }

    selectedKeys = [];
    nextKeys = Object.keys(keysByNoteName).map(key => Number(key));
    allKeys.forEach((key) => {
      key.classList = "white-key initial-valid-key";
    });
    new timeline(keysByNoteName, selectedKeys)
    renderIntroMessage();
    updateActionButtons(selectedKeys);
  }

  // ==================================================
  // Undo function
  // ==================================================
  const removeLastKey = () => {
    if (selectedKeys.length === 0) {
      return null;
    }

    if (selectedKeys.length === 1) {
      return clearKeys();
    }

    removedKey = selectedKeys.pop()
    timelineNotes.removeChild(timelineNotes.lastChild);

    updateNextKeys();
    renderIntroMessage();
    updateActionButtons(selectedKeys);
  }

  // ==================================================
  // Initialization
  // ==================================================
  init(keysByNoteName);
  renderIntroMessage();
  updateActionButtons(selectedKeys);
}
