// <!-- ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
//  -->


function updateCounter(){
    const currentDate = new Date();

    // Extract hours, minutes, and seconds
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    console.log(hours + ":" + minutes + ":" + seconds);
}
setInterval(updateCounter,1000);