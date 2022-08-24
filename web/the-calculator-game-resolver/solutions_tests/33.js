let buttons = ['0', '+3', '/3', '1=>2'];
//              0     1     2      3    

let moves = 5;

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
            times: (number) => {
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
game.result = 36;
game.target = 20;

for (let number = 0; number <= 99999; number++) {
    for (let index = 0; index < number.toString().length; index++) {
        let digit = number.toString()[index];

        (digit == 1) ? game.operators.sum(buttons[1]): 0;
        (digit == 2) ? game.operators.divide(buttons[2]): 0;
        (digit == 3) ? game.operators.replace(buttons[3]): 0;
    }

    if (game.result == game.target) {
        game.solution.push(number);
    } else {
        game.result = 36;
    }
}

console.log(game.solution);