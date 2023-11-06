HTML_content = `<title>Functions</title><span>Functions</span></br></br>`;
document.write(HTML_content);

/*
let swappingCases = "khALed";
let invertNumbers = [1, -10, -20, 15, -30];
let ignoreNumbers = "K4hal5ed3443mh2fz2";

let sw = swappingCases
  .split("")
  .map((element) =>
    element === element.toUpperCase()
      ? element.toLowerCase()
      : element.toUpperCase()
  )
  .join("");

console.log(sw);

let inv = invertNumbers.map((element) => -element).join(" / ");
console.log(inv);

let ign = ignoreNumbers
  .split("")
  .map((element) => (isNaN(parseInt(element)) ? element : ""))
  .join("");

console.log(ign);

let duplicate = inv.split("/").map((element) => element * 2);
console.log(`duplicate : ${duplicate}`);

let getPositive = invertNumbers.filter((element) => element > 0);
console.log(`getPositive : ${getPositive}`);
*/

// let mix = "A13Bs22x";
// let mixm = mix
//   .split("")
//   .filter((element) => !isNaN(parseInt(element)))
//   .map((element) => element * element);
// console.log(mixm);

// ######## Reduce Higher Order Function ######## //
// let nums = [10, 20, 15, 30, 0];

// let sum = nums.reduce(function (acc, curr, index, arr) {
//   console.log(`Accumulator : ${acc}`);
//   console.log(`Current : ${curr}`);
//   console.log(`Current index : ${index}`);
//   console.log(`Array : ${arr}`);
//   console.log(acc + curr);
//   console.log(`#############################################`);
//   return acc + curr;
// }, 5);
// console.log(sum / nums.length);

// let theLongest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Pwppamanda"];
// let removeChars = ["K", "@", "@", "h", "a", "@", "@", "@", "l", "e", "d", "@"];

// let get_longest = theLongest.reduce((acc, curr) =>
//   acc.length > curr.length ? acc : curr
// );
// console.log(get_longest);

// let join = removeChars
//   .filter((element) => element != "@")
//   .reduce((acc, curr) => `${acc}${curr}`);
// // .join("") === .reduce((acc, curr) => `${acc}${curr}`)
// console.log(join);
// ######## Reduce Higher Order Function ######## //

// let allLiElements = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div");
// allLiElements.forEach(function (element) {
//   element.onclick = function () {
//     allLiElements.forEach(function (element) {
//       element.classList.remove("active");
//     });
//     this.classList.add("active");
//     allDivs.forEach(function (element) {
//       element.style.display = "none";
//     });
//   };
// });
// console.log(allLiElements);

// ########  Higher Order Functions Challenge  ######## //
// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// let solution = myString
//   .split("")
//   .filter((element) => isNaN(parseInt(element)) && element != ",")
//   .map((element) => (element == "_" ? " " : element))
//   .reduce((acc, curr, index, arr) =>
//     acc != curr && index != arr.length - true ? `${acc}${curr}` : acc
//   );
// console.log(solution); // Elzero Web School
// ########  Higher Order Functions Challenge  ######## //
