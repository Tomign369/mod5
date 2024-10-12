import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let fahrenheit = parseFloat(await userInput.question('Fahrenheit omzetten naar celsius: ')); //a
let Celsius = parseFloat(await userInput.question('Celsius omzetten naar fahrenheit: ')); //b

function temperatuurConverter(temperatuur,isCelsius){
    if(isCelsius){
        let CelsiusConverted = (temperatuur * 9/5) +32;  
        return CelsiusConverted;
       
    }else{
        let fahrenheitconverted = (temperatuur - 32) * 5/9;
        return fahrenheitconverted;
    }

}

let resultaatCelsius = temperatuurConverter(Celsius, true);
let resultaatFahrenheit = temperatuurConverter(fahrenheit, false);

console.log('celsius converted naar fahrenheit: ' + resultaatCelsius);
console.log('Fahrenheit converted naar celsius: ' + resultaatFahrenheit);


process.exit()