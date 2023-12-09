// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
const moment = require('moment');

function updateCounter(){
    const currentTime = moment();

    // Extract hours, minutes, and seconds
    const formatTimeIn24 = currentTime.format('HH:mm:ss');
    const formatTimeIn12 = currentTime.format('hh:mm:ss A');

    console.log('24 hour format', formatTimeIn24);
    console.log('12 hour format', formatTimeIn12);
}
setInterval(updateCounter,1000);