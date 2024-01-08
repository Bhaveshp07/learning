console.log("start");

const Promise1 = new Promise((resolve, reject)=> {
    console.log(1);
    resolve(2);
});

Promise1.then((res)=> {
    console.log(res);
}).catch((err)=> {
    console.log("error");
})


console.log("end");
