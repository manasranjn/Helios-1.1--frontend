//? Symbol
let s = Symbol("hello")
// console.log(s);

//? BigInt
// let a = BigInt(1234523453456)
// console.log(a);

//* Reference type/ Non-Primitive
//? Array
let arr = [1, 2, 3, 4, true, undefined, null, "Hello", [1, 2, 3, 4]]
// console.log(arr[7]);
// console.log(arr[-3]); //not possible
// console.log(arr);


//? Object
let obj = {
    name: "Smith",
    age: 25,
    address: {
        city: "NY",
        country: "USA"
    }
}

// console.log(obj);
// console.log(obj.age);
// console.log(obj['address']);


//? Function
function sayHello() {
    console.log("Hello everyone");
    console.log("Good evening");
}

// sayHello()

//! Operators
//? Arithmetic Operator
let a = 20
let b = 15
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** 3);

//? Assignment Operatos
// let x = 10
// x += 10 // x = x+ 10 = 20
// x -= 5 // 20-5 = 15
// x *= 2 // 15*2 = 30
// x /= 3 // 30/3 = 10
// x **= 2
// console.log(x);

//? Logical Operators
let l1 = true
let l2 = false
let l3 = true

// console.log(l1 && l2);
// console.log(l1 && l3);
// console.log(l1 || l2);
// console.log(l1 || l3);
// console.log(!l1);
// console.log(!l2);

//? Comparision Operators
// console.log(10 == 20);
// console.log(10 == 10);
// console.log(10 == '10');
// console.log(10 === '10');
// console.log(10 === 20);
// console.log(10 != 10);
// console.log(10 != 11);
// console.log(10 !== 10);
// console.log(10 !== 11);
// console.log(10 > 10);
// console.log(10 < 10);
// console.log(10 <= 10);
// console.log(10 >= 10);

//? Unary Operators
//* Increment
let num = 10
// Pre increment
// console.log(++num);
// console.log(num++);
// console.log(num);

//* Decrement
// console.log(--num);
// console.log(num--);
// console.log(num);

num++ //10
++num // 11-> 12
++num // 13
++num //14
num-- // 14
console.log(num); //13
++num // 14
num--
num--
num-- // 12
console.log(num); //11
