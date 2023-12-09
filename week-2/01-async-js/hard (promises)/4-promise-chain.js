/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("First Finished"),1000)
    })
}

function waitTwoSecond(data) {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(data+", Second Finished"),2000)
    })
}

function waitThreeSecond(data) {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(data+ ", Third Finished"),3000)
    })
}

function calculateTime() {
    const startTime = Date.now();
    waitOneSecond()
    .then((res1)=> waitTwoSecond(res1))
    .then((res2)=> waitThreeSecond(res2))
    .then(finalRes =>{
        let endTime = Date.now();
        console.log("Final result is : "+finalRes+" and time taken : "+ (endTime - startTime)/1000 + "seconds"); // taking double the time then Promise.all in 3-promise.js
    })
}

calculateTime();