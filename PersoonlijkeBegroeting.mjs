import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let naam = await userInput.question('Wat is je naam? ')

function PersoonlijkeBegroeting(){
    console.log('Hallo, ' + naam + (' hoe maakt u het?'))

}

PersoonlijkeBegroeting(naam)

process.exit()  