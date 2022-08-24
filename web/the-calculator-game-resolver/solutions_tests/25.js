let buttons = ['0', '0', '+4', '/2'];
            //  0    1     2     3    

let moves = 4;

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
                this.result = parseFloat(this.result / number.toString().replace('/', ''))
            }
        };

        this.result = 0;
        this.target = 0;
        this.solution = [];
    }
}

let game = new Game();
game.result = 40;
game.target = 2020;

for (let number = 0; number <= 9999; number++) {
    for (let index = 0; index < number.toString().length; index++) {
        let digit = number.toString()[index];

        (digit == 1) ? game.operators.set(buttons[1]) : 0;
        (digit == 2) ? game.operators.sum(buttons[2]) : 0;
        (digit == 3) ? game.operators.divide(buttons[3]) : 0;
    }

    if( game.result == game.target ) {
        game.solution.push(number);
    } else {
        game.result = 40;
    }
}

console.log(game.solution);