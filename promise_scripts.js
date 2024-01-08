const movie = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        let isTicketBooked = false;
        if(isTicketBooked) {
            resolve("Ticket is succesfully booked");
        }
        else {
            reject(new Error("Ticker is not booked !"));
        }
    }, 2000)
})

movie.then( (res) => {
    console.log(`congratulations, ${res}`);
})
.catch( (err)=> {
    console.log(`sorry, ${err}`);
})