const arr = ['First', 'Second', 'Third']
for (const e of arr) {
    console.log(e);
}

// let xArr = arr[Symbol.iterator]();
// console.log(xArr.next().value)
// xArr.next()
// xArr.next()



// arr[Symbol.iterator] = function () {
//     let i = 0;
//     let arr = this;
//     return {
//         next: function () {
//             if (i >= arr.length) {
//                 return { done: true };
//             } else {
//                 const value = `${arr[i]} | ADD-STRING`;
//                 i++;
//                 return { value, done: false };
//             }
//         },
//         current: function () {
//             return
//         }
//     };
// }

// for (const e of arr) console.log(e);
