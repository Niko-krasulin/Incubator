
//-----------------------------Home work ---------------------------

// const getSubStr = (str, startIndex) => {
//     return str.slice(startIndex)
// }
// // let str = 'Hello, world!';
// // let startIndex = 7;
// console.log(getSubStr('Hello, world!', 7)); // Выведет: "world!"


// 2) Напишите функцию, которая возвращает последние n элементов массива.
//
//     Expected:
//
// console.log(getLastElements([1, 2, 3, 4, 5], 3)); // Выведет: [3, 4, 5]

// const getLastElements = (arr, n) => arr.slice(n-1)
//
// console.log(getLastElements([1, 2, 3, 4, 5], 3))

// 3)Создайте функцию, которая извлекает часть пути URL-адреса, начиная с указанного индекса.
//
//     Expected:
//
// console.log(extractPath('https://example.com/blog/article', 18)); // Выведет: "/blog/article"

// const extractPath = (str, index) => str.slice(index+1)
// console.log(extractPath('https://example.com/blog/article', 18))

// 4) Напишите функцию, которая принимает массив и индекс элемента для удаления, а затем удаляет этот элемент из массива, модифицируя его
//
// Expected:
//
//     let numbers = [1, 2, 3, 4, 5];
// console.log(removeElement(numbers, 2)); // Выведет: [1, 2, 4, 5]

// let numbers = [1, 2, 3, 4, 5]
// const removeElement = (arr, index) => {
//     arr.splice(index,index-1)
//     return arr
//     }
// console.log(removeElement(numbers,2))

// 2) Создайте функцию, которая принимает массив, индекс и новый элемент, а затем вставляет новый элемент в указанную позицию массива
//
// Expected:
//
//
//     let numbers = [1, 2, 4, 5];
// console.log(insertElement(numbers, 2, 3)); // Выведет: [1, 2, 3, 4, 5]

// let numbers = [1, 2, 4, 5]
//
// const insertElement = (arr,index,newEL) => {
//   arr.splice(index,0, newEL)
//     return arr
// }
// console.log(insertElement(numbers, 2, 3))

//
// let number = [1, 2, 3, 4, 5];
//
// const sumArray = (array) => {
//     return array.reduce((el, currentCount)=> el+currentCount)
// }
// console.log(sumArray(number));

// 2)	Создайте функцию, которая принимает массив строк и возвращает сумму их длин, используя метод reduce
//
// Expected:
//
//
//     console.log(sumStringLengths(['apple', 'banana', 'cherry'])); // Выведет: 17

// const sumStringLengths = (array) => {
//     return array.reduce((acc, current)=> {
//         return acc + current.length
//     },0)
// }
//
// console.log(sumStringLengths(['apple', 'banana', 'cherry']))

// 3)	Напишите функцию, которая принимает массив, содержащий вложенные массивы чисел, и возвращает сумму всех чисел в этих массивах
//
// Expected:
//
//
//     console.log(
//         sumNestedArrays([
//             [1, 2],
//             [3, 4, 5],
//             [6, 7, 8, 9],
//         ])
//     ); // Выведет: 45

// const sumNestedArrays = (array) => {
//   return array.reduce((el, current)=>{
//      return el + current.reduce((a,b)=> a+b)
//   },0)
// }
//
//     console.log(
//         sumNestedArrays([
//             [1, 2],
//             [3, 4, 5],
//             [6, 7, 8, 9],
//         ])
//     ); // Выведет: 45


// 4)	Создайте функцию, которая принимает массив элементов и возвращает новый массив, содержащий только уникальные элементы, используя метод reduce.
//
//     Expected:
//
//
// const numbers = [1, 2, 3, 3, 4, 5, 5, 6];
// console.log(removeDuplicates(numbers)); // Выведет: [1, 2, 3, 4, 5, 6]


