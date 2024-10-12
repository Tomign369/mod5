import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


function DagenInMaand(maand,jaartal){

let aantaldagen;

let schrikkeljaar = (jaartal % 4 == 0 && jaartal % 100 != 0) || (jaartal % 400 == 0)
if(schrikkeljaar && maand == 'februari'){
        aantaldagen = 29;

    }else{
        switch(maand){
            case'januari':
            case'maart':
            case'mei':
            case'juli':
            case'augustus':
            case'oktober':
            case'december':
                aantaldagen = 31;
                break;

            case'april':
            case'juni':
            case'september':
            case'november':
                aantaldagen = 30;
                break;
            case'februari':
                break;
            
            default:
                aantaldagen = 'Ongeldige keuze.'
                break
        }
    }
    return aantaldagen;
}

let invoerMaand = await userInput.question('Geef een maand in om te kijken hoeveel dagen er zijn: ')
let invoerJaar = parseFloat(await userInput.question('Geef een jaartal in om te bekijken of het een schrikkeljaar was: '))
let resultaat = DagenInMaand(invoerMaand, invoerJaar) 
console.log('De maand ' + invoerMaand + ' heeft in het jaar '+ invoerJaar + ', ' + resultaat + ' dagen.')

process.exit()