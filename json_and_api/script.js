let gTitle = document.createElement("title");
gTitle.innerText = `JSON`;
document.head.append(gTitle);

// Call_Stack_And_Web_API
// setTimeout(() => {
//   console.log("Times out");
// }, 0);
// function one() {
//   console.log(`One`);
// }
// function two() {
//   one();
//   console.log(`Two`);
// }
// function three() {
//   two();
//   console.log(`Three`);
// }
// three();
// Call_Stack_And_Web_API

// Event_Loop_And_Callback_Queue
// Event_Loop_And_Callback_Queue

// What_Is_AJAX_And_Network_Information
// let req = new XMLHttpRequest();
// console.log(req);
// What_Is_AJAX_And_Network_Information

// Request_And_Response_From_Real_API
/*HTML :
  <style>
    .input-container {
      display: flex;
      justify-content:center;
      padding: 5px;
      margin: 5px;
    }
    .title{
      display: flex;
      justify-content: center;
      background-color: gray;
      border-radius: 10px;
    }
    .repo-container{
      background-color: blue;
      display: block;
      justify-content: center;
      text-align: left;
      padding: 15px;
      margin: 15px;
    }
    .repo{
      padding: 10px ;
      margin: 10px  ;
      background-color: rgb(5, 4, 82);
    }
  </style>
  <div class="input-container">
    <input type="text" id="name" style="padding: 5px;margin-right: 5px;" placeholder="Github userName"/>
    <button id="mainBtn" style="padding: 10px;margin-left: 5px;">Fetch My API</button>
  </div>
  <div class="title"><h3>Users On Github :</h3></div>
  <div id="repoContainer" class="repo-container"></div>
*/
// let btn = document.getElementById("mainBtn");
// btn.onclick = function () {
//   let myRequest = new XMLHttpRequest();
//   let name = document.getElementById("name").value;
//   if (name == "") {
//     return false;
//   }
//   myRequest.open("GET", `https://api.github.com/users/${name}/repos`);
//   myRequest.send();
//   myRequest.onreadystatechange = function () {
//     if (this.status === 200 && this.readyState === 4) {
//       let response = this.responseText;
//       repoData = JSON.parse(response);
//       let containDiv = document.getElementById("repoContainer");
//       let userName = document.createElement("div");
//       userName.classList.add("repo");
//       userName.style.textAlign = "center";
//       userName.style.backgroundColor = "rgb(126, 16, 16)";
//       userName.innerText = `Repos For User : ${repoData[0].owner.login}`;
//       containDiv.appendChild(userName);
//       for (let i = 0; i < repoData.length; i++) {
//         let spec = document.createElement("div");
//         spec.classList.add("repo");
//         spec.innerText = `-  ${repoData[i].name}`;
//         containDiv.appendChild(spec);
//       }
//       let doneMessage = document.createElement("div");
//       doneMessage.classList.add("repo");
//       doneMessage.style.textAlign = "center";
//       doneMessage.innerText = `Successfully Fetched ${repoData.length} repos`;
//       containDiv.appendChild(doneMessage);
//     }
//   };
// };
// Request_And_Response_From_Real_API

// Callback_Hell_Or_Pyramid_Of_Doom
// Callback_Hell_Or_Pyramid_Of_Doom

// Promise_Intro_And_Syntax
/*HTML : 
    <div style="display: flex; justify-content: center">
      <input type="checkbox" id="isConnected" name="conn" checked/>
      <label for="conn" vaule> Is Connected ?? </label>
      <button id="btn" style="margin-left: 20px;">Give Result</button>
    </div>
*/
// let btn = document.getElementById("btn");
// btn.onclick = function () {
//   let myPromise = new Promise((onResolved, onRejected) => {
//     let isConnected = document.getElementById("isConnected");
//     if (isConnected.checked) {
//       onResolved("Connected Successfully");
//     } else {
//       onRejected(Error("Faild To Connect"));
//     }
//   }).then(
//     (success) => {
//       console.log(success);
//     },
//     (fail) => {
//       console.log(fail);
//     }
//   );
// };
// Promise_Intro_And_Syntax

// Promise_-_Then__Catch_And_Finally
// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let employees = ["Fadi", "Yasser", "Mahmoud", "Abbood"];
//   if (employees.length === 4) {
//     resolveFunction(employees);
//   } else {
//     rejectFunction(Error(`There Are Only ${employees.length}`));
//   }
// })
//   .then(
//     (resolvedEmployees) => {
//       resolvedEmployees.length = 2;
//       return resolvedEmployees;
//     },
//     (error) => {
//       console.log(error);
//     }
//   )
//   .then((resolvedEmployees) => {
//     resolvedEmployees.length = 1;
//     return resolvedEmployees;
//   })
//   .then((theOnly) => {
//     console.log(theOnly.join(""));
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(console.log(`DONE`));
// Promise_-_Then__Catch_And_Finally

// Promise_And_XHR
// const getData = (userName) =>
//  new Promise((onSuccess, onFail) => {
//  let myRequest = new XMLHttpRequest();
//  myRequest.onload = function () {
//  if (this.readyState === 4 && this.status === 200) {
//  onSuccess(JSON.parse(this.responseText));
//  } else {
//  onFail(Error("Somthing Went Wrong When Fetching API"));
//  }
//  };
//  myRequest.open("GET", `https://api.github.com/users/${userName}/repos`);
//  myRequest.send();
//  });
// getData("KhaledMahfouz5")
//  .then((result) => {
//  for (let i = 0; i < result.length; i++) {
//  console.log(result[i].name);
//  }
//  })
//  .catch((err) => {
//  console.log(err);
//  });
// Promise_And_XHR

// Fetch_API
// let userName = "KhaledMahfouz5";
// fetch(`https://api.github.com/users/${userName}/repos`)
//   .then((response) => response.json())
//   .then((data) => {
//     for (let i = 0; i < data.length; i++) {
//       console.log(data[i].name);
//     }
//   });
////
// fetch("./data.json")
//   .then((response) => response.json())
//   .then((object) => {
//     let specs = ["Name", "Age", "Skills", "College Year"];
//     console.log(`${specs[0]} : ${object.name}`);
//     console.log(`${specs[1]} : ${object.age}`);
//     console.log(`${specs[2]} : ${object.skills.join(" / ")}`);
//     console.log(
//       `${specs[3]} : ${object.college.year} -- ${
//         object.college.hasFinished ? "Has Finished Studying" : "Still Studying"
//       }`
//     );
//   });
// Fetch_API

// Promise_All_And_All_Settled_And_Race
// #######################
// Promise.all(); /* It Accepts An array of Promises
// Creates a Promise that is resolved with an array
// of results when all of the provided Promises resolve,
// or rejected when any Promise is rejected. */
// #######################
// Promise.allSettled(); /* It Accepts An array of Promises
// then Creates a Promise that is resolved
// with an array of results
// when all of the provided Promises resolve or reject. */
// #######################
// Promise.race(); /* It Accepts An array of Promises
// returns the first promise executed
// resolved or rejected. */
// #######################
// Promise_All_And_All_Settled_And_Race

// Async_And_Training
// Way 1 :
// function getData() {
//   return new Promise((res, rej) => {
//     let users = [""];
//     if (users.length > 0) {
//       res("There Are Some Users :)");
//     } else {
//       rej(Error("No Users Found !!"));
//     }
//   });
// }
// #######################
// Way 2 :
// function getData() {
//   let users = [""];
//   if (users.length > 0) {
//     return Promise.resolve("There Are Some Users :)");
//   } else {
//     return Promise.reject(Error("No Users Found !!"));
//   }
// }
// #######################
// Way 3 :
// async function getData() {
//   let users = [""];
//   if (users.length > 0) {
//     return "There Are Some Users :)";
//   } else {
//     throw new Error("No Users Found !!");
//   }
// }
// getData().then(
//   (res) => {
//     console.log(res);
//   },
//   (rej) => {
//     console.log(rej);
//   }
// );
// Async_And_Training

// Await_And_Training
// let timeOut = 3000;
// const myPromise = new Promise((res, rej) => {
//   if (timeOut % 3 === 0) {
//     setTimeout(() => {
//       res("Good Job");
//     }, timeOut);
//   } else {
//     setTimeout(() => {
//       rej(Error("timeOut % 3 !== 0"));
//     }, timeOut);
//   }
// });
// // Way 1 :
// async function readData() {
//   console.log("Before Promise");
//   await myPromise.then(
//     (res) => {
//       console.log(res);
//     },
//     (rej) => {
//       console.log(rej);
//     }
//   );
//   console.log("After Promise");
// }
// // #################
// Way 2 :
// async function readData() {
//   console.log("Before Promise");
//   console.log(await myPromise);
//   console.log("After Promise");
// }
// readData();
// Await_And_Training

// Try__Catch_And_Finally_With_Fetch
// let timeOut = 3000;
// const myPromise = new Promise((res, rej) => {
//   if (timeOut % 3 === 0) {
//     setTimeout(() => {
//       res("Good Job");
//     }, timeOut);
//   } else {
//     setTimeout(() => {
//       rej(Error("timeOut % 3 !== 0"));
//     }, timeOut);
//   }
// });
// async function readData() {
//   console.log("Before Promise");
//   try {
//     console.log(await myPromise);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("After Promise");
//   }
// }
// readData();
// #########
async function fetchData() {
  console.log("Before Fetch");
  try {
    let userName = "KhaledMahfouz5";
    let myData = await fetch(`https://api.github.com/users/${userName}/repos`);
    console.log(await myData.json());
  } catch (err) {
    console.log(err);
  } finally {
    console.log("After Fetch");
  }
}
fetchData();
// Try__Catch_And_Finally_With_Fetch

/*
Congratulations ... You have Finished Js Course 
By Elzrero Web School ;D
*/
