// Creating a promise method. The promise will get resolved when timer times out after 6 seconds
let myPromise =new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Promise resolved")
    }, 6000);
})
//console log before calling the promsie
console.log("Before calling promise");;

//Call the promise and wait for it to be resolved and print a meassage.
myPromise.then((sucessMeassage)=>{
    console.log("from Callback"+sucessMeassage)
})
//Console log after calling the promise
console.log("After calling promise");