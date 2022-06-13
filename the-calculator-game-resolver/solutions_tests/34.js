let buttons = ['0', '/3', '1', '4=>5', 'x2'];
//              0     1    2     3       4

let moves = 4,
    maxNumber;

switch (moves) {
    case 3:
        maxNumber = 999;
        break;
    case 4:
        maxNumber = 9999;
        break;
    case 5:
        maxNumber = 99999;
        break;
    default:
        maxNumber = 0;
}

class Game {
    constructor() {
        this.operators = {
            sum: (number) => {
                this.result = parseInt(this.result) + parseInt(number);
            },
            set: (number) => {
                this.result = (this.result === 0) ? number : parseInt(this.result.toString() + number);
            },
            divide: (number) => {
                this.result = parseFloat(this.result / number.toString().replace('/', ''));
            },
            multiply: (number) => {
                this.result = parseInt(this.result * number.toString().replace('x', ''));
            },
            replace: (condition) => {
                while (this.result.toString().indexOf(condition[0]) != -1) {
                    this.result = this.result.toString().replace(condition[0], condition[3]);
                }

                this.result = parseInt(this.result);
            }

        };

        this.result = 0;
        this.target = 0;
        this.solution = [];
    }
}

let game = new Game();
game.result = 2;
game.target = 15;

for (let number = 1000; number <= maxNumber; number++) {
    for (let index = 0; index < number.toString().length; index++) {
        let digit = number.toString()[index];

        (digit == 1) ? game.operators.divide(buttons[1]): 0;
        (digit == 2) ? game.operators.set(buttons[2]): 0;
        (digit == 3) ? game.operators.replace(buttons[3]): 0;
        (digit == 4) ? game.operators.multiply(buttons[4]): 0;
    }

    if (game.result == game.target) {
        game.solution.push(number);
    } else {
        game.result = 2;
    }
}

console.log(game.solution);