function startGame() {
  gameCanvas.init();
}

var gameCanvas = {
  canvas: document.getElementById("gamecanvas"),
  init: function () {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.context = this.canvas.getContext("2d");

    // Draw grid
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        gameCanvas.beginPath();
        gameCanvas.fillStyle = ["#eeeed2", "#630"][(i + j) % 2];
        gameCanvas.fillRect(j * 20, i * 20, 20, 20);
        gameCanvas.closePath();
      }
    }
  },
};
