function startGame() {
  gameCanvas.init;
}

var gameCanvas = {
  canvas: document.getElementById("maincanvas"),
  init: function () {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.context = this.canvas.getContext("2d");
  },
};

function component()