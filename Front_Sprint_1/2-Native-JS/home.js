// let fruits = ['apple', 'banana', 'orange'];
// fruits.push('me','yo')
// console.log(fruits)



// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// let res = users.pop()
// console.log(res)
// console.log(users)


// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// let res = users.shift()
// console.log(res)
// console.log(users)

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// users.unshift('yo',me = [1,3,'me'])
// console.log(users)


// const str = 'JavaScript is awesome';
// let res = str.split(' ').reverse().join(' ')
// console.log(res)

// const mergeArrays = (Array1,Array2) => {
//     return  Array1.concat(Array2)
// }
// console.log(mergeArrays([1, 2, 3], [4, 5, 6]))

// const flattenArray = (Array) => {
//     return Array.flat(Infinity)
// }
// console.log(flattenArray([1, [2, 3], [[4], [5, 6]]]));

// let firstNumberGreaterThan25 = ['kiwi', 'orange']
// const findFirstElement = firstNumberGreaterThan25.find(el=> {
//     return el[0] === 'o'
// })
// console.log(findFirstElement)

// const Array =[1, 2, 3, 4, 5]
// const checkElement = (Array, el) => {
//     if (Array.includes(el) !== true) {
//         return false
//     } else {
//         return true
//     }
// }
// console.log(checkElement(Array, 2))

// const Array = [10, 20, 30, 40, 50]
// const filterGreaterThan = (Array, el) => {
//   return Array.filter(count=> {
//       return count > el
//   })
// }
// console.log(filterGreaterThan(Array, 25))

// let people = [
//     { name: 'John', age: 30 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 35 },
// ];

// let numbers = [5, 2, 8, 1, 4];
// const res = numbers.sort((a,b) => b-a)
// console.log(res)

// let data = [
//     { value: 1, name: 'Option 1' },
//     { value: 2, name: 'Option 2' },
//     { value: 3, name: 'Option 3' },
// ];
// let res = data.map(el=> {
//     return {
//         value: el.value,
//         label: el.name
//     }
// })
// console.log(res)

// let products = [
//     { id: 1, name: 'Apple', price: 1.99 },
//     { id: 2, name: 'Banana', price: 0.99 },
//     { id: 3, name: 'Orange', price: 2.49 },
// ];

// let res = products.map(el=> {
//     return {
//         id: el.id,
//         name: el.name,
//         price: el.price,
//         discountPrice:el.price * 0.9
//     }
// })
// console.log(res)

// let res = products.map(el=> {
//    el.discountPrice = el.price * 0.9
//    return el
// })
// console.log(res)

// const isPalindrome = (str) => {
//   return str === str.split('').reverse().join('')
//
// }
// console.log(isPalindrome('level'));

const persons = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
];
const sortByProperty = (el) => {
    const result = el.sort((a,b)=>a.age-b.age)
    return result
}
console.log(sortByProperty(persons))