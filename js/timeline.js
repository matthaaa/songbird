function timeline(keysByNoteName, selectedKeys) {
  var timelineCanvas = document.getElementById("timelineCanvas");
  var ctx = timelineCanvas.getContext("2d")

  function drawCircle(key, note) {
    console.log(key);
    console.log(note);
    console.log(selectedKeys.lastIndexOf(key));
    ctx.beginPath();
    ctx.arc((selectedKeys.lastIndexOf(key) * 30 + 20), (16 * key + 20), 5, 0, Math.PI*10);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
  }

  selectedKeys.map((key) => {
    const note = keysByNoteName[key]
    drawCircle(key, note);
  })
}
