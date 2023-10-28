const cart = ["diary", "laptop", "glass"];

const promise = createOrder(cart)
promise
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .catch(function (error) {
    console.log(error);
  });

  
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
  
  reject(err)
    }else {
        const orderId = "12457876543"
        if(orderId){
            setTimeout(function() {
                resolve(orderId)
            }, 40000)
        } else {
            reject(new Error ("failed to create order"))
        }
    }
  });
  return pr
}

function validateCart(cart) {
    return cart.length > 0

}

function proceedToPayment(orderId)
{
    console.log("processing to payment for " + orderId)
}