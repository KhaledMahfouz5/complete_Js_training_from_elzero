let gTitle = document.createElement("title");
gTitle.innerText = `OOP`;
document.head.append(gTitle);

// Constructor_Function_Introduction
// function User(n, i, s) {
//   this.name = n;
//   this.id = i;
//   this.salary = s + 1000;
// }
// let userOne = new User("Khaled", 56465, 4000);
// let userTwo = new User("Mahmoud", 24867, 5000);
// let userThree = new User("Abo_Kief", 64382, 6000);
// console.log(
//   `Name = ${userOne.name} .. Id : ${userOne.id}\nSalary : ${userOne.salary}`
// );
// console.log(
//   `Name = ${userTwo.name} .. Id : ${userTwo.id}\nSalary : ${userTwo.salary}`
// );
// console.log(
//   `Name = ${userThree.name} .. Id : ${userThree.id}\nSalary : ${userThree.salary}`
// );
// Constructor_Function_Introduction

// Constructor_Function_New_Syntax
// class User {
//   constructor(n, i, s) {
//     this.name = n;
//     this.id = i;
//     this.salary = s + 1000;
//   }
// }
// let userOne = new User("Khaled", 56465, 4000);
// let userTwo = new User("Mahmoud", 24867, 5000);
// let userThree = new User("Abo_Kief", 64382, 6000);
// console.log(userOne instanceof User);
// console.log(userOne.constructor === User);
// Constructor_Function_New_Syntax

// Deal_With_Properties_And_Methods
// class User {
//   constructor(n, i, s) {
//     // Properties :
//     this.name = n || "userName";
//     this.id = i;
//     this.salary = s < 5000 ? s + 1000 : s;
//     this.msg = function () {
//       return `Hello ${this.name} .. Salary Is : ${this.salary}`;
//     };
//   }
//   // Methods :
//   msgMethod() {
//     return `Hello ${this.name} .. Salary Is : ${this.salary}`;
//   }
// }
// let userOne = new User("Khaled", 56465, 4000);
// let userTwo = new User("", 24867, 5000);
// let userThree = new User("Abo_Kief", 64382, 6000);
// console.log(
//   `Name = ${userOne.name} .. Id : ${userOne.id}\nSalary : ${userOne.salary}`
// );
// console.log(
//   `Name = ${userTwo.name} .. Id : ${userTwo.id}\nSalary : ${userTwo.salary}`
// );
// console.log(
//   `Name = ${userThree.name} .. Id : ${userThree.id}\nSalary : ${userThree.salary}`
// );
// console.log(userOne.msg());
// console.log(userThree.msgMethod());
// Deal_With_Properties_And_Methods

// Update_Properties_And_Built_In_Constructors
// class User {
//   constructor(n, i, s) {
//     // Properties :
//     this.name = n || "userName";
//     this.id = i;
//     this.salary = s < 5000 ? s + 1000 : s;
//     this.msg = function () {
//       return `Hello ${this.name} .. Salary Is : ${this.salary}`;
//     };
//   }
//   // Methods :
//   msgMethod() {
//     return `Hello ${this.name} .. Salary Is : ${this.salary}`;
//   }
//   setName(n) {
//     this.name = n;
//   }
// }
// let userTwo = new User("", 24867, 5000);
// userTwo.setName("Mahmoud");
// console.log(
//   `Name = ${userTwo.name} .. Id : ${userTwo.id}\nSalary : ${userTwo.salary}`
// );
// Update_Properties_And_Built_In_Constructors

// Class_Static_Properties_And_Method
// class User {
//   static count = 0;
//   constructor(n, i, s) {
//     // Properties :
//     User.count++;
//     this.name = n || "userName";
//     this.id = i;
//     this.salary = s < 5000 ? s + 1000 : s;
//     this.msg = function () {
//       return `Hello ${this.name} .. Salary Is : ${this.salary}`;
//     };
//   }
//   // Methods :
//   msgMethod() {
//     return `Hello ${this.name} .. Salary Is : ${this.salary}`;
//   }
//   setName(n) {
//     this.name = n;
//   }
// }
// let userOne = new User("", 24867, 5000);
// userOne.setName("Mahmoud");
// console.log(userOne.count);
// console.log(User.count);
// Class_Static_Properties_And_Method

// Class_Inheritance
// class User {
//   static count = 0;
//   constructor(n, i, s) {
//     // Properties :
//     User.count++;
//     this.name = n || "userName";
//     this.id = i;
//     this.salary = s < 5000 ? s + 1000 : s;
//     this.msg = function () {
//       return `Hello ${this.name} .. Salary Is : ${this.salary}`;
//     };
//   }
//   // Methods :
//   msgMethod() {
//     return `Hello ${this.name} .. Salary Is : ${this.salary}`;
//   }
//   setName(n) {
//     this.name = n;
//   }
// }
// class Admin extends User {
//   constructor(n, i, s, p) {
//     super(n, i, s);
//     this.permissions = p;
//   }
// }
// class SuperUser extends Admin {
//   constructor(n, i, s, isSuperUser = true) {
//     super(n, i, s, 10000000000);
//     this.isSuperUser = isSuperUser;
//   }
// }
// let fadi = new SuperUser("Fadi Kurdiah", 1, 5000);
// Class_Inheritance

// Class_Encapsulation
// class User {
//   static count = 0;
//   #expectedSalary;
//   #permissions;
//   constructor(n, i, es, p) {
//     // Properties :
//     User.count++;
//     this.name = n || "userName";
//     this.id = i;
//     this.#expectedSalary = es;
//     this.#permissions = p;
//   }
//   #fromDtoS() {
//     return parseInt(this.#expectedSalary) * 15 * 1000;
//   }
//   getPermissions() {
//     return this.#permissions;
//   }
//   getExpectedSalary() {
//     return this.#fromDtoS();
//   }
// }
// class Admin extends User {
//   constructor(n, i, es) {
//     super(n, i, es);
//     this.permissions = "Full";
//   }
//   summary() {
//     console.log(
//       `name is ${this.name} .. id is ${
//         this.id
//       } expectedSalary is : ${this.getExpectedSalary()} Permissions Are ${
//         this.permissions
//       }`
//     );
//   }
// }
// let userOne = new User("Khaled", 48746, "50 $", "Limited");
// let adminOne = new Admin("Ahmed", 5464, "450 $$$");
// console.log(userOne.getPermissions());
// console.log(userOne.getExpectedSalary() * 0.3);
// adminOne.summary();
// Class_Encapsulation

// Prototype
// class User {
//   constructor(n, i) {
//     this.name = n || "userName";
//     this.id = i;
//   }
//   sayHello() {
//     return `Hello ${this.name}`;
//   }
// }
// let userOne = new User("Khaled", 6412);
// console.log(User.prototype);
// console.log(userOne);
// console.log(String.prototype);
// //
// User.prototype.sayWelcome = function () {
//   return `Welcome ${this.name}`;
// };
// //
// Object.prototype.love = "Elzero Web School";
// String.prototype.addLove = function (val) {
//   return `😍️ ${this} 😍️`;
// };
// let str1 = "Khaled";
// let h3 = document.createElement("h3");
// h3.style.textAlign = "center";
// h3.innerText = "Mahmoud".addLove();
// document.body.appendChild(h3);
// Prototype

// Object_Meta_Data_And_Descriptor_Part_1
// const myObject = {
//   a: 1,
//   b: 2,
// };
// Object.defineProperty(myObject, "c", {
//   writable: true, // you can edit the value
//   enumerable: true, // it will be counted in loops as example
//   configurable: true, // you can change these settings for this property Again
//   value: 50,
// });
// // Object.defineProperty(myObject, "c", {
// //   writable: true,
// //   enumerable: true,
// //   configurable: true, // can't redefine non-configurable property "c"
// //   value: 50,
// // });
// myObject.c = 100;
// for (let prop in myObject) {
//   console.log(`${prop} : ${myObject[prop]}`);
// }
// Object_Meta_Data_And_Descriptor_Part_1

// Object_Meta_Data_And_Descriptor_Part_2
const myObject = {
  a: 1,
  b: 2,
};
Object.defineProperties(myObject, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 10,
  },
});
console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
console.log(Object.getOwnPropertyDescriptors(myObject));
// Object_Meta_Data_And_Descriptor_Part_2
