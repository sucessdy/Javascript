function attachedEventListener(){
    let count = 0; 
    document.getElementById("clickMe").addEventListener("click" , function xyz() {
        console.log("Button clicked ", ++count)
    }) 
}

attachedEventListener(); 


console.log("newpapaer")
Logger()
console.log(99)
 function Logger(){
    console.log(1)
    console.log(2)
    console.log(3)
 }
function star(){
    console.log("shooting star")
}
star()

function message() {
    console.log("Im a greting")
     setTimeout(() => {
        console.log('its2pm')
     }, 2000)
}
message(); 


function Enchanted(){
    setTimeout(() => {
        const enjoy = {name:  "taylor", song: "enchanted"}
console.log(enjoy) 
setTimeout(() => {
    console.log(" Enxhanted to meet you")
})
}, 3000); 
}
Enchanted(); 

// async function asyncFall() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
//         return res.json()
//     })
//     console.log(response)
// }
// asyncFall()

async function CallbackHell() {
    try {
        const responseId = await fetch("https://dummyjson.com/products/1'");
        const data = await responseId.json();

        console.log(data);
    } catch (err) {
        console.log("My function is not working");
        console.error(err); // Using console.error for better visibility of errors
    }
}

CallbackHell();


// console.log("Start")
// setTimeout(function cb() {
//     console.log("Callback")
// }, 5000)
//  console.log("End")


 console.log("Start")
 document.getElementById("clickMe")
.addEventListener("click" , function cb() {
    console.log("Callback")
})    
console.log("End")


const cart = ["makeup-box" , "paper bag", "lipstick"]
createOrder(cart, function(err, orderId) {
    if(err){
console.log(err)
    } else {
        proceedToPayment(orderId)
    }
})


function createOrder(cart, callback) {
    if(!validateCart(cart) ){
        const err = new Error("cart is not valid" ) 
        callback(err, null)
    } else {
        const orderId =  "12334234543"
        if(orderId ) {
            callback(null, orderId)
        }else {
            callback(new Error ("failed to create order"), null)
        }
    }
} 

function validateCart(cart) {
    return cart.length > 0; 
}

function proceedToPayment (orderId)
{
    console.log("Proceeding to payment for the order id" + orderId)
}