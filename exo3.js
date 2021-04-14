const scanf = require('scanf');

console.log("please enter a number");
let num = scanf('%d');
let sum = 0
for(let i = 1; i<= num; i++){
    
    sum += i
  
}

console.log(`the addition of the number is ${sum}`);