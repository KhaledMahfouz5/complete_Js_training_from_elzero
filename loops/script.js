HTML_content = `<span>Loops</span></br></br>`;
document.write(HTML_content);

/*
let My_Friends = [
  1,
  "mohammed",
  0.2,
  "Fadi",
  "Adib",
  "Khaled",
  33.25,
  "Majed",
  true,
  "Ihsan",
];
let O_Nam = [];
// for (let i = My_Friends.length - 1; i >= 0; i--) {
//   console.log(`${My_Friends.length - i}.${My_Friends[i]}`);
// }

for (let i = 0; i < My_Friends.length; i++) {
  if (typeof My_Friends[i] === "string") O_Nam.push(My_Friends[i]);
}

for (i = 0; i < O_Nam.length; i++) {
  console.log(O_Nam[i]);
}*/

/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Blue"];
let date = [2020, 2021];

// for (let i = 0; i < products.length; i++) {
//   console.log("#".repeat(10));
//   console.log(`# ${products[i]}`);
//   for (let j = 0; j < colors.length; j++) {
//     console.log(` - ${colors[j]}`);
//     for(let k=0;k<date.length;k++)
//     {console.log(`    ** ${date[k]}`);}
//   }
// }

// for (let i = 0; i < products.length; i++) {
//   if (typeof products[i] !== "string") {
//     continue;
//   }
//   console.log(products[i]);
// }

main_loop: for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(10));
  console.log(`# ${products[i]}`);
  nested_loop: for (let j = 0; j < colors.length; j++) {
    console.log(` - ${colors[j]}`);
    if (colors[j] === "Green") {
      break main_loop;
    }
  }
}*/

/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor","Iphone"];

for (var i = 0; ; ) {
  document.write(`# ${products[i]} </br>`);
  i += 2;
  if (i >= products.length) break;
}

document.write(i);*/

/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];
let colors = ["Red", "Green", "Blue"];
let limt = 5;
document.write(`<h1>Show ${limt} Products</h1>`);
for (let i = 0; i < limt; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}]. ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<h5>[${"*".repeat(j + 1)}]. ${colors[j]}</h5>`);
  }
  document.write(`Summary : ` + `<h5>${colors.join(" / ")}</h5>`);
  document.write(`</div>`);
}*/

/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];
let index = 0;

while (index < products.length) {
  console.log(products[index]);
  index++;
}

index = 0;
do {
  console.log(products[index]);
  index++;
} while (false);*/

/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Salma"
];

let myAdmins_Ns = 0;
document.write(`<div>We Have ${myAdmins_Ns} Admins</div>`);
for (let i = myAdmins_Ns; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  document.write(`<div>`);
  document.write(`<p>The Admin For Team ${i + 1} Is ${myAdmins[i]}</p>`);
  document.write(`<h1>Team Members :</h1>`);
  for (let j = 0; j < myEmployees.length; j++)
    document.write(`<h3>- ${j + 1} ${myEmployees[j]}</h3>`);
  document.write(`</div><hr>`);
}
