function callIt(){
    return new Promise(function(resolve){
    setTimeout(resolve,5000)
   
    });
    // return p;
}


function callback(){
    console.log("hi"); 
}

const val = callIt();
val.then(callback)