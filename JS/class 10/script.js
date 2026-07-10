// console.log("One");
// console.log("Two");
// console.log("Three");
// console.log("Four");
// setTimeout(() => {
//     console.log("Five");
// }, 2000)
// console.log("Six");
// console.log("Seven");


//! Callback Hell
// () => {
//     () => {
//         () => {

//         }
//     }
// }

//! Promise
fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        console.log(res);

        res.json().then((result) => {
            console.log(result);
        })

    }).catch((err) => {
        console.log(err);

    })