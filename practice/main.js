// const heading = document.getElementById("heading")
// function changeColor(color){
// heading.style.color = color;
// }

// const Button  = document.getElementById("btn")
// Button.addEventListener("click" , function () {
//     heading.style.color="red"
// })

function attachedEventListener() {
  let count = 0;
  document.getElementById("btn").addEventListener("click", function abc() {
    console.log("button clicked", ++count);
  });
}

attachedEventListener();

function Phone() {
  setTimeout(() => {
    const called = { missedCall: " from Nist", notRecevied: "to mishta" };
    console.log(called);
  }, 5000);
  setTimeout(() => {
    console.log(" you missed a call form nist ");
  }, 5000);
}
Phone();

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is fullied");
  }, 2000);
});

const pro2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is using async in part 2");
  }, 4000);
});

async function handlePromise() {
  console.log("promise is complete");

  const p = await promise;
  console.log(p);

  const val = await pro2;

  console.log("nasmaste js 2 ");
  console.log(val);
}

handlePromise();

// proptotype in js

const myObject = {
  city: "madrid",
  greet() {
    console.log(`greeting from  ${this.city} `);
  },
};

myObject.greet()


const myDate = new Date(2001, 11, 29)

console.log(myDate.getYear())
myDate.getYear = function() {
    console.log("something else")
}

myDate.getYear()