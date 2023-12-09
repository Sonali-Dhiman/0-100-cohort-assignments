/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve("Resolving Promise")
        },n);
    })
}
wait(3000).then(function(value){
        console.log(value)
    }
)