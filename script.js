//task1



// function countOccurrences(a) {
//     let obj = {}
//   let cnt = 0
//   let rt = []
//   for (var i = 0; i < a.length; i++){
//      cnt = 0
   
//     for (let j = a.length-1; j >=0; j--){
//       if (a[j]==a[i]) {
//          cnt++
//       }
      
//     }
//     if (cnt == 1) {
//         obj[a[i]] = a[i]
//       }
//       obj[a[i]] = cnt
//     }
       
//     return obj

// }
// console.log(countOccurrences([2, "hello", 2,2, 3, 3, 3]));




//task2

// function findUniqueElements(a) {
//   const nepov = {};

//   return a.filter((obj) => {
//     if (nepov[obj.id]==null) {
//       nepov[obj.id] = true;
//       return true;
//     }
//     return false;
//   });
// }



// console.log(findUniqueElements([
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' },
//   { id: 1, name: 'Jim' },
//   { id: 3, name: 'Jim' },
// ]));





// task3
// function mergeArraysToObject(...a) {
//   let obj = {}
//   let kl = []
//   let val = []
//   let kl1 = 0
//   let val1 = 0
//   let cnt = 0
  
//   for (let i = 0; i < a.length; i++) {
//     if (i % 2 == 0) {
//       a[i].forEach((value, index, array) => {
// kl.push(value)
//        })
//     }
//    else if (i % 2 != 0) {
//       a[i].forEach((value, index, array) => {
//         val.push(value)
//       })
//     }

//   }
//   for (let i = 0; i < val.length; i++) {
//     obj[kl[i]] = val[i]
//   }
// return obj
// }
// console.log(mergeArraysToObject(['name', 'age'], ['John', 25], ['name2', 'age2'], ['John2', 35]));


// task4


// function countWords(a) {
//   let inputString = a.replaceAll('.','')
//   let words = inputString.split(' ');
//   let cntWord = {};

 
//   words.forEach((word)=> {
//     cntWord[word.toLowerCase()] = (cntWord[word.toLowerCase()] || 0) + 1;
//   });

//   return cntWord;
// }
// console.log(countWords('This is a test. This test is only a test.'));





// task5
// function filterObjectByValueType(a, b) {
//   let obj = {};

//   Object.keys(a).forEach((key) => {
//     if (typeof a[key] === b) {
//       obj[key] = a[key];
//     }
//   });

//   return obj;
// }


// console.log(filterObjectByValueType( { a: 1, b: 'hello', c: "bye", d: 5 }, 'string'));






//task6

// function averagePropertyValue(a, b) {

//   let sum = 0;

//   a.forEach((obj) => {
//     sum += obj[b]; 
//   });

//   return sum / a.length;
// }


// console.log(averagePropertyValue([{ a: 1, b: 2 },
//   { a: 3, b: 4 },
//   { a: 5, b: 6 }], "a"));


