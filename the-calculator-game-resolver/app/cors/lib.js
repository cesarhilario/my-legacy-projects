class Game {
    constructor(options) {
        this.options = options;
        this.maxNumber;
        this.minNumber;

        this.buttons = ['0'];
        this.currentButton = '';
        this.currentButtonHasOperator = 0;
        this.currentValue = options.initialValue;

        this.operators = {
            sum: number => {

                this.currentValue = +this.currentValue + +number;
            },
            multiply: number => {

                this.currentValue = +this.currentValue * number.toString().replace('X', '');
            },
            divide: number => {

                this.currentValue = parseFloat(this.currentValue / number.toString().replace('/', ''));
            },
            set: number => {

                this.currentValue = (this.currentValue === 0) ? number : +this.currentValue.toString() + number;
            },
            delete: () => {

                let [...number] = this.currentValue.toString();
                let result = '';

                number.pop();
                number.forEach(digit => {
                    result += digit;
                });

                this.currentValue = +result;
            },
            replace: change => {

                while (this.currentValue.toString().indexOf(change[0]) != -1) { 
                    this.currentValue = this.currentValue.toString().replace(change[0], change[3]);
                }

                this.currentValue = +this.currentValue;
            }
        }
    }

    buildGame() {
        switch (this.options.moves) {
            case 3:
                this.minNumber = 100;
                this.maxNumber = 999;
                break;
            case 4:
                this.minNumber = 1000;
                this.maxNumber = 9999;
                break;
            case 5:
                this.minNumber = 10000;
                this.maxNumber = 99999;
                break;
            case 6:
                this.minNumber = 100000;
                this.maxNumber = 999999;
            default:
                this.minNumber = 10;
                this.maxNumber = 99;
        }
    }

    addButton(value) {
        switch (value) {
            case 'OK':
                if (this.currentButton) this.buttons.push(this.currentButton);
                this.currentButton = '';
                this.currentButtonHasOperator = 0;
                break;
            case 'CLR':
                this.buttons = ['0'];
                this.currentButton = '';
                break;
            case '<<':
                this.buttons.push(value);
                this.currentButton = '';
                break;
            case '+':
            case '-':
            case 'X':
            case '/':
            case '=>':
                this.currentButtonHasOperator++;
            default:
                if (this.currentButtonHasOperator <= 1) {
                    this.currentButton += value;
                }
        }
    }

    findNumbersInSolutions(solution) {
        let strSolution = solution.toString();

        for(let i = this.buttons.length; i <= 9; i++) {
            if (strSolution.includes(i) || strSolution.includes(0)) return true;
        }
    }

    resolve() {
        this.buildGame();

        let solutions = [];

        for (let number = this.minNumber; number < this.maxNumber; number++) {
            for (let index = 0; index < number.toString().length; index++) {
                let digit = number.toString()[index];

                this.buttons.forEach((button, i) => {
                    if (digit == i) {
                        (button.indexOf('+') >= 0) ? this.operators.sum(button) : 0;
                        (button.indexOf('-') >= 0) ? this.operators.sum(button) : 0;
                        (button.indexOf('X') >= 0) ? this.operators.multiply(button) : 0;
                        (button.indexOf('/') >= 0) ? this.operators.divide(button) : 0;
                        (button.indexOf('=>') >= 0) ? this.operators.replace(button): 0;
                        (button.indexOf('<<') >= 0) ? this.operators.delete() : 0;
                        
                        switch(button) {
                            case '0': case '1': case '2': case '3': case '4': 
                            case '5': case '6': case '7': case '8': case '9':
                            this.operators.set(button);
                        }
                    }
                });
            }


            if (this.currentValue == this.options.goal) {
                if(!this.findNumbersInSolutions(number)) 
                    solutions.push(number);
                this.currentValue = this.options.initialValue;
            } else {
                this.currentValue = this.options.initialValue;
            }
        }

        return solutions;
    }
}