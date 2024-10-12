import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let getal;
let computerkeuze = random(1, 10);


do {
    getal = parseFloat(await userInput.question('raad een getal tussen 1 en 10 aub: '));
    if(getal < computerkeuze){
        console.log('hoger!')
    }else{
        console.log('lager!')
    }
}
while(computerkeuze != getal);

console.log('Eindelijk! Amai nog niet!')

process.exit()