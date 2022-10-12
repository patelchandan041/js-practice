let users = {
  getAge: function () {
    let age = new Date().getFullYear() - this.birth;
    return age;
  },
};

let student = {
  name: "chandan",
  birth: 2000,
  getAge: users.getAge,
};
let nihal = {
  name: "chandan",
  birth: 2000,
};
let chandan = {
  name: "chandan",
  birth: 2000,
};

// student.__proto__ = users;
// nihal.__proto__ = users;
// chandan.__proto__ = users;

console.log(student.getAge());
// console.log(nihal.getAge());
// console.log(chandan.getAge());
