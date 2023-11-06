HTML_content = `<span>Arrays</span></br></br>`;
document.write(HTML_content);
/*
let My_Friends = ["mohammed", "Fadi", "Adib"];
for (let i = 0; i < 3; i++) {
  console.log(`Hello ${My_Friends[i]} 
 ${My_Friends[i].charAt(0).toUpperCase(0) || " "}`);
}
let Colleges = ["Ahmad", "Samer", ["Amer", "Osama"]];
console.log(`${Colleges[2][1]} Elzero`);
My_Friends[2] = ["Khaled", "Majed"];
console.log(`#################################`);
for (let i = 0; i < 3; i++) {
  console.log(`Hello ${My_Friends[i]} `);
}
console.log(`My_Friends Is Array ??  ${Array.isArray(My_Friends)}`);*/

/*
let My_Friends = ["mohammed", "Fadi", "Adib"];
console.log(My_Friends.length);
My_Friends[My_Friends.length] = "Khaled";
My_Friends.length = 3;
console.log(My_Friends);*/

/*
let My_Friends = ["mohammed", "Fadi", "Adib"];
console.log(My_Friends);
///////////////////////////
My_Friends.unshift("Khaled","Adel")
console.log(My_Friends);
///////////////////////////
My_Friends = ["mohammed", "Fadi", "Adib"];
My_Friends.push("Khaled","Adel")
console.log(My_Friends);
///////////////////////////
let first = My_Friends.shift();
console.log(My_Friends);
console.log(`The First name Is ${first}`);
///////////////////////////
let Last = My_Friends.pop();
console.log(My_Friends);
console.log(`The Last name Is ${Last}`);*/

/*
let My_Friends = ["mohammed", "Fadi", "Adib","mohammed"];
console.log(My_Friends.indexOf("mohammed"));
console.log(My_Friends.lastIndexOf("mohammed"));*/

/*
let Array1 = [10, true, false, null, "Ahmad", 9, 54, "10", "Kareem"];
console.log(Array1);
console.log(Array1.sort());
console.log(Array1.reverse());*/

/*
let My_Friends = ["mohammed", "Fadi", "Adib", "Khaled", "majed", "Sultan"];
console.log(My_Friends.slice(0, 3));
console.log(My_Friends.slice(-5, 4));
console.log(My_Friends.slice(0, -1));
console.log(My_Friends);
// slice method does not change the array itself
My_Friends.splice(1, 2, "Sameer", "Samara");
console.log(My_Friends);
//splice method adds and removes from array */

/*
let arr1 = ["one", "three", "five"];
let arr2 = ["Two", "Four", "six"];
let arr3 = ["Zreo", "Infinity"];
let Every_001 = arr1.concat(arr2, arr3);
console.log(Every_001);
// Concat method => Return A New Array
console.log(Every_001.join(" / ").toUpperCase());
// join method => convert array To String */

/*
// arrays challenge
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.splice(my.indexOf("Gamal"));
console.log(my.reverse());        //        ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(-counter,counter));
console.log(`${my[my.indexOf("Elham")].charAt(zero)}${my[my.indexOf("Elham")].charAt(my.indexOf("Elham"))}${my[my.indexOf("Mazero")].slice(my.indexOf("Mazero"))}`);*/
