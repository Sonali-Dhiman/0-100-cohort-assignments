//Promise to write cleaner way of async function of your own
const fs = require("fs");

//Own async function and under the hood we always has hs provide async fnction here its fs.readFile
function readFile(){
    console.log("inside read File")
    return new Promise(function(resolve){
        console.log("inside Promise")
        fs.readFile("a.txt", 'utf-8', function(err, data){
            console.log("before resolve")
            resolve(data)
    });
    })
}

function checkRead(data){
    console.log(data);
}

//readFile().then(checkRead)
var a= readFile();
a.then(checkRead)