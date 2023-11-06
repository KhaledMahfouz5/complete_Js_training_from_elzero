let gTitle = document.createElement("title");
gTitle.innerText = `Destructuring`;
document.head.append(gTitle);

// Destructuring_Arrays_Part_1
// let myFriends = ["Fadi", "Mahmoud", "Ziad", "Hamza"];
// let [a, b, c, d, e = "Khaled"] = myFriends;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// Destructuring_Arrays_Part_1

// Destructuring_Arrays_Part_2
// let myFriends = ["Ahmed", "Osama", "Ali", ["Shady", "Amr", ["Hamza", "Ziad"]]];
// let [, , , [a, , [, b]]] = myFriends;
// console.log(a); // Shady
// console.log(b); // Ziad
// Destructuring_Arrays_Part_2

// Destructuring_Arrays_Part_3_-_Swap_Variables
// let khaled = "Busher";
// let busher = "Khaled";
// [khaled, busher] = [busher, khaled];
// console.log(khaled); // Khaled
// console.log(busher); // Busher
// Destructuring_Arrays_Part_3_-_Swap_Variables

// Destructuring_Objects_Part_1
// let user = {
//   theName: "Khaled",
//   theAge: 19,
//   theTitle: "Developer",
//   theCountry: "Syria",
// };
// let user2 = {
//   theName: "Busher",
//   theAge: 13,
//   theTitle: "Student",
//   theCountry: "Syria",
// };
// let { theName, theAge, theTitle, theCountry } = user;
// ({ theName, theAge, theCountry } = user2); // you call the property by it's name
// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);
// Destructuring_Objects_Part_1

// Destructuring_Objects_Part_2
// let user = {
//   theName: "Khaled",
//   theAge: 19,
//   favorColor: "Blue",
//   theTitle: "Developer",
//   theCountry: "Syria",
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };
// let user2 = {
//   theName: "Busher",
//   theAge: 13,
//   theTitle: "Student",
//   theCountry: "Syria",
// };
// let {
//   theName, //call the property by it's name
//   theCountry: cnt, // the property by it's name and change it
//   favorColor = "Red", // add new property
//   food: fd = "falafel",
//   skills: { html: h },
// } = user;
// console.log(
//   `Name is ${theName} Title is ${user2.theTitle} Country is ${cnt}\nFavor color is ${favorColor}\nFood is ${fd}`
// );
// console.log(`HTML : ${h}`);
// let { html: sk1, css: sk2 } = user.skills;
// console.log(sk1 + " " + sk2);
// Destructuring_Objects_Part_2

// Destructuring_Function_Parameters
// let user = {
//   theName: "Khaled",
//   theAge: 19,
//   favorColor: "Blue",
//   theTitle: "Developer",
//   theCountry: "Syria",
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };
// showDetails(user);
// function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
//   console.log(`name : ${n} Age : ${a} css skill : ${c}%`);
// }
// Destructuring_Function_Parameters

// Destructuring_Mixed_Content
// let user = {
//   theName: "Khaled",
//   theAge: 19,
//   skills: ["HTML", "CSS", "JS"],
//   adresses: {
//     syria: "Damascus",
//     ksa: "Jedda",
//   },
// };
// const {
//   theName: n,
//   theAge: a,
//   skills: [h, , j],
//   adresses: { syria: s },
// } = user;
// console.log(`${n} ${a} ${h} ${j} ${s}`);
// Destructuring_Mixed_Content

// Destructuring_Challenge
// let chosen = 3;
// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];
// function showDetails(t, ag, av, last) {
//   console.log(t);
//   console.log(ag);
//   console.log(av ? "Available For Hire" : "Not Available");
//   console.log(last);
// }
// switch (chosen) {
//   case 1:
//     [
//       {
//         title: t,
//         age: ag,
//         available: av,
//         skills: [, last],
//       },
//       ,
//     ] = myFriends;
//     showDetails(t, ag, av, last);
//     break;
//   case 2:
//     [
//       ,
//       {
//         title: t,
//         age: ag,
//         available: av,
//         skills: [, last],
//       },
//     ] = myFriends;
//     showDetails(t, ag, av, last);
//     break;
//   case 3:
//     [
//       ,
//       ,
//       {
//         title: t,
//         age: ag,
//         available: av,
//         skills: [, last],
//       },
//     ] = myFriends;
//     showDetails(t, ag, av, last);
//     break;
//   default:
//     console.log(undefined);
// }
// Destructuring_Challenge
