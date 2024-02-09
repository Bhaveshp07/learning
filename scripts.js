console.log("the first line");




function getName(username) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(`hello ${username}`);
        }, 2000);
    })
}
// setTimeout(()=> {
//     cb(`hello ${username}`);
// },2000);






function bookMovieTicket(movieName) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            reject(new Error(`the movie ${movieName} is successfully booked`));
        }, 1000)
    })
}

// setTimeout(()=> {
//     cb(`the movie ${movieName} is successfully booked`);
// },2000)

//  getName("Bhavesh Purswani", function(msg) {
//     console.log(msg);
//     bookMovieTicket("DDLJ", function(response) {
//         console.log(response);
//     })
// });

function reviewMovie(review) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            // resolve(`The movie was ${review}`);
            resolve(`The movie was ${review}`);
        }, 500)
    })
} 


// Promise.any([getName("Bhavesh Purswani"),
//     reviewMovie("Good !"),
//     bookMovieTicket("DDLJ"),
// ])
// .then((res)=> {
//     console.log(res);
//     return 

// })
// .catch((err)=> {
//     console.log(err);
// })



async function result() {
    try {
    const msg1 = await getName("Bhavesh Purswani");
    console.log(msg1);
    const msg2 = await bookMovieTicket("DDLJ");
    console.log(msg2)
    const msg3 = await reviewMovie("Good !");
    console.log(msg3);

    // console.log(msg1, msg2, msg3);
    } catch (error) {
        console.log(error);
    }
}

result();

console.log(result() instanceof Promise);
console.log("the second line");
