import { modal } from './modal.js'
import { AlertError } from './alert-error.js';
import { calculateIMC, notANumber } from './utils.js';

// VARIAVEIS 
const form =  document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

form.onsubmit = event => {
    event.preventDefault();
    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightIsNotNumber = notANumber(weight) || notANumber(height);

    if(weightOrHeightIsNotNumber){
        AlertError.open();
        return
    }

    AlertError.close();

    const result = calculateIMC(weight, height);

    displayResultMessage(result);
}

function displayResultMessage(result){   
    if(result > 18 && result < 25){
        modal.message.innerText = `Seu IMC é de ${result} - Normal`;
    }else if(result > 25 && result < 30){
        modal.message.innerText = `Seu IMC é de ${result} - Sobrepeso`;
    }else if(result > 30 && result < 40){
        modal.message.innerText = `Seu IMC é de ${result} - Obesidade`;
    }else if(result > 40){
        modal.message.innerText = `Seu IMC é de ${result} - Obesidade Grave`;
    }
    modal.open();
}






