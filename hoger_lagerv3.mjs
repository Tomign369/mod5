import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let getal;
let computerkeuze = random(1, 10);
let i = 0;

do {
    getal = parseFloat(await userInput.question('raad een getal tussen 1 en 10 aub: '));
    i += 1;
    if(getal < computerkeuze){
        console.log('hoger!')
    }else{
        console.log('lager!')
    }
}
while(i <= 2 && computerkeuze != getal);

if(i == 3){
    console.log('Drie keer mis, Game Over!');
}else{
    console.log('Je hebt het juusite geraden! Amai!')
}

process.exit()