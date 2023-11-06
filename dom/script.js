let title = document.createElement("title");
title.innerText = `DOM`;
document.head.append(title);

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data_custom");
// let myText = document.createTextNode("** Product One **");
// let myComment = document.createComment("This is Div");
// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data_test", "Testing");
// // Append Text to Element :
// myElement.appendChild(myText);
// // Append Comment to Element :
// myElement.prepend(myComment);
// document.body.appendChild(myElement);

// for (let i = 0; i < 100; i++) {
//   let mainDiv = document.createElement("div");
//   mainDiv.setAttribute("class", "product");
//   let h3Par = document.createElement("h3");
//   let detPar = document.createElement("p");
//   let h3Parp = document.createTextNode(`product ${i + 1}`);
//   let detParp = document.createTextNode("it is delecious and easy to get !!");
//   detPar.appendChild(detParp);
//   h3Par.appendChild(h3Parp);
//   h3Par.appendChild(detPar);
//   mainDiv.appendChild(h3Par);
//   document.body.appendChild(mainDiv);
// }

// let myBtn = document.getElementById("btn");
// myBtn.onclick = function () {
//   console.log(`clicked`);
// };
// window.onscroll = function (i) {
//   let scrolling = document.createElement("span");
//   scrolling.textContent = `\tScrolling\t`;
//   document.body.appendChild(scrolling);
// };
// ######################################################
//  I prefered to get the HTML element first ...
// because I need it for it's value and to
// add/remove class for it ..
// ######################################################
// document.forms[0].onsubmit = function (event) {
//   let userInput = document.querySelector("[name='username']");
//   let ageInput = document.querySelector("[name='age']");
//   userInput.removeAttribute("class");
//   ageInput.removeAttribute("class");
//   let userIsValid = true;
//   let ageIsValid = true;
//   if (userInput.value.length == 0 || userInput.value.length > 15) {
//     userIsValid = false;
//     console.log(userInput.value.length);
//     userInput.setAttribute("class", "wrong");
//   }
//   if (ageInput.value == 0 || ageInput.value > 10) {
//     ageIsValid = false;
//     ageInput.setAttribute("class", "wrong");
//   }
//   if (userIsValid == false || ageIsValid == false) {
//     event.preventDefault();
//   }
// };
// ######################################################
// ################  Event_Simulation  ##################
// let firstInput = document.getElementsByName("username")[0];
// let secondInput = document.getElementsByName("age")[0];
// window.onload = function () {
//   firstInput.focus();
// };

// secondInput.onblur = function () {
//   document.forms[0].submit();
// };
// ################  END Event_Simulation  ##############

// !!!!!!!!!!!!!
// access the element then edit
// let myDiv = document.getElementById("my-div");
// myDiv.style.fontStretch = "5px";
// myDiv.style.cssText = "font-weight:bold;opacity:0.8;";
// myDiv.style.removeProperty("color");
// myDiv.style.setProperty("font-size", "50px");
// // by editing style.css
// document.styleSheets[0].addRule("div");
// document.styleSheets[0].rules[0].style.setProperty("color", "blue");
// !!!!!!!!!!!!!
// ############# _Before__After__Prepend__Append__Remove
// let myDiv = document.getElementById("mydiv");
// let divP = document.createElement("p");
// divP.innerText = "HELLO from Js";
// myDiv.before(divP);
// myDiv.append(divP);
// ############# DOM_Traversing
// let myScript = document.querySelector("script");
// myScript.previousElementSibling.remove();
// myScript.parentElement.firstChild;
// myScript.parentElement.firstChild.nextElementSibling;
// myScript.parentElement.firstChild.nextElementSibling.remove();

// ############# Add event listner #############
// let myP = document.querySelector("p");
// // function one() {
// //   console.log("function one !!");
// // }
// // function two() {
// //   console.log("function two !!");
// // }
// // myP.addEventListener("click", function () {
// //   console.log("Message !!");
// // });
// // myP.addEventListener("click", one);
// // myP.addEventListener("click", two);
// // // myP.addEventListener("click", "String"); // error
// !!!!! My Practice ::
// myP.onclick = function hey() {
//   myP_cpy = myP.cloneNode(true);
//   myP_cpy.className = "cloned";
//   myP_cpy.id = "cloned";
//   myP.after(myP_cpy);
// };
// document.addEventListener("click", function (event) {
//   if (event.target.className === "cloned") {
//     let cpy = document.getElementById("cloned");
//     cpy.onclick = function () {
//       cpy.classList.toggle("cloned");
//     };
//   }
// });
// !!!!! My Practice ::
// ############# Add event listner #############

// ############# DOM Challenge ############# //
let myScript = document.scripts[0];
// Body_style :
document.body.style.cssText =
  "margin: 0px;background-color: rgb(236, 236, 236);";
// header :
let header = document.createElement("header");
header.setAttribute("class", "website-head");
header.style.cssText =
  "display: flex;padding: 20px;background-color: white;justify-content: space-between;align-items: center;";
// header_div :
let headerDiv = document.createElement("div");
headerDiv.classList.add("logo");
headerDiv.style.cssText =
  "font-weight: bold;color: rgb(35,169, 110); font-size: 26px;";
headerDiv.setAttribute("title", "Website Logo");
headerDiv.innerText = "Khaled";
header.appendChild(headerDiv);
// END_header_div
// header_menu :
let headerMenu = document.createElement("ul");
headerMenu.classList.add("menu");
headerMenu.style.cssText =
  "padding: 0px;margin: 0px;display: flex;list-style: none;";
// header_menu_list :
let list_vars = ["Home", "About", "Service", "Contact"];
for (let i = 0; i < list_vars.length; i++) {
  let list = document.createElement("li");
  list.style.padding = "5px";
  list.style.fontFamily = "Arial, Helvetica, sans-serif";
  list.textContent = list_vars[i];
  headerMenu.appendChild(list);
}
// END_header_menu_list
header.appendChild(headerMenu);
// END_header_menu
document.body.appendChild(header);
// END_header
// Content_div :
let contentDiv = document.createElement("div");
contentDiv.classList.add("content");
contentDiv.style.cssText =
  "display: flex;padding: 20px;flex-wrap: wrap;justify-content: center;gap: 20px;min-height: calc(100vh-142px);box-sizing: border-box;";
// Product_divs :
let product_divs_number = 15;
for (let i = 0; i < product_divs_number; i++) {
  let proDiv = document.createElement("div");
  let product = document.createTextNode("Product");
  let proNum = document.createElement("span");
  proDiv.classList.add("product");
  proDiv.style.cssText =
    "padding: 20px;background-color: rgb(255, 255, 255);border: 1px solid rgb(221, 221, 221);width: calc((100%-40px)/3);box-sizing: border-box;text-align: center;color: rgb(136, 136, 136);border-radius: 6px;";
  proNum.style.cssText =
    "font-size: 40px;color: black;font-weight: normal;display: block;margin-bottom: 10px;margin-top: 10px;";
  proNum.textContent = `${i + 1}`;
  proDiv.append(proNum);
  proDiv.append(product);
  contentDiv.appendChild(proDiv);
}
// END_Product_divs
document.body.appendChild(contentDiv);
// END_Content_div
// footer :
let footer = document.createElement("footer");
footer.setAttribute("class", "footer");
footer.style.cssText =
  "margin-bottom: 0%;background-color: rgb(35, 169, 110);font-size: 26px;text-align: center;padding: 20px;color: white;";
footer.textContent = "Copyright 2023";
document.body.appendChild(footer);
// END_footer
document.body.append(myScript);
// ############# End DOM Challenge ############# //
