// async & await
// clear style of using promise

// 1. promise 복습
// 사용자의 데이터를 백엔드에서 받아오는 함수
function fetchUser() {
  return new Promise((resolve, reject) => {
    // do network request in 10 secs...
    resolve("ellie");
  });
}

const user = fetchUser();

console.log(user); // Promise{...}
user.then(console.log); // ellie

// 2. async
async function a_fetchUser() {
  return "seoyeon";
}

const a_user = a_fetchUser();

console.log(a_user); // Promise{...}
a_user.then(console.log); // ellie

// 3. await ✨
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(2000);
  return "🍌";
}

// // 콜백 지옥이 생각나게 하는 아래 코드.. promise 도코드가 난잡해진다
// function pickFruits(){

//     return getApple().then(apple =>{
//         return getBanana().then(banana => `${apple} +${banana}`)
//     })
// }

async function a_pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} +${banana}`
}

a_pickFruits().then(console.log); // 약 5초 뒤 출력됨


// Useful APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()]).then(fruits =>
        fruits.join(' + ')
    );
}

pickAllFruits().then(console.log)
