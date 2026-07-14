

const getAllData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(res);
    const data = await res.json()
    console.log(data);
}

// getAllData()

//* Hoisting
// console.log(a);

// var a = 10
// console.log(a);


// console.log(x);
// let x = 10
// console.log(x);

// sayHello()

// function sayHello() {
//     console.log("Hello everyone");

// }

// sayHello()

// greet()

const greet = () => {
    console.log("Hello everyone");

}
// greet()
// greet()
// greet()


const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(res);
    const data = await res.json()
    // console.log(data);

    const box = document.querySelector('.box')

    data.forEach((item) => {
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')

        p1.textContent = item.name
        p2.textContent = item.email

        // console.log(p1);
        // console.log(p2);

        box.append(p1)
        box.append(p2)
    })
}

fetchData()