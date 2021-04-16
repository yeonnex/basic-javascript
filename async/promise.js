"use strict";

// Promise is a Javascript object for asynchronous operation
// state: pending -> fulfilled or rejected

// 1. Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");

  setTimeout(() => {
    resolve("hello?");
    //reject(new Error("OMG no network..."));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally...!");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
    .then(num => num*2)
    .then(num => num*3)
    .then(num=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(num-1)
            },1000)
        })
    })
    .then(num=>console.log(num))

// 4. Error Handling
const getHen = ()=>
    new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('🐔'), 1000)
    })
const getEgg = hen =>
    new Promise((resolve, reject)=>{
        setTimeout(() => resolve(`${hen} => 🥚`),1000)
    })
const cook = egg =>
    new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(`${egg} => 🍳`), 1000)
    })
     
getHen()
    .then(hen => getEgg(hen))
    .catch( error =>{ // 계란을 받아오는 것에 문제가 생길 경우, 전체적인 프로미스 체인에 문제가 생기지 않도록 닭다리를 리턴
        return '🍗'
    })
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch(console.log)