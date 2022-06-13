import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result;
  numbers = {};
  history = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  Calculate(operation) {
    let number1 = parseInt(this.numbers["number1"]),
        number2 = parseInt(this.numbers["number2"]),
        symbol;

    if (number1 && number2) {
      switch (operation) {
        case "sum":
          this.result = number1 + number2;
          symbol = "+";
          break;
        case "div":
          this.result = number1 / number2;
          symbol = "/"
          break;
        case "mult":
          this.result = number1 * number2;
          symbol = "*"
          break;
        case "sub":
          this.result = number1 - number2;
          symbol = "-"
          break;
        }

        const resultAlert = this.alertCtrl.create({
          title: 'Resultado',
          subTitle: 'O Resultado da operação é: ' + this.result,
          buttons: ['Fechar']
        });
        resultAlert.present();
        
        let _operation = `${number1} ${symbol} ${number2} = ${this.result}`
        this.history.push(_operation);
      }else{
        const validationAlert = this.alertCtrl.create({
          title: "Opa",
          subTitle: "Preencha todos os termos para realizar a operação!",
          buttons: ["Fechar"]
        });
        validationAlert.present();
      }
    }

  }
