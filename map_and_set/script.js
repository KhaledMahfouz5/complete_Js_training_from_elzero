let gTitle = document.createElement("title");
gTitle.innerText = `map_and_set`;
document.head.append(gTitle);

// Set_Data_Types_And_Methods
// let myData = [1, 1, 1, 2, 2, 3, 3];
// let myUniqueData = new Set(myData).add(4);
// console.log(myUniqueData.add(5));
// console.log(myUniqueData.size);
// console.log(myUniqueData.delete(5));
// console.log(myUniqueData.delete(50));
// console.log(myUniqueData.size);
// Set_Data_Types_And_Methods

// Set_vs_WeakSet_And_Garbage_Collector
// // SET ::
// let mySet = new Set([1, 1, 1, 2, 2, 3, "A", "A"]);
// console.log(mySet);
// let iterator = mySet.values(); // iterator = mySet.keys(); // Set.keys is Alias for Set.values
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().done);
// mySet.forEach((ele) => {
//   console.log(ele);
// });
// console.log("#".repeat(20));
// // WEAK_SET ::
// let myWs = new WeakSet([{ A: 1, B: 2 }]);
// console.log(myWs);
// /// search google : WeakSet UseCases .
// Set_vs_WeakSet_And_Garbage_Collector

// Map_Data_Type_Vs_Object
// let myObject = {};
// let myEmptyObject = Object.create(null);
// let myMap = new Map();
// console.log(myObject);
// console.log(myEmptyObject);
// console.log(myMap);
// let myNewObject = {
//   10: "Number",
//   "10": "String",
// };
// console.log(myNewObject[10]);
// let myNewMap = new Map();
// myNewMap.set(10, "Number");
// myNewMap.set("10", "String");
// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));
// Map_Data_Type_Vs_Object

// Map_Methods
// let myMap = new Map([
//   ["Name", "Khaled"],
//   [19, "Age"],
// ]);
// myMap.set(function five() {
//   return 5;
// }, "Function");
// myMap.set(false, "Boolean");
// console.log(myMap.get(19));
// console.log(myMap.get(false));
// console.log(myMap.delete(19)); // Successfully deleted the key
// console.log(myMap.has(false));
// console.log(myMap.size);
// myMap.clear();
// Map_Methods

// Map_Vs_WeakMap
// let mapUser = { theName: "Khaled", theAge: 19 };
// let myMap = new Map();
// let myWmap = new WeakMap();
// myMap.set(mapUser, "Object");
// myWmap.set(mapUser, "Object");
// // difference :
// console.log(myMap);
// console.log(myWmap);
// mapUser = null;
// console.log(myMap);
// console.log(myWmap);
// Map_Vs_WeakMap

// Array.from_Method
// console.log(Array.from("Khaled"));
// console.log(
//   Array.from("12345", function (num) {
//     return +num + +num;
//   })
// );
// console.log(Array.from("456", (n) => +n * 2));
// let myArray = [1, 2, 3, 4, 1, 2, 3];
// console.log(Array.from(new Set(myArray)));
// console.log([...new Set(myArray)]);
// function af() {
//   return Array.from(arguments);
// }
// console.log(af("Muhammad", "Khaled", 19, true, {}));
// Array.from_Method

// Array.copyWithin_Method
// let myArray = [10, 20, 30, 40, 50, "A", "B"];
// myArray.copyWithin(3);
// console.log(myArray); // Array(7) [ 10, 20, 30, 10, 20, 30, 40 ]
// myArray.copyWithin(4, -1, undefined);
// console.log(myArray);
// myArray.copyWithin(1, -2);
// console.log(myArray);
// myArray.copyWithin(1, -2, -1);
// console.log(myArray);
// Array.copyWithin_Method

// Array.some_Method
// let nums = [1, 2, 10, 4, 5, 6, 7, 8, 9];
// let check = nums.some((ele, i) => {
//   console.log(`Testing.${i + 1}`);
//   return ele > 5;
// });
// let check = nums.some(function (ele) {
//   return ele > this;
// }, 10);
// let ch = nums.some((ele) => ele > 5);
// console.log(check);
// function checkValue(arr, val) {
//   return arr.some((ele) => ele === val);
// }
// console.log(checkValue(nums, 5));
// console.log(checkValue(nums, 50));
// let range = { min: 10, max: 20 };
// let checkNumberInRange = nums.some(
//   (ele) => ele >= range.min && ele <= range.max
// );
// console.log(checkNumberInRange);
// Array.some_Method

// Array.every_Method
// const locations = {
//   20: "Place 1",
//   30: "Place 2",
//   10: "Place 3",
//   40: "Place 4",
// };
// let locArray = Object.keys(locations).map((e) => +e);
// let mainLocations = 15;
// let chk = locArray.every((e) => e > mainLocations);
// console.log(chk);
// Array.every_Method

// Spread_Syntax_And_Use_Cases
// let name = "Khaled";
// console.log(name);
// console.log([...name]);
// //
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// console.log([...arr1, ...arr2, 7]);
// //
// let allFriends = ["Hamza", "Ziad", "Ahmad"];
// let thisYearFriends = ["Sami", "Osama"];
// allFriends.push(...thisYearFriends);
// console.log(allFriends);
// //
// let nums = [1, 50, 800, -20, 60];
// console.log(Math.max(...nums));
// //
// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };
// console.log({ ...obj1, ...obj2, e: 5 });
// Spread_Syntax_And_Use_Cases

// Map_And_Set_Challenge
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// console.log([...n1, ...n2].length * Math.max(...n1)); // 210
// Map_And_Set_Challenge
