let title = "Object";
HTML_content = `<title>${title}</title><span>${title}</span></br></br>`;
document.write(HTML_content);

let user1 = {
  name: "Khaled",
  age: 19,
  skills: ["HTML", "Css", "Photoshop"],
  available: false,
  addrs: {
    KSA: "Gedda",
    SY: {
      addr1: "Damascus",
      addr2: "Aleppo",
    },
  },
  checkAv: function () {
    if (this.available) {
      return "Free To work";
    } else {
      return "Not Free";
    }
  },
};

// console.log(
//   `Name: ${user.name} / Age : ${user.age} / skills : [${user.skills.join(
//     " | "
//   )}]\nKSA_address : ${user.addrs.KSA} / Syria_address : ${
//     user["addrs"]["SY"]["addr1"]
//   },${user.addrs.SY.addr2} \n ${user.name} is ${user.checkAv()} Now`
// );

let user = {
  age: 20,
  doubleAge: function () {
    return this.age * 2;
  },
};
console.log(user);
console.log(user.age);
console.log(user.doubleAge());

let userCopy = Object.create(user);
console.log(userCopy);
userCopy.age = 38;
console.log(userCopy.age);
console.log(userCopy.doubleAge());

let final = Object.assign(user, user1, { bestFood: "Potato" });
console.log(final);
