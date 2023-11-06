let gTitle = document.createElement("title");
gTitle.innerText = `regular_expression`;
document.head.append(gTitle);

// Intro_And_What_Is_Regular_Expression
///////////
// Intro_And_What_Is_Regular_Expression

// Regular_Expressions_-_Modifiers
// let myString = "Hello Elzero Web School I Love elzero";
// let rgEx = /elzero/gi;
// console.log(myString.match(rgEx));
// Regular_Expressions_-_Modifiers

// Regular_Expressions_-_Ranges_Part_1
// let tld = "Com Net Org Info Code Io";
// let tldRx = /(org|info|io)/gi;
// console.log(tld.match(tldRx));
// //
// let nums = "12345678910";
// let numsRx = /[0-9]/g;
// console.log(nums.match(numsRx));
// //
// let nNums = "12345678910";
// let nNumsRx = /[^0-2]/g;
// console.log(nNums.match(nNumsRx));
// //
// let sNums = "1@23#4$567%%891**0";
// let sNumsRx = /[^0-9]/g;
// console.log(sNums.match(sNumsRx));
// //
// let practice = "Os1 Os1Os Os2 Os8 Os8Os";
// let practiceRx = /Os[5-9]Os/g;
// console.log(practice.match(practiceRx));
// Regular_Expressions_-_Ranges_Part_1

// Regular_Expressions_-_Ranges_Part_2
// let myString = "AaBbcdefG123!234%^&*";
// let aTozSmall = /[a-z]/g;
// let notaTozSmall = /[^a-z]/g;
// console.log(myString.match(notaTozSmall));
// console.log(myString.match(aTozSmall));
// //
// let aTozCapital = /[A-Z]/g;
// let notaTozCapital = /[^A-Z]/g;
// console.log(myString.match(notaTozCapital));
// console.log(myString.match(aTozCapital));
// //
// let aAcAe = /[ace]/g;
// let naAcAe = /[^ace]/g;
// console.log(myString.match(aAcAe));
// console.log(myString.match(naAcAe));
// //
// let allLtters = /[a-z]/gi;
// let noLetters = /[^a-z]/gi;
// let specials = /[^a-z0-9]/gi;
// console.log(myString.match(allLtters));
// console.log(myString.match(noLetters));
// console.log(myString.match(specials));
// Regular_Expressions_-_Ranges_Part_2

// Regular_Expressions_-_Character_Classes_Part_1
// let email = "O@@@g...com o@g.com o@g.net A@Y.com O-g.com o@s.org 1@1.com";
// let dot = /./g;
// console.log(email.match(dot));
// let word = /\w/g;
// console.log(email.match(word));
// let valid = /\w@\w.(com|net)/g;
// console.log(email.match(valid));
// Regular_Expressions_-_Character_Classes_Part_1

// Regular_Expressions_-_Character_Classes_Part_2
// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
// let rx = /(\bspam|spam\b)/gi;
// console.log(names.match(rx));
// // test method :
// console.log(rx.test(names));
// console.log(/(\bspam|spam\b)/gi.test("Khaled"));
// console.log(/(\bspam|spam\b)/gi.test("1Spam"));
// Regular_Expressions_-_Character_Classes_Part_2

// Regular_Expressions_-_Quantifiers_Part_1
// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mRx = /\w+@\w+.\w+/gi;
// console.log(mails.match(mRx));
// let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers or No 0
// let nRx = /0\d*0/gi;
// console.log(nums.match(nRx));
// let urls = "https://google.com http://www.website.net web.com www.website.net"; // http + https
// let uRx = /(https?:\/\/)?(www.)?\w+.\w+/gi;
// console.log(urls.match(uRx));
// Regular_Expressions_-_Quantifiers_Part_1

// Regular_Expressions_-_Quantifiers_Part_2
// let serials = "S100S S3000S S50000S S950000S";
// console.log(serials.match(/S\d{3}S/gi)); // S[Three Numbers]S
// console.log(serials.match(/S\d{4,5}S/gi)); // S[Four Or Five Numbers]S
// console.log(serials.match(/S\d{4,}S/gi)); // S[At Least Four Numbers]S
// Regular_Expressions_-_Quantifiers_Part_2

// Regular_Expressions_-_Quantifiers_Part_3
// let myString = "We Love Programming";
// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";
// console.log(/ing$/gi.test(myString));
// console.log(/^we/gi.test(myString));
// console.log(/lz$/gi.test(names));
// console.log(/^\s/gi.test(names));
// //
// console.log(names.match(/\d\w{5}(?=z)/gi));
// console.log(names.match(/\d\w{8}(?!Z)/gi));
// Regular_Expressions_-_Quantifiers_Part_3

// Regular_Expressions_-_Replace_With_Pattern
/*HTML :
    <form action="" method="get" id="register">
    <input type="text" id="phone" name="the-phone" maxlength="15" aria-placeholder="(1234) 567-8910"/>
    <input type="submit" value="Register">
    </form>
 */
// let txt = "We Love Programming And @ Because @ Is Amazing";
// console.log(txt.replace("@", "JavaScript"));
// console.log(txt.replaceAll(/@/gi, "JavaScript"));
// Regular_Expressions_-_Replace_With_Pattern

// Regular_Expressions_-_Form_Validation
// let msg = document.createElement("h3");
// document.forms[0].onsubmit = function () {
//   let phoneInput = document.getElementById("phone");
//   let value = phoneInput.value;
//   let phoneRx = /\(\d{4}\)\s\d{3}-\d{4}/gi;
//   if (phoneRx.test(value) == 0) {
//     document.body.prepend(msg);
//     msg.innerText = "Please Match The Pattern";
//     phoneInput.setAttribute("placeholder", "(1234) 567-8910");
//     phoneInput.style.place = "red";
//     return false;
//   }
// };
// Regular_Expressions_-_Form_Validation

// Regular_Expressions_-_Challenge
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
let url6 = "http://127.0.0.1:8384/";
//
let rx =
  /(https?:\/\/)?(\d+.\d+.\d+.\d+(:\d+)?|(www.)?\w+.\w+(:\d+\/\w+.\w+\W+\w+\W+(\w+)?\W?\w+\W?\w+)?)/gi;
console.log(url1.match(rx));
console.log(url2.match(rx));
console.log(url3.match(rx));
console.log(url4.match(rx));
console.log(url5.match(rx));
console.log(url6.match(rx));
// Regular_Expressions_-_Challenge
