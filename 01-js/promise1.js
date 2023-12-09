//ugly way of wriiting own async function
const fs = require("fs");

//Own async function and under the hood we always has hs provide async fnction here its fs.readFile
function readFile(cb){
    fs.readFile("a.txt", 'utf-8', function(err, data){
        console.log(data)
    })
}

function checkRead(data){
    console.log(data);
}

readFile(checkRead)