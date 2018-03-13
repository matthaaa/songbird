function keyboard(keysByNoteName, selectedKeys, nextKeys) {
  document.getElementById("c3").onclick = function() {playKey(0)};
  document.getElementById("d3").onclick = function() {playKey(1)};
  document.getElementById("e3").onclick = function() {playKey(2)};
  document.getElementById("f3").onclick = function() {playKey(3)};
  document.getElementById("g3").onclick = function() {playKey(4)};
  document.getElementById("a4").onclick = function() {playKey(5)};
  document.getElementById("b4").onclick = function() {playKey(6)};
  document.getElementById("c4").onclick = function() {playKey(7)};
  document.getElementById("d4").onclick = function() {playKey(8)};
  document.getElementById("e4").onclick = function() {playKey(9)};
  document.getElementById("f4").onclick = function() {playKey(10)};
  document.getElementById("g4").onclick = function() {playKey(11)};
  document.getElementById("a5").onclick = function() {playKey(12)};
  document.getElementById("b5").onclick = function() {playKey(13)};
  document.getElementById("c5").onclick = function() {playKey(14)};

  document.getElementById("clear").onclick = function() {clearKeys()};

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
    var audio = new Audio(keysByNoteName[key].soundSrc);
    selectedKeys.push(key);
    audio.play();

    // Add note to the DOM
    note = document.createTextNode(keysByNoteName[key].name);
    document.getElementById("main-timeline").appendChild(note);

    updateNextKeys();
  }

  function clearKeys() {
    selectedKeys = [];
    allKeys.forEach((key) => {
      key.classList = "white-key";
    });
    new timeline(keysByNoteName, selectedKeys)
    context.clearRect(0, 0, timelineCanvas.width, timelineCanvas.height);
  }

  function removeLastKey(keys) {
    // keys.pop
    // updateNextKeys();
  }
}
