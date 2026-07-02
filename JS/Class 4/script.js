//! Array inbuilt methods
let arr = [10, 'Hello', true, 2, undefined, 3, 4, 5]
//? push()
// arr.push(100, false, null)
// console.log(arr);

//? pop()
// let a = arr.pop()
// console.log(arr);
// console.log(a);

//? unshift()
// arr.unshift(100, false, null)
// console.log(arr);

//? shift()
// arr.shift()
// console.log(arr);

//? splice(startIndex, deleteCount, item1, item2, ...)
//* Insert
// arr.splice(3, 0, 'Inserted Item 1', 'Inserted Item 2')
// console.log(arr);

//* Delete
// arr.splice(3, 2)
// console.log(arr);

//* Replace
// arr.splice(1, 2, 'Replaced Item 1', 'Replaced Item 2', 'Replaced Item 3')
// console.log(arr);


//? slice(startIndex, endIndex)
let subArr = arr.slice(1, 5)
// console.log(subArr);

//? reverse()
// arr.reverse()
// console.log(arr);

//? includes(searchElement, fromIndex)
// console.log(arr.includes(100));
// console.log(arr.includes(2));
// console.log(arr.includes(2, 5));

//? length
// console.log(arr.length);

//? toString()
console.log(arr.toString());
