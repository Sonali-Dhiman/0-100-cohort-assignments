/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    return new Promise((resolve) =>{
        setTimeout(function(){
            console.log("awake")
            resolve("awake informed")
        },seconds)
    });
}

console.log("Going to sleep");
sleep(8000).then((value) =>{
console.log(value + "  End");
});