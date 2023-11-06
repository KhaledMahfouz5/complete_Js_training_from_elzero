HTML_content = `<title>Functions</title><span>Functions</span></br></br>`;
document.write(HTML_content);

// console.log(welcome("hello", "Fadi", "Mahmoud"));

// function welcome(welcome = "welcome", fName = "name", lName = "name") {
//   function concatMsg() {
//     function FName() {
//       return `${fName} ${lName}`;
//     }
//     return `${welcome} ${FName()}`;
//   }
//   return concatMsg();
// }

// let formal = (name) => `Mr.${name}`;

// console.log(formal("Fadi"));

//####### Challenge ########### //
let names = function (...nameslist) {
  return `String [${nameslist.join("], [")}] => Done !`;
};
let namesArr = (...nameslist) => `String [${nameslist.join("], [")}] => Done !`;
console.log(namesArr("Osama", "Mohammed", "Ali", "Ibrahim"));
// #########################################
let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => one + two + nums[0];
let calc = function (one, two, ...nums) {
  return one + two + nums[0];
};
console.log(calc(myNumbers[2], myNumbers[0], myNumbers[1])); //80
//####### Challenge ########### //
