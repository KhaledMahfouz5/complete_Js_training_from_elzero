HTML_content = `<span>conditions</span></br></br>`;
document.write(HTML_content);

/*console.log(10 == "10");//compare value only
console.log(-100 == "-100");//compare value only
console.log(10 != "100");//compare value only
console.log(10 === "10");//compare value + Type
console.log(10 !== "10");//compare value + Type
// === Identical
// !== Not Identical */

/*let price = 60_000;
let discount = false;
let Amount = 25;
////
let country = "sy";
let age = 5;
////
console.log(`Price Is ${price}`);
////
if (country === "sy") {
  discount = true;
} else if (age > 15) {
  discount = true;
} else {
  discount = false;
}
if (discount === true) {
  price = price - (price * Amount) / 100;
  console.log(`After Discount ${price} ... ${Amount}% Discount`);
}
else
{console.log(`No Discount !!!`)}*/

/*
// conditional (Ternary) Operator
let price = 60_000;
let discount = true;
let Amount = 25;
console.log(`Price Is ${price}`);
discount === true ? price = price - (price * Amount) / 100 && console.log(`After Discount ${price} ... ${Amount}% Discount`) : console.log(`No Discount !!!`);*/

/*
// conditional (Ternary) Operator
let gender = "Male";
let result = gender === "Male" ? "Mr" : "Mrs";
console.log(result);*/

/*
// conditional (Ternary) Operator
let age = 5554;
//age=Math.random(age);
console.log(age);
age < 20
  ? document.write(`Range 001`)
  : age >= 20 && age < 60
  ? document.write(`Range 002`)
  : age > 60 && age < 100
  ? document.write(`Range 003`)
  : document.write(`Range 004`);*/

/*
  let price=0;
  console.log(`The Price Is ${price || "Unknown"}`);
  console.log(`The Price Is ${price ?? "Unknown"}`)
  //to know falsy value
  console.log(Boolean(100));
  console.log(Boolean(0));
  console.log(Boolean(""));
  console.log(Boolean(null));*/

/*
// Challenge : conditional (Ternary) Operator
let a = "!";
a < 10
    ? console.log(10)
    : a >= 10 && a <= 40
        ? console.log("10 To 40")
        : a > 40
            ? console.log("More Than 40")
            : console.log("Opps !!!");*/

/*
  let sentence="Elzero Web School";
  if(sentence.includes("W"))
  {document.write("  Good  ")}
  if(String(sentence.length*2)==="34")
  {document.write("  Good  ")}*/

/*
// Switch Statement
let day = 0;
switch (day) {
  case 0:
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  case 4:
    console.log("Four");
    break;
  case 5:
    console.log("Five");
    break;
  case 6:
    console.log("Six");
    break;
  case 7:
    console.log("Seven");
    break;
  default:
    console.log("Opps !!");
}*/

/*
//Switch Challenge
let job = "Manager";
let salary = 0;
switch(job)
{
    case "Manager":
        salary=8_000;
        break;
    case "IT":
    case "Support":
        salary=6_000;
        break;
    case "Dev":
    case "Designer":
        salary=7_000;
        break;
    default:
        salary=2_000;
}
let result=`<h2>${job}</h2><h3>${salary}</h3>`
document.write(result);*/


let Holidays = 0;
let salary = 0;
Holidays === 0
  ? (salary = 5_000)
  : Holidays === 1 || Holidays === 2
  ? (salary = 3_000)
  : (salary = 1_000);
document.write(`Salary Is ${salary}`);
