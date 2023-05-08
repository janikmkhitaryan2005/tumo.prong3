// class Gyuxaci {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.energy = 30;
//         this.index = index;

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

//     chooseCell(character) {
//         this.getNewCoordinates()
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;

//     }


// }
class Gyuxaci extends LivingCreature {
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
            var newMen = new Men(newCell[0], newCell[1], this.index);
            menArr.push(newMen);
            matrix[newCell[1]][newCell[0]] = 5;
            this.energy = 20
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
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
        }
        if (this.energy <= 0) {
            this.die()
        }

    }

    eat() {

        let foods = this.chooseCell(0)
        let food = random(foods)
        if (food) {
            this.energy++
            matrix[this.y][this.x] = 1
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 5
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

        }
        if (this.energy >= 100) {
            this.mul()
        }
        else {
            this.move()
        }
    }
    die() {
        console.log("merav");

        matrix[this.y][this.x] = 0
        for (var i in menArr) {
            if (this.x == menArr[i].x && this.y == menArr[i].y) {
                menArr.splice(i, 1);
                break;
            }
        }
    }




}