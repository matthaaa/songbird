function keyboard(keysByNoteName, selectedKeys) {
  document.getElementById("c").onclick = function() {playKey(0)};
  document.getElementById("d").onclick = function() {playKey(1)};
  document.getElementById("e").onclick = function() {playKey(2)};
  document.getElementById("f").onclick = function() {playKey(3)};
  document.getElementById("g").onclick = function() {playKey(4)};
  document.getElementById("a").onclick = function() {playKey(5)};
  document.getElementById("b").onclick = function() {playKey(6)};
  document.getElementById("c2").onclick = function() {playKey(7)};
  document.getElementById("d2").onclick = function() {playKey(8)};
  document.getElementById("e2").onclick = function() {playKey(9)};
  document.getElementById("f2").onclick = function() {playKey(10)};
  document.getElementById("g2").onclick = function() {playKey(11)};
  document.getElementById("a2").onclick = function() {playKey(12)};
  document.getElementById("b2").onclick = function() {playKey(13)};
  document.getElementById("c3").onclick = function() {playKey(14)};

  document.getElementById("clear").onclick = function() {clearKeys()};

  var timelineCanvas = document.getElementById("timelineCanvas");
  var context = timelineCanvas.getContext("2d")

  function playKey(key) {
    console.log(key);
    var audio = new Audio(keysByNoteName[key].soundSrc);
    selectedKeys.push(key);
    console.log(selectedKeys)
    audio.play();
    new timeline(keysByNoteName, selectedKeys)
  }

  function clearKeys() {
    selectedKeys = [];
    new timeline(keysByNoteName, selectedKeys)
    console.log(selectedKeys)
    context.clearRect(0, 0, timelineCanvas.width, timelineCanvas.height);
  }
}
