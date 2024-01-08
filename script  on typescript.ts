//task1

// function countOccurrences(a: any[]): Record<string | number, number> {
//   let obj: Record<string | number, number> = {};
//   let cnt = 0;

//   for (let i = 0; i < a.length; i++) {
//     cnt = 0;

//     for (let j = a.length - 1; j >= 0; j--) {
//       if (a[j] === a[i]) {
//         cnt++;
//       }
//     }

//     if (cnt === 1) {
//       obj[a[i]] = cnt;
//     } else {
//       obj[a[i]] = cnt;
//     }
//   }

//   return obj;
// }

// console.log(countOccurrences([2, "hello", 2, 2, 3, 3, 3]));

//task2
// interface MyObject {
//   id: number;
//   name: string;
// }

// function findUniqueElements(a: MyObject[]): MyObject[] {
//   const nepov: Record<number, boolean> = {};

//   return a.filter((obj) => {
//     if (nepov[obj.id] == null) {
//       nepov[obj.id] = true;
//       return true;
//     }
//     return false;
//   });
// }

// console.log(
//   findUniqueElements([
//     { id: 1, name: "John" },
//     { id: 2, name: "Jane" },
//     { id: 1, name: "Jim" },
//     { id: 3, name: "Jim" },
//   ])
// );

// task3
// function mergeArraysToObject(...a: (string | number)[][]): {
//   [key: string]: string | number;
// } {
//   let obj: { [key: string]: string | number } = {};
//   let kl: string[] = [];
//   let val: (string | number)[] = [];

//   for (let i = 0; i < a.length; i++) {
//     if (i % 2 === 0) {
//       a[i].forEach((value) => {
//         kl.push(value.toString());
//       });
//     } else {
//       a[i].forEach((value) => {
//         val.push(value);
//       });
//     }
//   }

//   for (let i = 0; i < val.length; i++) {
//     obj[kl[i]] = val[i];
//   }

//   return obj;
// }

// console.log(
//   mergeArraysToObject(
//     ["name", "age"],
//     ["John", 25],
//     ["name2", "age2"],
//     ["John2", 35]
//   )
// );

// task4

// function countWords(a: string): { [word: string]: number } {
//   let inputString = a.replace(".", "");
//   let words = inputString.split(" ");
//   let cntWord: { [word: string]: number } = {};

//   words.forEach((word) => {
//     cntWord[word.toLowerCase()] = (cntWord[word.toLowerCase()] || 0) + 1;
//   });

//   return cntWord;
// }

// console.log(countWords("This is a test This test is only a test"));

// task5
// function filterObjectByValueType<T>(
//   a: { [key: string]: T },
//   b: string
// ): { [key: string]: T } {
//   let obj: { [key: string]: T } = {};

//   Object.keys(a).forEach((key) => {
//     if (typeof a[key] === b) {
//       obj[key] = a[key];
//     }
//   });

//   return obj;
// }

// console.log(
//   filterObjectByValueType({ a: 1, b: "hello", c: "bye", d: 5 }, "string")
// );

//task6
// function averagePropertyValue<T>(a: { [key: string]: T }[], b: string): number {
//   let sum = 0;

//   a.forEach((obj) => {
//     sum += obj[b] as number;
//   });

//   return sum / a.length;
// }

// console.log(
//   averagePropertyValue(
//     [
//       { a: 1, b: 2 },
//       { a: 3, b: 4 },
//       { a: 5, b: 6 },
//     ],
//     "a"
//   )
// );

//Ина searching кардум

///В этой версии используется тип объекта { [key: string]: T } для представления объекта со
//строковыми ключами и значениями типа T. Функция теперь принимает объект с ключами типа string
// и значениями типа T, а второй параметр b ожидается, что это будет строка, представляющая тип
// для фильтрации. Тип возвращаемого значения также настраивается в соответствии с типом значения входного объекта.
