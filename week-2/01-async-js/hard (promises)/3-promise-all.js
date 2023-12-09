/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("First Finished"),1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Second Finished"),2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Third Finished"),3000)
    })
}
// Promise.all is a method in JavaScript that takes an iterable (like an array) of promises as input and returns a new promise. This new promise is fulfilled with an array containing the resolved values of all the input promises, in the order they were provided as arguments to Promise.all. If any of the input promises are rejected, the new promise returned by Promise.all is immediately rejected with the reason of the first promise that was rejected.


// function calculateTime() {
//     return Promise.all([
//         waitOneSecond(),
//         waitTwoSecond(),
//         waitThreeSecond()
//     ])
// }

async function calculateTime() {
    const startTime = Date.now();
    try {
      const results = await Promise.all([
        waitOneSecond(),
        waitTwoSecond(),
        waitThreeSecond()
      ]);
      const endTime = Date.now();
      console.log("Final result = "+results+"  Total time taken "+ (endTime-startTime)/1000+" seconds"); //changing miliseconds to seconds
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  
  // Example usage
  calculateTime();
  