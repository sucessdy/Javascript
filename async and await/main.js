const p = new Promise((resolve, reject) => {
  resolve("promise is resolved");
});

async function getData() {
  return "Nasmate";
}
const dataPromise = getData();
dataPromise.then((res) => console.log(res));
//   console.log(data)

//  this async f always return a promise aeaither promise or you dont returnn a promise "string , number , non-promise value " ... he auto manticyyly wrap a  inside promise

//   question number 2

// how can we use async along with await
// async and await combo used to handle promises
// /before async and await

const promise = new Promise((resolve, reject) => {
  resolve("promise is resolved");
});

function getStatus() {
  promise.then((res) => console.log(res));
  console.log("nasmante js");
}
getStatus();

// js enigne is not wait  for resioved
// after aync and awai

const pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is using async");
  }, 2000);
});
const pro2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is using async in part 2");
  }, 4000);
});

async function handleClick() {
  console.log("neat");
  const val = await pro;
  // js engine is waiting  for promise to resolved
  console.log("nasmaste js ");
  console.log(val);
  const val2 = await pro2;

  console.log("nasmaste js 2 ");
  console.log(val2);
}
handleClick();

// we are fetch are info from API_URL
const API_URL = "https://api.github.com/users/sucessdy";
 //   fetch is a promise
  // fetch > Response

async function handlePromise() {

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
    }

catch (err){
console.log(err)
}
  
}

handlePromise();
