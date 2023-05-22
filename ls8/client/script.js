var socket = io();
socket.on("my_matrix", my_draw)

function setup() {
  frameRate(10)
  createCanvas(600, 600)
  background("#acacac");
}

function my_draw(matrix) {

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

      if (matrix[y][x] == 1) {
        fill("green");
      }
      else if (matrix[y][x] == 0) {
        fill("#acacac");
      }
      else if (matrix[y][x] == 2) {
        fill("yellow");
      }
      else if (matrix[y][x] == 3) {
        fill("red");
      }
      else if (matrix[y][x] == 4) {
        fill(0, 0, 0);
      }
      else if (matrix[y][x] == 5) {
        fill(30, 66, 92);
      }
      rect(x * 20, y * 20, 20, 20);
    }
  }
}