// var matrix = [
//     [0, 0, 0, 0, 0, 0, 0, 1, 1],
//     [1, 2, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 3, 0, 1, 0, 0, 0],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 0, 0, 0, 0, 0, 1, 0, 0],
//     [1, 0, 0, 2, 0, 0, 1, 4, 1],
// ];

var matrix = []
var n = 45
var m = 30
function kerparner(qanak, kerpar){
    var a = 0;
    while (a<qanak){
        var xx =Math.floor(random(0,n));
        var yy =Math.floor(random(0,m));
        if(matrix[yy][xx]  == 0){
            matrix[yy][xx] =kerpar;
        }
        a++;
    }

}

var side = 20;

var grassArr = []
var grassEaterArr = []
var gishatichArr = []
var menArr = []
var gyuxaciArr = []

function setup() {
    for (let i = 0; i < n; i++) {
        matrix.push([])
        for (let j = 0; j < m; j++) {
            matrix[i].push(0)
            
        }
    }
kerparner(100,1)
kerparner(30,2)
kerparner(20,3)
kerparner(20,4)
kerparner(10,5)

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
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
    console.log(grassArr)
}

function draw() {

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
                fill(0,0,0);
            }
            else if (matrix[y][x] == 5) {
                fill(30,66,92);
            }
            rect(x * side, y * side, side, side);
        }
    }
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

}