var express = require("express");
var app = express();
app.use(express.static("../client"));
app.get("/", function (req, res) {
    res.redirect("index.html");
});
var server = require('http').createServer(app);

var io = require('socket.io')(server);
server.listen(3000, function () {
    console.log("Game is running on port 3000");
});


var Gishatich = require("./my_modules/gishatich")
var Grass = require("./my_modules/grass")
var GrassEater = require("./my_modules/grassEaterArr")
var Men = require("./my_modules/men")
var Gyuxaci = require("./my_modules/gyuxaci")

matrix = []
n = 30
m = 30

grassArr = []
grassEaterArr = []
gishatichArr = []
menArr = []
gyuxaciArr = []
function kerparner(qanak, kerpar) {
    var a = 0;
    while (a < qanak) {
        var x = Math.floor(Math.random()*m);
        var y = Math.floor(Math.random()*n);
        if (matrix[y][x] == 0) {
            matrix[y][x] = kerpar;
        }
        else {
            var x = Math.floor(Math.random()*m);
            var y = Math.floor(Math.random()*n);
            matrix[y][x] = kerpar;
        }
        a++;
    }

}
function generateMatrix() {
    for (let i = 0; i < n; i++) {
        matrix[i] = []
        for (let j = 0; j < m; j++) {
            matrix[i].push(0)

        }
    }
    kerparner(100, 1)
    kerparner(30, 2)
    kerparner(20, 3)
    kerparner(20, 4)
    kerparner(10, 5)
}
function createObject() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y, 1)
                grassArr.push(grass)
            }
            else if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y, 1)
                grassEaterArr.push(grassEater)
            }
            else if (matrix[y][x] == 3) {
                let gishatich = new Gishatich(x, y, 1)
                gishatichArr.push(gishatich)
            }
            else if (matrix[y][x] == 4) {
                let men = new Men(x, y, 1)
                menArr.push(men)
            }
            else if (matrix[y][x] == 5) {
                let gyuxaci = new Gyuxaci(x, y, 1)
                gyuxaciArr.push(gyuxaci)
            }
        }
    }
}
function game() {
    for (var i in grassArr) {
        grassArr[i].mul()
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat()
    }
    for (var i in menArr) {
        menArr[i].eat()
    }
    for (var i in gyuxaciArr) {
        gyuxaciArr[i].eat()
    }

    io.sockets.emit("my_matrix", matrix);

}


generateMatrix()
createObject()
setInterval(game, 1000)


io.on('connection', function (socket) {
    socket.emit("my_matrix", matrix);
    // io.sockets.emit("display message", data);
});


// console.log(matrix)


