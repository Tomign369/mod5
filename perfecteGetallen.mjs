import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function perfecteGetallen(){
    
    for(let i = 1; i < 100; i++){
        let som = 0;

        for(let j = 1; j < i ; j ++){
            if(i % j == 0){
            som += j;
        }
    }
        if(som == i){
            console.log(i + ' is een perfect getal')
        }
    }
}


perfecteGetallen();


process.exit()