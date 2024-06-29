// push() pop() shift() unshift() -мутабельны



// ----------------------Добавляет в конец-----------------
// const names = ['Bob', 'Alex', 'Igor', 'Viktor']
// const result = names.push('Jena', 'Sveta')
// console.log(result)


// // ----------------------Удаляет последний-----------------
// const names = ['Bob', 'Alex', 'Igor', 'Viktor']
// const result = names.pop()
// console.log(result) //Viktor

// ----------------------Удаляет начало-----------------
// const names = ['Bob', 'Alex', 'Igor', 'Viktor']
// const result = names.shift()
// console.log(result) //Bob

// const arr = []
// const res = arr.shift()
// console.log(res)

// ----------------------Добавляет в  начало-----------------

// const names = ['Bob', 'Alex', 'Igor', 'Viktor']
// const result = names.unshift('Sveta')
// console.log(result) //Bob

// ----------------------reverse меняет , метод массива именно- (мутирует исходный массив)----------------

// const telephoneNumber = [1,2,3,4,5]
// const result = telephoneNumber.reverse()
// console.log(result) // [ 5, 4, 3, 2, 1 ]

// //toReversed()     Пока нет !!!!!
// const telephoneNumber = [1,2,3,4,5]
// const result = telephoneNumber.toReversed()
// console.log(result) // [ 5, 4, 3, 2, 1 ]

//split
// const telephoneNumber = 'Hello boy and girl'
// const result = telephoneNumber.split(' ',2)
// console.log(result) // [ 'H', 'e' ]
//1)
// const str = 'ab-cd-ef';
// const res = str.split('-')
// console.log(res) // [ 'ab', 'cd', 'ef' ]
// 2)
// const str = 'ab-cd-ef';
// const res = str.split('-',2)
// console.log(res) // [ 'ab', 'cd' ]
//3
// const str = 'ab-cd-ef';
// const res =str.split('')
// console.log(res) // [
// 'a', 'b', '-',
//     'c', 'd', '-',
//     'e', 'f'
// ]

//4
// const str = 'ab-cd-ef';
// const res = str.split()
// console.log(res) // [ 'ab-cd-ef' ]

//5 test exampl
// const str = 'New Test Value';
// const res = str.split(' ')
// console.log(res) //[ 'New', 'Test', 'Value' ]

//6
// const str = 'New Test Value';
// const res = str.split(' ', 1)
// console.log(res) //[ 'New' ]

// join
// const names = ['Bob', 'Alex', 'Igor', 'Viktor']
// const joinResult = names.join('-')
// console.log(joinResult)//Bob-Alex-Igor-Viktor

//2 если нет разделителя то будет ,
// const names = ['Bob', 'Alex', 'Igor', 'Viktor']
// const joinResult = names.join()
// console.log(joinResult)//Bob,Alex,Igor,Viktor

//3 если пустая строка
// const names = ['Bob', 'Alex', 'Igor', 'Viktor']
// const joinResult = names.join('')
// console.log(joinResult)//BobAlexIgorViktor


// Tech Interview popular question

// const telephoneNumber = '123-456-789'
// const res = telephoneNumber.split('')
// const res1 = res.reverse()
// const res2 = res1.join('')
// console.log(res2)

// concat объединять массивы  Имутабельный

//
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];
//
// const res = arr1.concat(arr2, arr3)
// console.log(res)//[ 1, 2, 3, 4, 5, 6 ]

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];
// const res = arr1.concat(arr2, arr3, 7, 8 ,9)
// console.log(res)//
//     // [
//     // 1, 2, 3, 4, 5,
//     //     6, 7, 8, 9
//     // ]

// //example
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const nestedArr = [['val1', 'val2']]
// const res = arr1.concat(arr2, nestedArr)
// // console.log(res)//[ 1, 2, 3, 4, [ 'val1', 'val2' ] ]
//
// //flat(либо уровень вложенности или )
// console.log(res.flat(Infinity))//[ 1, 2, 3, 4, 'val1', 'val2' ]



// //test task
// let usersFromAPI1 = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
// ];
//
// let usersFromAPI2 = [
//     { id: 3, name: 'Charlie' },
//     { id: 4, name: 'David' },
// ];
//
// let res = usersFromAPI1.concat(usersFromAPI2)
// console.log(res)
//     // [
//     // { id: 1, name: 'Alice' },
//     //     { id: 2, name: 'Bob' },
//     //     { id: 3, name: 'Charlie' },
//     //     { id: 4, name: 'David' }
//     // ]

// for each

// const arr = [1,2,3,4,5]
//
// let sum = 0
//
// const res = arr.forEach((el) => {
//     (sum +=el)
// })
// console.log(sum) //15

// let users = [
//     { id: 1, name: 'Alice', lastActive: '2023-06-01', isActive: false },
//     { id: 2, name: 'Bob', lastActive: '2024-05-25', isActive: false },
//     { id: 3, name: 'Charlie', lastActive: '2024-06-20', isActive: false },
// ];
//
// const oneMonthAgo = new Date()
//
// oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
//
// users.forEach((user) => {
//     let lastActivDate = new Date(user.lastActive)
//     if (lastActivDate > oneMonthAgo) {
//         user.isActive = true
//     }
// })
// console.log(users)

//indexOf - поиск элементов


// const arr = [1,2,3,4,5,6,3,6,3]
// const res = arr.indexOf(3)
// console.log(res)//

//
// const arr = [1,2,4]
// const res = arr.indexOf(5)
// console.log(res)//-1

//
// const arr = [1, 2, 3, 4, 5, 6, 3, 6, 3];
// const res = arr.indexOf(3,4)
// console.log(res)//4


// let allowedIPs = ['192.168.1.1', '192.168.1.2', '192.168.1.3'];
// let userIP = '192.168.1.4';
//
// if (allowedIPs.indexOf(userIP) !== -1) {
//     console.log('Access granted')
// }
// console.log('Access denied')

//LastindexOf

// const arr = [1, 2, 3, 4, 5, 6, 3, 6, 3]
// const res = arr.lastIndexOf(3)
// console.log(res)//8

// const arr = [1, 2, 3, 4, 5, 6, 3, 6, 3]
// const res = arr.lastIndexOf(3, -3)
// console.log(res)//6

// find

const arr = ['abc', 'derfg6', 'afgdggdsg', 'frtrtr']
const res = arr.find(el => {
    return el.length === 6
})
console.log(res) // derfg6

// let usersArr = [
//     { id: 1, name: 'Alice', email: 'alice@example.com' },
//     { id: 2, name: 'Bob', email: 'bob@example.com' },
//     { id: 3, name: 'Charlie', email: 'charlie@example.com' },
// ];
// const findUsers = (userID) => {
//   let user = usersArr.find(user => user.id === userID)
//     if (user) {
//         return user
//     } return `User with ${userID} not found`
// }
// console.log(findUsers(2)) // { id: 2, name: 'Bob', email: 'bob@example.com' }
// console.log(findUsers(6)) // User with 6 not found


//findIndex, findLastIndex

// const arr = [1,2,3,4,5]
// const res = arr.findIndex((el) => {
//     return el % 2 === 0
// })
// console.log(res) //1
//
// const arr2 = [1,2,3,4,2]
// const res2 = arr2.findLastIndex((el) => {
//     return el % 2 === 0
// })
// console.log(res2) //4


//includes
//
// let arr = [1, 2, 4, 5]
// const res = arr.includes(4)
// const res2 = arr.includes(10)
// console.log(res) // true
// console.log(res2) // false

//rtest value

// let userRoles = ['user', 'editor']
// let requiredRoles = ['admin', 'editor']
//
// const hasAccess = (userRoles, requiredRoles) => {
//   return requiredRoles.some(role => {
//        return userRoles.includes(role)
//   })
// }
//
// console.log(hasAccess(userRoles, requiredRoles))
// console.log(hasAccess(userRoles, ['admin']))
// console.log(hasAccess(userRoles, ['guest', 'admin']))

//filter

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const res = words.filter((el) => el.length > 6)
// console.log(res)

//sort() - мутабельный

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// words.sort()
// console.log(words) // [ 'destruction', 'elite', 'exuberant', 'present', 'spray' ]

// const numbers = [-100, 10, 25, 30, 45];
// numbers.sort()
// console.log(numbers)//[ -100, 10, 25, 30, 45 ]

//arr.sort()

// const numbers = [-100, 10, 25, 30, 45,44,1,2,11];
// const compareFunction = (a,b)=> {
//     // > 0 - вернем число a
//     // = 0 не меняем
//     // < 0 - вернем b
// }
// const res = numbers.sort((a,b)=>a-b) // по возрастанию
// const res2 = numbers.sort((a,b)=>b-a) // по убыванию
// console.log(res)
// console.log(res2)


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
//         name: 'alex',
//         isStudent: true,
//     },
// ];

// const res = users.sort((a, b) => a.name.localeCompare(b.name)) в приоритете нижний регистр
// console.log(res)//[
// { id: 3, name: 'alex', isStudent: true },
// { id: 2, name: 'Alex', isStudent: true },
// { id: 1, name: 'Bob', isStudent: true }
// ]

// const res = users.sort((a, b) => b.name.localeCompare(a.name)) //в приоритете верхний регистр
// console.log(res)
// //[
// //   { id: 1, name: 'Bob', isStudent: true },
// //   { id: 2, name: 'Alex', isStudent: true },
// //   { id: 3, name: 'alex', isStudent: true }
// // ]

//Polyfills

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
//         name: 'alex',
//         isStudent: true,
//     },
// ];

// const res = users.map(user => user.name)
// console.log(res)

// const newMap = (arr, callback) => {
//   const res = []
//     for (let i = 0; i < arr.length; i++) {
//         res.push(callback(arr[i]))
//     }
//     return res
// }
//
// const usersNameArr = newMap(users, (user)=>user.name)
// console.log(usersNameArr)

function oddOrEven(array) {
    let res = 0
    array.forEach((el)=>res+=el)
    if (res%2 === 0) {
        return  'even'
    } return "odd"
}

console.log(oddOrEven([0, 1, 4]))