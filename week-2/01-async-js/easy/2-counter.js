// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. -->



function updateCounter(inc){
    
    let count =0;
    count += inc;
    const currentDate = new Date();

    // Extract hours, minutes, and seconds
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    console.log(hours + ":" + minutes + ":" + seconds);
    if (count < 100) {
        // Schedule the next update after 1 second
        setTimeout(() => {
          updateCounter(count + 1);
        }, 1000);
      }
}

function main() {
    // Start the counter
    updateCounter(0);
  }
  
  main();
 




























































