HTML_content = `<title>Functions</title><span>Functions</span></br></br>`;
document.write(HTML_content);
showInfo();
// console.log(typeof console.log);

// function say_hello(name, age = 1) {
//   for (let i = 0; i < age; i++) {
//     console.log(`Hello ${name}`);
//   }
// }
// say_hello("Mahmoud", 15);

// function sumNums(override, ...nums) {
//   result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     result += nums[i];
//   }
//   console.log(`Sum is ${result}`);
// }

// sumNums(5, 4, 5, 2);
// say_hello("khaled");

//####### practice ########### //
function showInfo(us = "???", ag = "???", rt = 0, show = false, ...sk) {
  document.write(`<div>`);
  document.write(
    `<div><h1>User is ${us}</h1><span>age is ${ag}</span><h2>Rate is ${rt}</h2></div>`
  );
  if (show) {
    document.write(`<div>`);
    document.write(`<h3>Skills are</h3>`);
    for (let i = 0; i < sk.length; i++) {
      document.writeln(`<p>${i + 1}. ${sk[i]}</p>`);
    }
    document.write(`</div>`);
  }
  document.write(`<hr></div>`);
}

showInfo("Khaled", 19, 25, true, "hsadlkf", "sadf");
//####### practice ########### //
//
//
//
//
//####### Challenge ########### //
function showDetails(par1, par2, par3) {
  let theName = "Name";
  let theAge = 0;
  let available = false;
  if (typeof par1 === typeof "") {
    theName = par1;
    theAge = par2_par3(par2, par3).theAge;
    available = par2_par3(par2, par3).available;
  } else if (typeof par2 === typeof "") {
    theName = par2;
    theAge = par2_par3(par3, par1).theAge;
    available = par2_par3(par3, par1).available;
  } else {
    theName = par3;
    theAge = par2_par3(par1, par2).theAge;
    available = par2_par3(par1, par2).available;
    console.log(available);
  }
  if (!available) {
    available = "Not";
  } else {
    available = "";
  }
  document.write(
    `<div><p>Hello ${theName}, Age Is ${theAge} , You Are ${available} Available For Hire</p></div>`
  );
}
function par2_par3(par2, par3) {
  if (typeof par2 === typeof 0) {
    theAge = par2;
    available = par3;
    return { available, theAge };
  } else {
    available = par2;
    theAge = par3;
    return { theAge, available };
  }
}
//####### Challenge ########### //
let sum = function (...nums) {
  i = 0;
  result = 0;
  while (i < nums.length) {
    result += nums[i];
    i++;
  }
  return result;
};

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 15));
setTimeout(function () {
  var h2 = document.createElement("h2");
  h2.innerHTML = "King";
  document.body.appendChild(h2);
}, 2000);

document.getElementById("butt").onclick = function () {
  showDetails("Khaled", 15, false);
  showDetails(75, "dsaf", true);
  showDetails(35, true, "asfd");
};
