let gTitle = document.createElement("title");
gTitle.innerText = `Date And Time`;
document.head.append(gTitle);

// Get_Date_And_Time
// let dateNow = new Date();
// let birthday = new Date("Sep 11 , 04");
// console.log((dateNow - birthday) / 1000 / 60 / 60 / 24 / 365);
// console.log(dateNow);
// console.log(dateNow.getTime()); // Number Of Milliseconds
// console.log(dateNow.getDate()); // Day Of The Month
// console.log(dateNow.getDay()); // Day Of The Week -- ZERO Based --
// console.log(dateNow.getFullYear());
// console.log(dateNow.getMonth()); // It's ZERO Based
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getSeconds());
// Get_Date_And_Time

// Set_Date_And_Time
// let dateNow = new Date();
// console.log(dateNow);
// console.log("#".repeat(20));
// // ###################
// dateNow.setTime(0);
// console.log(dateNow);
// console.log("#".repeat(20));
// // ###################
// dateNow.setTime(10000);
// console.log(dateNow);
// console.log("#".repeat(20));
// // ###################
// dateNow.setDate(0);
// console.log(dateNow);
// console.log("#".repeat(20));
// // ###################
// dateNow.setFullYear(2020, 14, 35);
// console.log(dateNow);
// console.log("#".repeat(20));
// ###################
// Set_Date_And_Time

// Tracking_Operations_Time
// let start = new Date();
// // Operation
// for (let i = 0; i < 100000; i++) {
//   let div = document.createElement("div");
//   div.innerText = i;
//   document.body.appendChild(div);
// }
// //
// let end = new Date();
// let duration = end - start;
// console.log(duration);
// Tracking_Operations_Time
