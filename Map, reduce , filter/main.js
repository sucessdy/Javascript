const users = [
  { firstName: "Mukta", lastName: "kumari", age: " 88" },
  { firstName: "Mamta", lastName: "kumari", age: " 22" },
  { firstName: "Anuj", lastName: "kumar", age: " 24" },
  { firstName: "Rishab", lastName: "kumar", age: " 22" },
];

const lessThan30 = users.filter(x => x.age  <  30 ) 

console.log(lessThan30)


const LessThanthirty = users.filter((x) => x.age < 30).map((x) => x.firstName)

console.log(LessThanthirty)
function isLessThan(age){
    return age >= 30 
}
const thirty = users.filter(isLessThan)
 console.log(thirty)

let LessThan = []

for(let i =0 ; i < users.length; i++){
    if(users[i].age < 30 && users[i]){
       LessThan = [...LessThan, users[i]] 
    }
}

console.log(LessThan)


const AgeLessThan = users.filter(x => x.age< 30)
console.log(AgeLessThan)

//home work for solving this in reduce

const solution = users.reduce(function(arr, currentValue1) {
    if(currentValue1.age < 30) {
        arr.push(currentValue1.firstName)

    }
 return arr}, [])

 console.log("lessthan30" + " " + solution)


//   for age we're usingr educe we using for this fucntion

// why ? cuz a in this array we are findign 2 value inside it!!

// we want one object 
// const AgeValue = users.reduce(function (acc, cur) {
// if (acc[cur.age]){
// acc[cur.age] = ++ arr[cur.age]
// } else{
//     acc[cur.age] = 1
// }
// }, {})
// console.log(AgeValue)




const Name = users.map((x) => x.firstName + " " + x.lastName + " " + x.age);
console.log(Name);

const result = users.map((x) => x.firstName + " " + x.lastName);
console.log(result);

console.log("waring is before ", "result ");

const Age = users.reduce((acc, curr) => {
  const age = curr;
  acc[age] = acc[curr] ?? [22];
  acc[age].push(curr);
  return acc;
}, {});

console.log("user age", Age);

var dob = "20011129";
var year = Number(dob.substr(0, 4));
var month = Number(dob.substr(1, 1)) - 1;
var day = Number(dob.substr(2, 9));

var today = new Date();

var age = today.getFullYear() - year;
if (
  today.getMonth() < month ||
  (today.getMonth() == month && today.getDate() < day)
) {
  age--;
}

//  alert(age)

const arr = [22, 44, 4, 666, 77.65, 4343];
const sum = arr.map((x) => x * 2);
console.log(sum);

function doubled(x) {
  return x * 2;
}
const output = arr.map(doubled);
console.log(output);

const triple = arr.map((x) => x * 3);
console.log(triple);

function binary(x) {
  return x.toString(23, 33);
}
const answer = arr.map(binary);
console.log(answer);

const binaryStr = "1010110110110011100101100010101101100000000001111";
const binarychr = binaryStr.match(/.{1,8}/g);

const resultStr = binarychr
  .map((chunks) => String.fromCharCode(parseInt(chunks, 2)))
  .join("");

console.log(resultStr);

//

const numb = [22, 3, 4, 4, 664, 98, 0, 4, 8, 7, 3, 54, 2];
function isOdd(x) {
  return x < 88;
}
const output1 = numb.filter(isOdd);

console.log(output1);

const complier = numb.filter((x) => x > 33);
console.log(complier);

// reduced




// const under30 = users.filter(user => {
//     const ageInSeconds = new Date().getTime() - new Date(user.birthday).getTime();
//     return ageInSeconds < 30 * 365 * 86400 * 1000;
//   })

  

  
const arr1 = [45, 4, 54, 4];

function FindSum() {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum = sum + arr1[i];
  }
  return sum;
}

console.log(FindSum(arr1));

// do this with reduce

const Final = arr1.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(Final);

const arr2 = [2, 45, 66, 2, 5, 6, 3456, 7, 88, 3, 3];

const AddValue = arr2.reduce(function (max, current) {
  if (current > max) {
    max = current;
  }
  return max;
}, 0);
console.log(AddValue);
