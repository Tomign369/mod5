import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function somVanDelers(a){
    let n = 0
    for(let i = 1; i < a; i++){
        if(a % i == 0){
            n += i;          
    }
    }
    return n;
}

let getal = parseFloat(await userInput.question('geef een getal in om de som van de delers te berekenen: '));
let resultaat = somVanDelers(getal);
console.log('de som van de delers is: ' + resultaat);

process.exit()