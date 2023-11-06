let gTitle = document.createElement("title");
gTitle.innerText = `Generator Functions`;
document.head.append(gTitle);

// Generator_Function_Introduction
// function* generateNumbers() {
//   yield 1;
//   //   alert("Hello After yield 1");
//   yield 2;
//   yield 3;
//   yield 4;
// }
// let genereator = generateNumbers();
// console.log(typeof genereator);
// // console.log(genereator.next());
// // console.log(genereator.next());
// for (let value of generateNumbers()) {
//   console.log(value);
// }
// console.log("#".repeat(20));
// for (let value of genereator) {
//   console.log(value);
// }
// Generator_Function_Introduction

// Delegate_Generator_Function
// function* generateNumbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// function* generateLetters() {
//   yield "A";
//   yield "B";
//   yield "C";
// }
// function* generateAll() {
//   yield* generateNumbers();
//   yield* generateLetters();
//   yield* [4, 5, 6];
// }
// let genereator = generateAll();
// console.log(genereator.next());
// console.log(genereator.next());
// console.log(genereator.next());
// console.log(genereator.next());
// console.log(genereator.next());
// console.log(genereator.next());
// console.log(genereator.next());
// console.log(genereator.return());
// console.log(genereator.next());
// console.log(genereator.next());
// Delegate_Generator_Function

// Generate_Infinite_Numbers
function* generateNumbers() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
let genereator = generateNumbers();
console.log(genereator.next().value);
console.log(genereator.next().value);
console.log(genereator.next().value);
console.log(genereator.next().value);
console.log(genereator.next().value);
console.log(genereator.next().value);
console.log(genereator.next().value);
console.log(genereator.next().value);
console.log(genereator.next().value);
console.log(genereator.next().value);
// Generate_Infinite_Numbers
