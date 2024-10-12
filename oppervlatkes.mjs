import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function oppervlakteCirkel(a, pie = Math.PI){
    return a * a * pie;
}

function oppervlakteDriehoek(a,b){    
    return (a * b) / 2;
     
}

function oppervlakteRechthoek(a, b){
    return (a * b);
}
function oppervlakteVierkant(a){
    return oppervlakteRechthoek(a, a)
     
}

let cirkel = oppervlakteCirkel(5);
console.log('oppervlakte driehoek: ' + cirkel);

let driehoek = oppervlakteDriehoek(3, 5);
console.log('oppervlakte driehoek: ' + driehoek)

let rechthoek =oppervlakteRechthoek(3, 5);
console.log('oppervlakte rechtoek: ' + rechthoek);

let vierkant =oppervlakteVierkant(4);
console.log('oppervlakte rechtoek: ' + vierkant);

process.exit()  