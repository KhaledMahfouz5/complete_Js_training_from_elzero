let title = document.createElement("title");
title.innerText = `BOM`;
document.head.append(title);

// setTimeout_and_clearTimeout ]
/* HTML File :
<!-- <form method="dialog">
<input type="text" placeholder="name" id="name"/>
<input type="number" placeholder="age" id="age"/>
<input type="number" placeholder="grade" id="grade"/>
<input type="submit"/>
</form>  -->
*/
// setTimeout(
//   (age, name) => {
//     console.log(`Hello ${name} ... Your Age Is : ${age}`);
//   },
//   3000,
//   19,
//   "Khaled"
// );
// function welcome(name, age, grade) {
//   console.log(`Welcome ${name} \nage is ${age} \nGrade is ${grade}`);
// }
// let form = document.forms[0];
// let btn = document.createElement("button");
// btn.style.padding = "5px";
// btn.style.margin = "5px";
// btn.textContent = "Stop Operation";
// form.onsubmit = function () {
//   document.body.appendChild(btn);
//   let name = document.getElementById("name").value;
//   let age = document.getElementById("age").value;
//   let grade = document.getElementById("grade").value;
//   time = setTimeout(welcome, 3000, name, age, grade);
//   btn.onclick = function () {
//     clearTimeout(time);
//   };
// };
// setTimeout_and_clearTimeout

// setInterval_and_clearInterval
/* HTML file :
  <div>5</div> 
  <form method="dialog">
    <input type="number" placeholder="start" id="start"/>
    <input type="number" placeholder="end" id="end"/>
    <input type="submit"/>
  </form>
 */
// let form = document.forms[0];
// let myDiv = document.querySelector("div");
// myDiv.style.textAlign = "center";
// document.body.style.height = "500px";
// myDiv.style.fontSize = "500px";
// form.onsubmit = function () {
//   let start = document.getElementById("start").value;
//   let end = document.getElementById("end").value;
//   let counter = setInterval(countDown, 1000);
//   myDiv.innerHTML = start;
//   function countDown() {
//     if (myDiv.innerHTML === end) {
//       clearTimeout(counter);
//     } else {
//       myDiv.innerHTML -= 1;
//     }
//   }
// };
// setInterval_and_clearInterval

// ## Window_Location_Object
/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace() // Removes the current page from the session history and navigates to the given URL.
  --- assign() // Navigates to the given URL. <=> as you type : location.href="link";
*/
// console.log(location);
// console.log(location.href);
// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.protocol);
// console.log(location.hash);
// ## Window_Location_Object

// ## Window_Open_And_Close
/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/
// setTimeout(function () {
//   window.open("", "_self", "", false);
// }, 2000);

// setTimeout(function () {
//   window.open(
//     "https://google.com",
//     "_blank",
//     "width=400,height=400,left=200,top=10"
//   );
// }, 2000);
// ## Window_Open_And_Close

// ## Window_History_Object
/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/
// console.log(history);
// ## Window_History_Object

// ## Scroll__ScrollTo__ScrollBy__Focus__Print__Stop
/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options) // scroll to specific Coordinates
  - scroll(x, y || Options) // as scrollTo ... difference in supported browsers
  - scrollBy(x, y || Options) // edit the Coordinates by increment/decrement with entered value
*/
// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");
// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });
// ## Scroll__ScrollTo__ScrollBy__Focus__Print__Stop

// ## Scroll_To_Top_Using_Y_Practice
/*  <style>
    body {
      height: 5000px;
    }
    .btn {
	color: green;
	background-color: gray;
	border: none;
	padding: 10px;
	font-size: medium;
	border-radius: 5px;
	font-family: revert;
  font-weight: bold;
	position: fixed;
	bottom: 20px;
	right: 25px;
	display: none;
  cursor: pointer;
}
  </style>
  <button class="btn">Up</button>
 */
// let btn = document.querySelector(".btn");
// btn.onclick = function () {
//   window.scrollTo({
//     left: 0,
//     top: 0,
//     behavior: "smooth",
//   });
// };
// window.onscroll = function () {
//   if (scrollY >= 700) {
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none";
//   }
// };
// ## Scroll_To_Top_Using_Y_Practice

// Local_Storage
// // Set
// window.localStorage.setItem("color", "red");
// window.localStorage.fontWeight = "bold";
// window.localStorage["Khaled mhfz"] = "name";
// // Get
// console.log(window.localStorage.getItem("Khaled mhfz"));
// console.log(window.localStorage.fontWeight);
// // Set color in page
// document.body.style.backgroundColor = window.localStorage.color;
// // Remove Specific Item
// window.localStorage.removeItem("fontWeight");
// // Get Key
// for (let i = 0; i < window.localStorage.length; i++) {
//   console.log(
//     `${window.localStorage.key(i)} : ${window.localStorage.getItem(
//       window.localStorage.key(i)
//     )}`
//   );
// }
// console.log();
// // Remove All
// let btn = document.createElement("button");
// btn.innerText = " CLEAR ";
// btn.onclick = function () {
//   window.localStorage.clear();
// };
// document.body.appendChild(btn);
// Local_Storage

// Local_Storage_Color_Application_Practice
/* HTML/CSS content :
  <style>
    body {
      background-color: azure;
    }
    ul{
padding: 0%;
margin: 0%;
background-color: gainsboro;
margin: 20px auto;
padding: 20px;
width: 400px;
list-style: none;
display: flex;
justify-content:space-around;
    }
    ul li{
      width: 60px;
      height: 60px;
      border: 2px solid transparent;
      opacity: 0.5;
      cursor: pointer;
      transition: 0.3s;
    }
    ul li.active,
    ul li:hover{
      opacity: 1;
      border-radius: 15px;
      transition: 0.5s;
    }
    ul li:first-child{
      background-color: red;
    }
    ul li:nth-child(2){
      background-color: green;
    }
    ul li:nth-child(3){
      background-color: blue;
    }
    ul li:nth-child(4){
      background-color: black;
    }
    .experiment {
      background-color: red;
      border-radius: 40px;
      width: 600px;
      height: 300px;
      margin: 20px auto;
      transition : "0.5s";
    }
  </style>
  <ul id="menu">
    <li class="active" data-color="red"></li>
    <li data-color="green"></li>
    <li data-color="blue"></li>
    <li data-color="black"></li>
  </ul>
<div class="experiment" id="exp"></div>
 */
//             MY Solution :
// let menu = document.getElementById("menu");
// let children = menu.querySelectorAll("li");
// let exp = document.getElementById("exp");
// if (window.localStorage.getItem("color")) {
//   let localStorageIndex = window.localStorage.getItem("index");
//   let localStorageColor = window.localStorage.getItem("color");
//   // set active by localStorageIndex
//   children.forEach(function (element) {
//     element.classList.remove("active");
//   });
//   children[localStorageIndex].classList.add("active");
//   // set localStorageColor
//   exp.style.backgroundColor = localStorageColor;
//   exp.style.transition = "0.5s";
// }
// // setsetColor onclick
// function setColor(localStorageColor) {
//   exp.style.backgroundColor = localStorageColor;
//   children.forEach(function (element) {
//     element.classList.remove("active");
//   });
// }
// // setsetColor for every li element
// menu.children[0].onclick = function (event) {
//   let currentLi = this;
//   liOnclick(currentLi, event, 0);
// };
// menu.children[1].onclick = function (event) {
//   let currentLi = this;
//   liOnclick(currentLi, event, 1);
// };
// menu.children[2].onclick = function (event) {
//   let currentLi = this;
//   liOnclick(currentLi, event, 2);
// };
// menu.children[3].onclick = function (event) {
//   let currentLi = this;
//   liOnclick(currentLi, event, 3);
// };
// function liOnclick(currentLi, event, index) {
//   let colorChoice = event.target.getAttribute("data-color");
//   window.localStorage.setItem("color", colorChoice);
//   window.localStorage.setItem("index", index);
//   setColor(colorChoice);
//   currentLi.classList.add("active");
// }
//             Elzero Solution :
// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");
// if (window.localStorage.getItem("color")) {
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   document
//     .querySelector(`[data-color='${window.localStorage.getItem("color")}']`)
//     .classList.add("active");
// }
// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     // console.log(e.currentTarget);
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     exp.style.backgroundColor = window.localStorage.getItem("color");
//   });
// });
// Local_Storage_Color_Application_Practice

// Session_Storage_And_Use_Cases
/* Session Storage is like the Local Storage 
But it doesn't save data when you 
close window or open new window
with the same url ... 
it doesn't save data when you 
open a new session */
// Session_Storage_And_Use_Cases

// ## BOM_Challenge ## //
/*HTML :
in Head :
  <link href="style.css" rel="styleSheet">
in body :
  <div class="container">
    <div class="form">
      <input type="text" class="input" id="inputField"/>
      <input type="submit" class="add" id="addBtn" value="Add Task"/>
    </div>
    <div class="tasks" id="tasksDiv"></div>
  </div>
/*CSS :
.container {
    align-items: center;
  }
  .form{
    display: flex;
    align-items: center;
    background-color: #ddd;
    border-radius: 5px;
    justify-content: space-around;
    padding: 20px ;
    margin: 20px ;
  }
  .input{
    width: 80%;
    padding: 10px ;
    margin: 0% ;
    border-radius: 5px;
    border: 1px solid #afadadb0;
    background-color: #ffffffd3;
    text-align: center;
  }
  .input:focus{
    background-color: rgba(255, 255, 255, 0.5);
  }
  .add{
    background-color: #f84235;
    border-radius: 5px;
    color: wheat;
    padding: 10px;
    border: none;
    cursor:pointer;
    margin: 0%;
  }
  .add:active{
    background-color: hsl(4, 93%, 50%);
  }
  .del{
    background-color: red;
    border-radius: 5px;
    color: wheat;
    padding: 10px;
    border: none;
    cursor:pointer;
    margin: 0%;
  }
  .del:active{
    background-color: hsl(0, 100%, 45%);
  }
  .tasks{
    display: block;
    background-color: #ddd;
    border-radius: 5px;
    padding: 20px ;
    margin: 20px ;
  }
  .task_contain{
    padding: 20px ;
    justify-content: space-evenly;
    display: flex;
    width:100%;
  }
  .tasktext{
    opacity: 0.6;
    width: 60%;
    padding: 10px ;
    margin: 0% ;
    border-radius: 5px;
    border: 1px solid #afadadb0;
    background-color: #ffffffd3;
    text-align: center;
  }
  .tasktext:hover{
    opacity: 1;
    transition: 0.5s;
  }
 */
// define main elements :
let mainBtn = document.getElementById("addBtn");
let mainInputField = document.getElementById("inputField");
let tasksStorage = [];

function delNote(event) {
  let tasksStorage = JSON.parse(window.localStorage.getItem("tasks"));
  let tasks = tasksStorage
    .map((element) => {
      if (event.target.previousElementSibling.innerText != element.title) {
        return element;
      }
    })
    .filter((ele) => ele != undefined);
  console.log(tasks);
  tasks = JSON.stringify(tasks);
  window.localStorage.setItem("tasks", tasks);
  event.target.parentElement.remove();
}
function makeTaskHtml(textValue) {
  let tasksDiv = document.getElementById("tasksDiv");
  let task = document.createElement("div");
  task.classList.add("task_contain");
  let taskText = document.createElement("h3");
  taskText.classList.add("tasktext");
  taskText.innerText = textValue;
  let delBtn = document.createElement("input");
  delBtn.type = "submit";
  delBtn.classList.add("del");
  delBtn.value = "Delete";
  task.appendChild(taskText);
  task.appendChild(delBtn);
  tasksDiv.prepend(task);
  delBtn.onclick = function (event) {
    delNote(event);
  };
}

if (window.localStorage.getItem("tasks")) {
  tasksStorage = JSON.parse(window.localStorage.getItem("tasks"));

  tasksStorage.forEach((element) => {
    makeTaskHtml(element.title);
  });
}

mainBtn.onclick = function () {
  if (mainInputField.value != "") {
    let note = {
      title: mainInputField.value,
      id: Math.ceil(Math.random() * 10000),
    };
    tasksStorage.push(note);
    let tasks = JSON.stringify(tasksStorage);
    window.localStorage.setItem("tasks", tasks);
    makeTaskHtml(mainInputField.value);
    mainInputField.value = "";
  }
};

// when button is clicked :
// [1] : make task div with class task_contain
// [2] : add h3 element with class tasktext
// [3] : set the innerText of h3 to tempNote
// [4] : add title to localStorageNotes Array of objects with random id an title => Using js_json_stringify and js_json_parse
// [5] : make input type="submit" class="del" id="delBtn" value="Delete"
//      when delBtn is clicked :
//     [1] : remove the note object with the relevant id
// [6] : append chidren to .task_contain div then prepend the div itself in tasksDiv
// ## BOM_Challenge ## //
