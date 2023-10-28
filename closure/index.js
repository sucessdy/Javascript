// function x() {
//   var a = 8;
//   function y() {
//     console.log(a);
//   }

//   a = 200;
//   return y;
// }
// var z = x();

// function b() {
//   var z = 34;
//   function x() {
//     var a = 8;
//     function y() {
//       console.log(a, z);
//     }
//     y();
//   }
//   x();
// }

// b();

function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  console.log("javascript");
}

x();
