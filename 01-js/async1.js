const fs = require("fs");

fs.readFile("a.txt", 'utf-8', function(err, data){
    console.log(data)
})

console.log("Async function fs1");
let a=1;
for(let i= 0; i < 100000000000000; i++){
    a++;
}
console.log("Async function fs2");

//Async function fs1
//Async function fs2 -> this will be executed as theread is busy with for loop and even aftere file  reading is resolved this call back will remian in waiting until current work tharead have i.e for loop is not resolved once done with current flow and will be ideal then it will tthen check with resolved callbacks
