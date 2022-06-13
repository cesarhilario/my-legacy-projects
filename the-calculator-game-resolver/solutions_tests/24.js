let buttons = ['-5', '+5', '2', '5'];
            //   0     1    2    3
let moves = 5;

class Game {
    constructor() {
        this.operators = {
            sum: (number) => {
                this.result = parseInt(this.result) + parseInt(number);
            },
            set: (number) => {
                this.result = (this.result === 0) ? number : parseInt(this.result.toString() + number);
            }
        };

        this.result = 0;
        this.target = 0;
        this.solution = [];
    }
}

let game = new Game();
game.target = 210;


for (let number = 0; number <= 33210; number++) {
    for (let index = 0; index < number.toString().length; index++) {
        let digit = number.toString()[index];

        (digit == 0) ? game.operators.sum(buttons[0]) : 0;
        (digit == 1) ? game.operators.sum(buttons[1]) : 0;
        (digit == 2) ? game.operators.set(buttons[2]) : 0;
        (digit == 3) ? game.operators.set(buttons[3]) : 0;
    }

    if( game.result == game.target ) {
        game.solution.push(number);
    } else {
        game.result = 0;
    }
}

console.log(game.solution);