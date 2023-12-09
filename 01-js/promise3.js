let p= new Promise(function(resolve){
   setTimeout(function(){
    resolve("Hi There");
   },5000)
});


function callback(){
    console.log(p); //"Here promise if resolved hence output Promise { 'Hi There' }"
}

console.log(p) //"Hee prmise is still oending as its not yet resolved"
p.then(callback);

//Promise can we use outside and inside of functions.