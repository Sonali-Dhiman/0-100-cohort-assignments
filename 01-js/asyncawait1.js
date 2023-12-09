function callIt(){
    let p = new Promise(function(resolve) {
        //do some async function here.
        setTimeout(function() {
            resolve("Hi There")
        },5000);
    })
    return p;
}

async function main(){  //this function is now be asynchronoud
    let val= await callIt(); //no callbacks, no .then syntax
    //when function returns promise then we can pput await in front of it
    console.log(val);// here control will wait and meanwhile excute code aftermain and once promise is resolve then it starte atfter await function

    //It is a conccius decsiion of writing code after awaut it is equal to
    
    // .then(function(valye){
    //     console.log(value);
    //     console.log("HelloWorld")
    // })
    console.log("HelloWorld")
}
main();
console.log("after main")