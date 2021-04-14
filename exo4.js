const scanf = require('scanf');

console.log("please enter five number into the array");
const numOne = scanf('%d%d%d%d%d');
let sum = 0 
console.log('my array', numOne);

console.log('the biggest number is : ' +Math.max(...numOne))


for(let i in numOne){

    console.log(`${i} : ${numOne[i]}`);
    sum +=  numOne[i];
    
}

avg = sum /numOne.length
console.log('the average is : ' +avg);


