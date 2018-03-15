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
  }

  function updateNextKeys(keyId=7) {
    nextKeys = [];
    lastKey = selectedKeys[selectedKeys.length - 1];
    secondLastKey = selectedKeys[selectedKeys.length - 2];

    // TODO: Change logic to remove from ALL keys instead of adding
    // individual keys, since there are more keys to add than to remove
    // in each case.

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

  function playKey(key) {
    if (selectedKeys.length === 13) {
      return null;
    }

    var audio = new Audio(keysByNoteName[key].soundSrc);
    selectedKeys.push(key);
    audio.play();

    // Add note to the Timeline
    var p = document.createElement("p");
    p.id = `timeline-key ${keysByNoteName[key].name}`;
    note = document.createTextNode(keysByNoteName[key].name.toUpperCase());

    document.getElementById("main-timeline").appendChild(p).appendChild(note);

    updateNextKeys();
  }

  function clearKeys() {
    for (let i = 0; i < selectedKeys.length; i++) {
      timelineNotes.removeChild(timelineNotes.lastChild);
    }

    selectedKeys = [];
    nextKeys = Object.keys(keysByNoteName).map(key => Number(key));
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
