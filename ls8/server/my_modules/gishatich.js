// class Gishatich {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.index = index;
//         this.energy = 19;
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }

// chooseCell(character) {
//     this.getNewCoordinates()
//     var found = [];
//     for (var i in this.directions) {
//         var x = this.directions[i][0];
//         var y = this.directions[i][1];
//         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//             if (matrix[y][x] == character) {
//                 found.push(this.directions[i]);
//             }
//         }
//     }
//     return found;

// }

// }
LivingCreature= require("./living.js")
module.exports = class Gishatich extends LivingCreature {
    constructor(x, y, index) {

        super(x, y, index);
        this.energy = 19;

    }
    chooseCell(ch) {
        this.getNewCoordinates();
        return super.chooseCell(ch);
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newGishatich = new Gishatich(newCell[0], newCell[1], this.index);
            gishatichArr.push(newGishatich);
            matrix[newCell[1]][newCell[0]] = 3;
            this.energy = 19
        }
    }
    move() {

        this.energy--

        console.log(this.energy);
        let emptyCells = this.chooseCell(1)
        let newCell = random(emptyCells)
        if (newCell) {

            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 1
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
        }
        if (this.energy <= 0) {
            this.die()
        }
        else {
            this.move1()
        }


    }
    move1() {

        this.energy--

        console.log(this.energy);
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {

            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
        }


    }

    eat() {

        let foods = this.chooseCell(2)
        let food = random(foods)
        if (food) {
            this.energy++
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 3
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 30) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }
    die() {
        console.log("merav");

        matrix[this.y][this.x] = 0
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
                break;
            }
        }
    }

}