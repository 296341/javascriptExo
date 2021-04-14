const scanf = require('scanf');

console.log("please enter the first word ");
let wordOne = scanf('%s');

console.log("please enter the second word");
let wordTwo = scanf('%s');

if (wordOne.length > 2*wordTwo.length){
    console.log("the first word is twice bigger than the second word")
}else{
    console.log("the first word is not twice bigger than the second word")
}