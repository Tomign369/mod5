import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('Geef een getal in om de factorial te berekennen: '))

function factorial(a){
    if(a > 1)
        {
        let productFact = 1;
        for(let i = 2; i <= a; i ++)
            {
                productFact = productFact * i;   
            }       
        return productFact
        }   
    else
    {
        console.error('Input mag wel niet kleiner dan of gelijk aan 1 zijn eh man! SUKKEL!');
    }
    
}


let resultaat = factorial(getal);
console.log(resultaat)

process.exit()