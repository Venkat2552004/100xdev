/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


// function wait(seconds) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve(`Resolved after ${seconds} seconds`);
//         }, seconds * 1000);
//     });
//   }

function wait(n) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(`${n} seconds have passed`)
        }, n * 1000);
    });
}

wait(5)
  .then((msg) => console.log(msg));

  