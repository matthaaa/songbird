function keyboard(keysByNoteName, selectedKeys, nextKeys) {
  for (let i = 0; i < Object.keys(keysByNoteName).length; i++) {

    let keyObject = keysByNoteName[i];

    // Render the main keyboard.
    var div = document.createElement("div");
    div.setAttribute("id", keyObject.name);
    div.setAttribute("data-index", String(i));
    div.setAttribute("class", "white-key");

    keyName = document.createTextNode(keysByNoteName[i].name[0].toUpperCase());
    document.getElementById("playable-keyboard").appendChild(div).appendChild(keyName);

    document.getElementById(keyObject.name).onclick = function() {
      nextKeys.includes(i) ? playKey(i) : null;
    }
  }

  document.getElementById("clear").onclick = function() {clearKeys()};
  document.getElementById("undo").onclick = function() {removeLastKey()};

  timelineNotes = document.getElementById("main-timeline");

  const allKeys = document.querySelectorAll(".white-key");

  function highlightNextKeys(nextKeys) {
    allKeys.forEach((key) => {
      console.log(Number(key.dataset.index));
      if (nextKeys.includes(Number(key.dataset.index))) {
        key.classList = "white-key valid-key";
      } else {
        key.classList = "white-key invalid-key";
      }
    });
  }

  function addKeysToNextKeys(keys) {
    keys.forEach(key => {
      if (key >= 0) {
        nextKeys.push(key);
      }
    });

    highlightNextKeys(nextKeys);
  }

  function updateNextKeys(keyId=7) {
    nextKeys = [];
    lastKey = selectedKeys[selectedKeys.length - 1];
    secondLastKey = selectedKeys[selectedKeys.length - 2];

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
        (lastKey + 1),
        (lastKey - 1),
      ]);
    }

    if (lastKey === keyId - 1) {
      addKeysToNextKeys([
        (lastKey + 2),
        (lastKey - 2),
      ]);
    }

    if (lastKey === keyId + 1) {
      addKeysToNextKeys([
        (lastKey + 3),
        (lastKey - 2),
      ]);
    }

    if (lastKey === keyId + 4) {
      addKeysToNextKeys([
        (lastKey - 1),
        (lastKey - 2),
      ]);
    }

    if (lastKey === keyId + 3) {
      addKeysToNextKeys([
        (lastKey - 2),
        // (lastKey - 2),
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
  }

  // allKeys.forEach((key) => (
  //   key.addEventListener("mouseup", handleKeyPress)
  // ));

  // const timelineCanvas = document.getElementById("timelineCanvas");
  // const context = timelineCanvas.getContext("2d")

  function playKey(key) {
    if (selectedKeys.length === 13) {
      return null;
    }

    var audio = new Audio(keysByNoteName[key].soundSrc);
    selectedKeys.push(key);
    audio.play();

    // Add note to the DOM
    var p = document.createElement("p");
    note = document.createTextNode(keysByNoteName[key].name.toUpperCase());
    // note.setAttribute("id", "timeline-key");

    document.getElementById("main-timeline").appendChild(p).appendChild(note);

    updateNextKeys();
  }

  function clearKeys() {
    for (let i = 0; i < selectedKeys.length; i++) {
      timelineNotes.removeChild(timelineNotes.lastChild);
    }

    selectedKeys = [];
    allKeys.forEach((key) => {
      key.classList = "white-key";
    });
    new timeline(keysByNoteName, selectedKeys)
  }

  function removeLastKey() {
    if (selectedKeys.length === 0) {
      return null;
    }

    if (selectedKeys.length === 1) {
      return clearKeys();
    }

    removedKey = selectedKeys.pop()
    timelineNotes.removeChild(timelineNotes.lastChild);

    updateNextKeys();
  }
}
