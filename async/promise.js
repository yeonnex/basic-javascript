"use strict";

// Promise is a Javascript object for asynchronous operation
// state: pending -> fulfilled or rejected

// 1. Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");

  setTimeout(() => {
    resolve('hello?')
    //reject(new Error("OMG no network..."));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise.then((value) => {
  console.log(value);
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log('finally...!')
})

